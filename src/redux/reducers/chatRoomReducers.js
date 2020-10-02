import {CHATROOM_BEGIN , CHATROOM_SUCCESS , CHATROOM_FAILS  } from '../types'
    
    const initialState = {
        loading : false,
        error : '',
        roomId : null
    }
    
    const ChatRoomReducers = (state = initialState , action) => {
        switch (action.type){
            case CHATROOM_BEGIN : 
            return{
                ...state,
                loading : true,
            }
            case CHATROOM_SUCCESS : 
            return{
                ...state,
                loading : false,
                error : '',
                roomId : action.payload
                }
            case CHATROOM_FAILS : 
            return{
                ...state , 
                loading : false,
                error : action.payload
            }
            default :
            return state
        }
    }
    
    export default ChatRoomReducers