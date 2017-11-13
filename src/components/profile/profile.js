import React, { Component } from 'react'
import axios from 'axios'

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            songs: [{username: '', title: ''}]
        }
        console.log(this.props.location.pathname)
    }
    componentDidMount(){
        
        axios.get(`/api${this.props.location.pathname}`)
        .then((response) => {
            this.setState({songs: response.data})
            console.log(this.state.songs)
        })
    }
    render(){
        const username = this.state.songs[0].username
        return(
            <div>
                <div className="welcome-user">
                    {username ? `${username}'s profile` : 'loading...'}
                </div>
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
        )
    }
}