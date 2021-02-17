import React from 'react';
import profilePic from '../images/propic.svg';
import {useSelector , useDispatch} from 'react-redux'
import {SignOut} from '../redux'

const ProfileCard = () => {

    const {error} = useSelector(state => ({
        error : state.signup.error
    }))
    const dispatch = useDispatch()

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
                <div className = "sign_out_pcard" onClick = {() => dispatch(SignOut())}>
                    Sign Out
                </div>
            </div>
        )
    }



export default ProfileCard