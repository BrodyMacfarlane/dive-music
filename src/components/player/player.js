import React, { Component } from 'react';
import axios from 'axios';

export default class Players extends Component {
  constructor(){
    super()
    this.state = {
      songs: []
    }
  }
  componentDidMount(){
    axios.get('/api/getSongs')
    .then((response) => {
      console.log(response.data)
      this.setState({songs: response.data})
    })
  }
  render() {
    return (
      <div>
        {
        this.state.songs.map((song, i) => {
          console.log(song.url)
          return (
            <div key={i} className="song">
              {song.title}
              <audio src={song.url} controls />
            </div>
          )
        })
        }
      </div>
    );
  }
}
