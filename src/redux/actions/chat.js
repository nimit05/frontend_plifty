import {
    CHATS_BEGIN
    ,CHATS_FAILS , CHATS_SUCCESS , CHATS_ADD_OUT,
    CHATROOM_SUCCESS , CHATROOM_BEGIN , CHATROOM_FAILS
 } from '../types'
    
    export const chatBegin = () => {
        return{
            type : CHATS_BEGIN
        }
    }
    
    export const chatSuccess = (chats) => {
        return{
            type : CHATS_SUCCESS,
            payload : chats
        }
    }
    
    export const chatFail = (error) => {
        return{
            type : CHATS_FAILS,
            payload : error
        }
    }

    export const Addchat = (chat) => {
        return{
            type : CHATS_ADD_OUT,
            payload : chat
        }
    }
    
    export const GetChats = (id) => {
        return dispatch => {
            dispatch(chatBegin())
            return fetch(`/api/chat?roomId=${id}`)
            .then((res) => res.json())
            .then((data) => {
                if(data.error){
                    dispatch(chatFail(data.error))
                }
                else if(data){
                    dispatch(chatSuccess(data));
                }
            }).catch((err) => dispatch(chatFail(err)));
        }
    }

    export const AddChatOUt = (chat) => {
        return dispatch => {
            dispatch(Addchat(chat))
        }
    }

    export const chatRoomBegin = () => {
        return{
            type : CHATS_BEGIN
        }
    }
    
    export const chatRoomSuccess = (id) => {
        return{
            type : CHATS_SUCCESS,
            payload : id
        }
    }
    
    export const chatRoomFail = (error) => {
        return{
            type : CHATS_FAILS,
            payload : error
        }
    }

    export const GetRoomId = (userId , playerId) => {
        return dispatch => {
            dispatch(chatRoomBegin())
            return  fetch(`/api/chat/roomExist?id1=${playerId}&id2=${userId}`)
            .then((res) => res.json())
            .then((data) => {
                if(data.error){
                    dispatch(chatRoomFail(data.error))
                }else if(data){
                    dispatch(chatRoomSuccess(data))
                }
            }).catch((err) => dispatch(chatRoomFail(err)));
        }
    }