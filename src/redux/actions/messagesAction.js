import {
        MESSAGING_USERS
        } from '../types'

export const AddMsgUser = (id) => {
    return{
        type : MESSAGING_USERS,
        payload : id
    }
}

