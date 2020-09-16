import {FETCH_SIGNUP_BEGIN
    ,FETCH_SIGNUP_FAILS , FETCH_SIGNUP_SUCCESS 
    ,FETCH_LOGIN_BEGIN , FETCH_LOGIN_FAILS , FETCH_LOGIN_SUCCESS} from '../types'
    
    export const signupBegin = () => {
        return{
            type : FETCH_SIGNUP_BEGIN
        }
    }
    
    export const signupSuccess = () => {
        return{
            type : FETCH_SIGNUP_SUCCESS,
        }
    }
    
    export const signupFail = (error) => {
        return{
            type : FETCH_SIGNUP_FAILS,
            payload : error
        }
    }
    
    export const CreateUser = (data) => {
        return dispatch => {
            dispatch(signupBegin())
            return fetch('/api/register' , {
                method : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then((res) => res.json())
            .then((data) => {
                if(data.err){
                    dispatch(signupFail(data.err))
                }
                else if(data){
                    dispatch(signupSuccess());
                }
            }).catch((err) => dispatch(signupFail(err)));
        }
    }
    
    export const loginBegin = () => {
        return{
            type : FETCH_LOGIN_BEGIN
        }
    }
    
    export const loginSuccess = (name) => {
        return{
            type : FETCH_LOGIN_SUCCESS,
            payload : name
        }
    }
    
    export const loginFail = (error) => {
        return{
            type : FETCH_LOGIN_FAILS,
            payload : error
        }
    }
    
    
    export const login = (data) => {
        return dispatch => {
            dispatch(loginBegin())
            return fetch('/api/login' , {
                method : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                if(data.error){
                    dispatch(loginFail(data.error));
                }
                else if(data){
                    dispatch(loginSuccess(data.username));
                }
            }).catch((err) => dispatch(loginFail(err)));
        }
    }