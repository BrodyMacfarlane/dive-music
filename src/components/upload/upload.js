import React, { Component } from 'react'
import Droppy from './droppy'
import './upload.css'

export default class Upload extends Component {
    render(){
        return(
            <div className="component upload-component">
                <Droppy />
            </div>
        )
    }
}