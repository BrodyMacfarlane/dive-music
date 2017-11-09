import React, { Component } from 'react';

// audio source
const streamUrl = 'https://s3-us-west-1.amazonaws.com/mp3-storage-app/110203336999094146565/testsong.wav';

// some track meta information
const trackTitle = 'Pllm - RS8B';

export default class Players extends Component {
  constructor(){
    super()
    this.state = {
      songs: [{trackTitle: "PLLM", streamUrl:"https://s3-us-west-1.amazonaws.com/mp3-storage-app/110203336999094146565/newsong.wav"}]
    }
  }
  render() {
    return (
      <div>
        lol
      </div>
      // <div>
      //   <div>
      //     <div>{song.trackTitle}</div>
      //     <audio controls="controls" src={song.streamUrl}/>
      //   </div>
      // </div>
    );
  }
}
