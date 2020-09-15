import {FETCH_SIGNUP_BEGIN
    ,FETCH_SIGNUP_FAILS } from '../types'

    const initialStateSignup = {
        loading : false,
        posted : false,
        error : ''
    }
    
 const SignupReducers = (state = initialStateSignup , action) => {
        switch (action.type){
            case FETCH_SIGNUP_BEGIN : 
            return{
                ...state,
                loading : true
            }
            case FETCH_SIGNUP_FAILS : 
            return{
                loading : false,
                posted : false,
                error : action.payload
            }
            default :
            return state
        }
    }

 

    export default SignupReducers 