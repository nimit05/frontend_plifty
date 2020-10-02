import {CHATS_BEGIN , CHATS_FAILS , CHATS_SUCCESS , CHATS_ADD_OUT } from '../types'
    
    const initialState = {
        loading : false,
        error : '',
        chats : [],
        roomId : null
    }
    
    const ChatReducers = (state = initialState , action) => {
        switch (action.type){
            case CHATS_BEGIN : 
            return{
                ...state,
                loading : true,
            }
            case CHATS_SUCCESS : 
            return{
                ...state,
                loading : false,
                error : '',
                chats : action.payload
                }
            case CHATS_FAILS : 
            return{
                ...state , 
                loading : false,
                error : action.payload
            }
            case CHATS_ADD_OUT : 
            return{
                ...state,
                chats : [...state.chats , action.payload]
            }
            default :
            return state
        }
    }
    
    export default ChatReducers