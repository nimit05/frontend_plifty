import React from 'react';
import profilePic from '../images/propic.svg';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {SignOut} from '../redux'

function ProfileCard(props){
        return(
            <div className = "profile_card">
                <div className = "player_img">
                    <img src = {profilePic} alt = " " />
                </div>
                <div className = "player_name">
                    Nimit Wadhwa
                </div>
                <div className = "profile_details_pcard">
                    <div className = "det_row">
                        <div className = "field">
                            Squad Size
                        </div>
                        <div className = "hmany">
                            451
                        </div>
                    </div>
                    <div className = "det_row">
                        <div className = "field">
                            Matches
                        </div>
                        <div className = "hmany">
                            50
                        </div>
                    </div>
                </div>
                <div className = "sign_out_pcard" onClick = {() => props.Signout()}>
                    Sign Out
                </div>
            </div>
        )
    }


const mapStateToProps = state => {
    return{
        error : state.signup.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Signout : bindActionCreators(SignOut , dispatch)
      };
}


export default connect(mapStateToProps , mapDispatchToProps)(ProfileCard)