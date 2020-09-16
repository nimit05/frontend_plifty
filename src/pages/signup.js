import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {CreateUser} from '../redux'

class Signup extends React.Component{

    ValidUsers = () => {
        if(this.props.error.indexOf('phone') != -1){
            this.setState(() => {
                return{
                    inv_phone : true
                }
            })
        }
        else if(this.props.error.indexOf('email') != -1){
            this.setState(() => {
                return{
                    inv_email : true
                }
            })
        }
    }

    Signup = async() => {

        if(document.getElementById('password').value !== document.getElementById('cpassword').value){
            this.setState(() => {
                return{
                    match_pass : false
                }
            })
        }else{
            this.setState(() => {
                return{
                    match_pass : true
                }
            })

            let conti  = ''
            if(document.getElementById('player_cb').checked == true){
                conti = "player"
            }
            if(document.getElementById('expert_cb').checked == true){
                conti = "expert"
            }
            let data = {
                f_name : document.getElementById('f_name').value,
                l_name : document.getElementById('l_name').value,
                email : document.getElementById('email').value,
                password : document.getElementById('password').value,
                phone_num : document.getElementById('phone_num').value,
                type : conti,
        }

        await this.props.CreateUser(data)

        this.setState(() => {
            return{
                inv_email : false,
                inv_phone : false
            }
        })

       await this.ValidUsers()
        
    }
    }

    constructor(props){
        super(props)

        this.state = {
            inv_email : false,
            inv_phone : false,
            match_pass : true
        }
    }

   
    render(){
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
                        <div className = "comp_name">
                            <div className = "f_name">
                                <label for = "f_name">First Name</label>
                                <input id = "f_name" name = "f_name" />
                            </div>
                            <div className = "l_name">
                                <label for = "l_name">Last Name</label>
                                <input id = "l_name" name = "l_name" />
                            </div>
                        </div>
                        <div className = "input_feilds_sp">
                            <div className = "icon"></div>
                            <div className = "input_bar">
                                <label for = "email">E-Mail</label>
                                <input id = "email" name = "email" type = "email" />
                                {this.state.inv_email && (
                                    <div className = "lower_alert">
                                        {this.props.error}
                                    </div>
                                    )}
                            </div>
                        </div>
                        <div className = "input_feilds_sp">
                            <div className = "icon"></div>
                            <div className = "input_bar">
                                <label for = "phone_num">Phone Number</label>
                                <input id = "phone_num" name = "phone_num" />
                                {this.state.inv_phone && (
                                    <div className = "lower_alert">
                                        {this.props.error}
                                    </div>
                                    )}
                            </div>
                        </div>
                        <div className = "input_feilds_sp">
                            <div className = "icon"></div>
                            <div className = "input_bar">
                                <label for = "password">Password</label>
                                <input id = "password" name = "password" type = "password" />
                            </div>
                        </div>
                        <div className = "input_feilds_sp">
                            <div className = "icon"></div>
                            <div className = "input_bar">
                                <label for = "password">Confirm Password</label>
                                <input id = "cpassword" name = "password" type = "password" />
                            </div>
                            {!this.state.match_pass && (
                                <div className = "lower_alert">
                                    password does not match
                                </div>
                                )}
                            
                        </div>
                        <div className = "continue_cbox">
                            <div className = "cont_text">Continue As</div>
                            <div className = "checkboxes">
                                <label for = "player">Player</label>
                                <input type = "radio" name = "player" id = "player_cb" />

                                <label for = "player">Expert</label>
                                <input type = "radio" name = "player" id = "expert_cb" />
                            </div>
                        </div>
                        <div className = "submit_btn_signup">
                            <button onClick = {this.Signup}>Sign Up</button>
                        </div>
                      
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        error : state.signup.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        CreateUser : bindActionCreators(CreateUser , dispatch)
      };
}


export default connect(mapStateToProps , mapDispatchToProps)(Signup)