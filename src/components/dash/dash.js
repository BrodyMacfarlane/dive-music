import React, { Component } from 'react'
import axios from 'axios'
import { getUserInfo } from './../../ducks/users'
import { connect } from 'react-redux'
import Players from '../player/player'

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
                <div className="welcome-user">
                    <div className="welcome-text">
                        Welcome <br /> { user ? user.username : null }
                    </div>
                    <div className="user-id">
                         { user.auth_id ? 'ID: ' + user.auth_id : null }
                    </div>
                    <div>
                        <a class="logout-link" href='http://localhost:3535/auth/logout'>
                            <div className="logout">Log out</div>
                        </a>
                    </div>
                </div>
                
                <Players />
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