import {MESSAGING_USERS } from '../types'
    
    const initialState = {
        UsersId : []
    }
    
    const MsgUserIdReducers = (state = initialState , action) => {
        switch (action.type){
            case MESSAGING_USERS : 
            return{
                UsersId : [...state.UsersId , action.payload]
            }
           
            default :
            return state
        }
    }
    
    export default MsgUserIdReducers