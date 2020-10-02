import {FETCH_SIGNUP_BEGIN
    ,FETCH_SIGNUP_FAILS , FETCH_LOGIN_SUCCESS } from '../types'

    const initialStateSignup = {
        loading : false,
        posted : false,
        error : " "
    }
    
 const SignupReducers = (state = initialStateSignup , action) => {
        switch (action.type){
            case FETCH_SIGNUP_BEGIN : 
            return{
                ...state,
                loading : true,
                error : ""
            }
            case FETCH_SIGNUP_FAILS : 
            return{
                loading : false,
                posted : false,
                error : action.payload
            }
            case FETCH_LOGIN_SUCCESS : 
            return{
                loading : false,
                error : " ",
                posted : true
            }
            default :
            return state
        }
    }

 

    export default SignupReducers 