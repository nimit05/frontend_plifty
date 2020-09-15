import React from 'react';
import { Link } from "react-router-dom";
import notif from '../images/bell.svg'
import search from '../images/search.svg'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {SignOut} from '../redux'

class Header extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                search_bar : false
        }
    }
    render(){
        return(
            <div className = "header">
                <div className = "header_inside_div">
                
                    <div className = "name_logo">
                            <div className = "logo">

                            </div>
                            <Link to = "/" className = "site_name">
                                PLIFTY
                            </Link>
                    </div>
                 
                    {this.props.loggedin ? (
                        <div className = "page_links">
                        <div className = "search_header">
                            <input type = "text" placeholder = "Search" />
                            <div className = "search_bar">
                                <img src = {search} alt = "" />
                            </div>
                        </div>
                            <div className = "link">
                                Tournaments
                            </div>
                            <div className = "link">
                                Profile
                            </div>
                            <div className = "link">
                                About Us    
                            </div>
                            <div className = "link">
                                <img src = {notif} alt = "" />
                            </div>
                    </div>
                    ) : (
                        <div className = "login_signup_links">
                       
                            <div className = "link" onClick = {() => {
                                window.location.href = '/login'
                            }}>
                                Login
                            </div>
                            <div className = "link" onClick = {() => {
                                window.location.href = '/signup'
                            }}>
                                SignUp
                            </div>
                            <div className = "link">
                                About Us    
                            </div>
                        
                    </div>
                    )}
                 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        loggedin : state.login.loggedin,
        username : state.login.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SignOut : bindActionCreators(SignOut , dispatch)
      };
}

export default connect(mapStateToProps ,mapDispatchToProps)(Header)
