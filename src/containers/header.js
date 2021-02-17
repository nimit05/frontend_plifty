import React , {useEffect} from 'react';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import search from '../images/search.svg'

const Header = () =>{

    const {loggedin , username} = useSelector(state => ({
        loggedin : state.login.loggedin,
        username : state.login.username
    }))

    useEffect (() => {
        const LoginAction = async() => {
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
        }
        LoginAction()
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
                 
                    {loggedin ? (
                        <div className = "page_links">
                        <div className = "search_header">
                            <input type = "text" placeholder = "Search" />
                            <div className = "search_bar">
                                <img src = {search} alt = "" />
                            </div>
                        </div>
                            <Link className = "link" to = "/tournaments">
                                Tournaments
                            </Link>
                            <Link to = "/players" className = "link">
                                Players
                            </Link>
                            <Link to = "/messages" className = "link">
                                Messages
                            </Link>
                            <Link className = "link" to = "/teams">
                                Teams
                            </Link>
                            
                    </div>
                    ) : (
                        <div className = "login_signup_links">
                       
                            <div className = "link" onClick = {() => {
                                window.location.href = '/login'
                            }}>
                                Login
                            </div>
                            <div className = "link"  onClick = {() => {
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

export default Header;
