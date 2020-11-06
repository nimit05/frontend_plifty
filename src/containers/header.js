import React , {useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import search from '../images/search.svg'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {SignOut} from '../redux'

function Header(props){

    const [search_bar , setSearch_bar] = useState(false)

    useEffect (async() => {
        await fetch('/api/login/session')
        .then((res) => res.json())
        .then((data) => {
          if(!data.token){
            localStorage.clear()
          }
        })

        let header = await document.querySelector('#header')
        
        window.onscroll = () => {
        
            var top = window.scrollY
            if(top >= 10){
                header.classList.add('active')
            }else{
                header.classList.remove('active')
            }
        }
    } , [])
    
        return(
            <div className = "header" id = "header">
                <div className = "header_inside_div">
                
                    <div className = "name_logo">
                            <div className = "logo">

                            </div>
                            <Link to = "/" className = "site_name">
                                PLIFTY
                            </Link>
                    </div>
                 
                    {props.loggedin ? (
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
                            <Link to = "/players" className = "link">
                                Players
                            </Link>
                            <Link to = "/messages" className = "link">
                                Messages
                            </Link>
                            <div className = "link">
                                Updates
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
