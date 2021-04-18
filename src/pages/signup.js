import React , {useState} from 'react';
import {useSelector , useDispatch} from 'react-redux'
import {CreateUser} from '../redux'
import Button from '../components/Button'

 const Signup = () => {
    const [inv_email , setInv_email] = useState(false)
    const [inv_phone , setInv_phone] = useState(false)
    const [match_pass , setMatch_pass] = useState(true)
    const [userData , setUserData] = useState({f_name : " " , l_name : " " ,
    email : " " , password : " " , phone_num : " " , type : " "})
    const err = useSelector(state => state.signup.error)
    const dispatch = useDispatch();

    const ValidUsers = () => {
        if(typeof(err) == 'string'){
            if(err.indexOf('phone') != -1){   
                setInv_phone(true)
            }
            else if(err.indexOf('email') != -1){
                setInv_email(true)
            }
        }

        window.location.href = '/'
    }

    const Signup = async() => {

        if(document.getElementById('password').value !== document.getElementById('cpassword').value){
            setMatch_pass(false)
        }else{
           setMatch_pass(true)

         

        await dispatch(CreateUser(userData))    

        setInv_email(false)
        setInv_phone(false)
    
       await ValidUsers()
        
    }
    }

        return(
            <div className = "signup_page">
                <div className = "site_name_sp" onClick = {() => {
                    window.location.href = "/"
                }}>
                    <div className = "icon"></div>
                    <div className = "name">Plifty</div>
                </div>
                <div className = "sign_up_cont">
                    <div className = "sign_up_heading">Sign Up</div>
                    <div className = "signup_details">
                        <div className = "input_feilds_sp">
                            <div className = "input_bar">
                                <label for = "f_name">First Name</label>
                                <input id = "f_name" name = "f_name" value = {userData.f_name} onChange = {
                                    e => setUserData({...userData , f_name : e.target.value})
                                }/>
                            </div>
                        </div>
                        <div className = "input_feilds_sp">
                            <div className = "input_bar">
                                <label for = "l_name">Last Name</label>
                                <input id = "l_name" name = "l_name" value = {userData.l_name} onChange = {
                                    e => setUserData({...userData , l_name : e.target.value})
                                } />
                            </div>
                        </div>
                        <div className = "input_feilds_sp">
                            <div className = "icon"></div>
                            <div className = "input_bar">
                                <label for = "email">E-Mail</label>
                                <input id = "email" name = "email" type = "email" value = {userData.email} onChange = {
                                    e => setUserData({...userData , email : e.target.value})
                                } />
                                {inv_email && (
                                    <div className = "lower_alert">
                                        {err}
                                    </div>
                                    )}
                            </div>
                        </div>
                        <div className = "input_feilds_sp">
                            <div className = "icon"></div>
                            <div className = "input_bar">
                                <label for = "phone_num">Phone Number</label>
                                <input id = "phone_num" name = "phone_num" value = {userData.phone_num} onChange = {
                                    e => setUserData({...userData , phone_num : e.target.value})
                                } />
                                {inv_phone && (
                                    <div className = "lower_alert">
                                        {typeof(err) == 'string' && err}
                                    </div>
                                    )}
                            </div>
                        </div>
                        <div className = "input_feilds_sp">
                            <div className = "icon"></div>
                            <div className = "input_bar">
                                <label for = "password">Password</label>
                                <input id = "password" name = "password" type = "password" value = {userData.password} onChange = {
                                    e => setUserData({...userData , password : e.target.value})
                                } />
                            </div>
                        </div>
                        <div className = "input_feilds_sp">
                            <div className = "icon"></div>
                            <div className = "input_bar">
                                <label for = "password">Confirm Password</label>
                                <input id = "cpassword" name = "password" type = "password" />
                            </div>
                            {!match_pass && (
                                <div className = "lower_alert">
                                    password does not match
                                </div>
                                )}
                            
                        </div>
                        {/* <div className = "continue_cbox">
                            <div className = "cont_text">Continue As</div>
                            <div className = "checkboxes">
                                <label for = "player">Player</label>
                                <input type = "radio" name = "player" id = "player_cb" />

                                <label for = "player">Expert</label>
                                <input type = "radio" name = "player" id = "expert_cb" />
                            </div>
                        </div> */}
                        <div className = "submit_btn_signup uni_button_plifty">
                            <button onClick = {Signup}>Sign Up</button>
                        </div>
                        <div className = "login_route">
                            Have an Account ? 
                            <a onClick = {() => {
                                window.location.href = "/login"
                            }}> Login</a>
                        </div>
                      
                    </div>
                </div>
            </div>
        )
    }



export default Signup;