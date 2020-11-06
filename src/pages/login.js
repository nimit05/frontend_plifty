import React , {useState} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {login} from '../redux'

function Login(props){

    const [inv_user , setInv_user] = useState(false)
    const [inv_pass , setInv_pass] = useState(false)
    const [logindata , setLogindata] = useState({username_lp : " " , password_lp : " "})

    const handleLogin = async() => {
       
        setInv_pass(false)
        setInv_user(false)

        await props.login(logindata)
        await IsUser()
    }

    const IsUser = () => {
    
         if(props.error.indexOf('username') != -1){
            setInv_user(true)
        }
        else if(props.error.indexOf('password') != -1){
            setInv_pass(true)
        }else{
            window.location.href = '/'
        }
    }

        return(
            <div className = "login_page">
                <div className = "site_name_lp" onClick = {() => {
                    window.location.href = "/"
                }}>
                    <div className = "icon"></div>
                    <div className = "name">Plifty</div>
                </div>
                <div className = "login_heading">
                    LOGIN
                </div>
                <div className = "input_feild_lp">
                    <label for = "username">Email</label>
                    <input type = "email" name = "username" id = "username_lp" value = {logindata.username_lp}
                     onChange = {e => setLogindata({...logindata , username_lp : e.target.value})} />
                    {inv_user && (
                        <div className = "lower_alert">
                            {props.error}
                        </div>
                        )}
                </div>
                <div className = "input_feild_lp">
                    <label for = "password">Password</label>
                    <input type = "password" name = "password" id = "password_lp" value = {logindata.password_lp}
                     onChange = {e => setLogindata({...logindata , password_lp : e.target.value})} />
                    {inv_pass && (
                        <div className = "lower_alert">
                            {props.error}
                        </div>
                        )}
                </div>
                <div className = "login_button">
                    <button onClick = {handleLogin}>
                        Login
                    </button>
                </div>
                <div className = "signup_route" >
                    New to Plifty ? <a onClick = {() => {
                    window.location.href = "/signup"
                }}>Sign Up</a>
                </div>
            </div>
        )
    }


const mapStateToProps = state => {
    return{
        error : state.login.error ,
        loggedin : state.login.loggedin,
        loading : state.login.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login : bindActionCreators(login , dispatch)
      };
}


export default connect(mapStateToProps , mapDispatchToProps)(Login)