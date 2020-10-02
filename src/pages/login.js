import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {login} from '../redux'

class Login extends React.Component{

    handleLogin = async() => {

        let data = {
            username : document.getElementById('username_lp').value,
            password : document.getElementById('password_lp').value
        }

        this.setState(() => {
            return{
                inv_user : false,
                inv_pass : false
            }
        })

        await this.props.login(data)
        await this.IsUser()
    }

    IsUser = () => {
    
         if(this.props.error.indexOf('username') != -1){
            this.setState(() => {
                return{
                    inv_user : true
                }
            })
        }
        else if(this.props.error.indexOf('password') != -1){
            this.setState(() => {
                return{
                    inv_pass : true
                }
            })
        }else{
            window.location.href = '/'
        }
    }

        state = {
            inv_user : false,
            inv_pass : false
        }

    render(){
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
                    <input type = "email" name = "username" id = "username_lp" />
                    {this.state.inv_user && (
                        <div className = "lower_alert">
                            {this.props.error}
                        </div>
                        )}
                </div>
                <div className = "input_feild_lp">
                    <label for = "password">Password</label>
                    <input type = "password" name = "password" id = "password_lp" />
                    {this.state.inv_pass && (
                        <div className = "lower_alert">
                            {this.props.error}
                        </div>
                        )}
                </div>
                <div className = "login_button">
                    <button onClick = {this.handleLogin}>
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