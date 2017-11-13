import React, { Component } from 'react';
import axios from 'axios';

export default class Players extends Component {
  constructor(){
    super()
    this.state = {
      songs: [{title: ''}]
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
          return (
            <div key={i} className="song">
              <div className="song-title">
                {song.title.split(".")[0]}
              </div>
              <div>
                <a className="song-link" href={`/#/profile/${song.creator_id}`}>
                  {song.username}
                </a>
              </div>
              <audio className="audio" src={song.url} controls />
            </div>
          )
        })
        }
      </div>
    );
  }
}
