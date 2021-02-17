import React , {useState} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {login} from '../redux'

const Login = () => {

    const [inv_user , setInv_user] = useState(false)
    const [inv_pass , setInv_pass] = useState(false)
    const [logindata , setLogindata] = useState({username : " " , password : " "})
    const {error , loggedin , loading} = useSelector(state => ({
        error : state.login.error,
        loggedin : state.login.loggedin,
        loading : state.login.loading
    }))
    const dispatch = useDispatch()

    const handleLogin = async() => {
       
        setInv_pass(false)
        setInv_user(false)

        await dispatch(login(logindata))
        await IsUser()
    }

    const IsUser = () => {
        
         if(error.toString().indexOf('username') != -1){
            setInv_user(true)
        }
        else if(error.toString().indexOf('password') != -1){
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
                <div className = "input_feild_lp input_bar_uni">
                    <label for = "username">Email</label>
                    <input type = "email" name = "username"  value = {logindata.username}
                     onChange = {e => setLogindata({...logindata , username : e.target.value})} />
                    {inv_user && (
                        <div className = "lower_alert">
                            {error}
                        </div>
                        )}
                </div>
                <div className = "input_feild_lp input_bar_uni">
                    <label for = "password">Password</label>
                    <input type = "password" name = "password" id = "password_lp" value = {logindata.password}
                     onChange = {e => setLogindata({...logindata , password : e.target.value})} />
                    {inv_pass && (
                        <div className = "lower_alert">
                            {error}
                        </div>
                        )}
                </div>
                <div className = "login_button uni_button_plifty">
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

export default Login;