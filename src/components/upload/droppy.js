import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import { getUserInfo } from './../../ducks/users'
import { connect } from 'react-redux'
import './droppy.css'

class Droppy extends Component {
    constructor(props) {
      super(props)
      this.state = { files: [] }
    }
    componentDidMount(){
      this.props.getUserInfo()
    }
    onDrop(files) {
      var file = files[0]
      console.log(files)
      this.setState({
        files: files
      })
      let filesTS = {
        filename: file.name,
        filetype: file.type
      }
      // files[0];
      
      axios.post('http://localhost:3535/api/getSignedURL', filesTS)
      .then((response) => {
        const signedRequest = response.data.signedRequest;
        const url = response.data.url;
        var options = {
          headers: {
            'Content-Type': file.type
          }
        };
        axios.put(signedRequest, file, options)
        .then((result) => {
          let auth_id = this.props.user.auth_id;
          let songData = {
            creator_id: auth_id,
            title: file.name,
            url: url
          }
          axios.post('http://localhost:3535/api/newSong', songData)
          // console.log(result)
        })
        .catch((err) => {
          console.log(err)
        })
      })
    }
    render() {
      const user = this.props.user
      return (
        <div className="container dropzone-container">
          <div className="dropzone">
            <Dropzone className="droppydrop" onDrop={this.onDrop.bind(this)}>
              <div>Drop a file here, or click to select a file to upload.</div>
            </Dropzone>
          </div>
            <div>Dropped file:</div>
            <div>
              {
                this.state.files.map(f => <div key={f.name}>{f.name} - {f.size/1024 > 1000 ? (Math.floor(f.size/104857.6))/10 + "mb" : (Math.floor(f.size/102.4))/10 + "kb"}</div>)
              }
            </div>
            <p>Users auth id: { user ? user.auth_id : null }</p>
        </div>
      );
    }
  }
  function mapStateToProps(state) {
    return {
      user: state.user
    }
  }
  export default connect(mapStateToProps, {getUserInfo})(Droppy)