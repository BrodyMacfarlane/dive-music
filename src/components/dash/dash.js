import React, { Component } from 'react'
import axios from 'axios'
import { getUserInfo } from './../../ducks/users'
import { connect } from 'react-redux'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            userData: {}
        }
    }
    componentDidMount(){
        this.props.getUserInfo()
    }
    render(){
        const user = this.props.user
        return(
            <div className='component dash-component'>
                <a href="/#/upload"><div>Upload a song</div></a>
                <p>Username: { user ? user.username : null }</p>
                <p>Email: { user ? user.email : null }</p>
                <p>ID: { user ? user.auth_id : null }</p>
                <a href='http://localhost:3535/auth/logout'><button>Log out</button></a>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUserInfo})(Dashboard)