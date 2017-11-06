import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return(
            <div className="component login-component">
                <div className="grid-container">
                    <div className="inner-grid">
                        <div className="big-letter-logo big-letter-logo-top big-letter-logo-left D">D</div>
                        <div className="big-letter-logo big-letter-logo-top big-letter-logo-right I">I</div>
                        <div className="big-letter-logo big-letter-logo-bot big-letter-logo-left V">V</div>
                        <div className="big-letter-logo big-letter-logo-bot big-letter-logo-right E">E</div>
                    </div>
                    <div className="underline"></div>
                    <div className="we-are">WE ARE THE ARTISTS</div> 
                </div>
                <div className="view-collection">
                    <a href={process.env.REACT_APP_LOGIN}>
                        VIEW COLLECTION
                    </a>
                </div>
            </div> 
        )
    }
}