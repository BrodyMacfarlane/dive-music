import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'

export class Droppy extends Component {
    constructor() {
      super()
      this.state = { files: [] }
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
          console.log(result)
        })
        .catch((err) => {
          console.log(err)
        })
      })
    }
    render() {
      return (
        <section>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this)}>
              <p>Try dropping some files here, or click to select files to upload.</p>
            </Dropzone>
          </div>
          <aside>
            <h2>Dropped files</h2>
            <ul>
              {
                this.state.files.map(f => <li key={f.name}>{f.name} - {f.size/1024 > 1000 ? (Math.floor(f.size/104857.6))/10 + "mb" : (Math.floor(f.size/102.4))/10 + "kb"}</li>)
              }
            </ul>
          </aside>
        </section>
      );
    }
  }