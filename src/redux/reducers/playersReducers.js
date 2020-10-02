import {PLAYERS_BEGIN , PLAYERS_FAILS , PLAYERS_SUCCESS } from '../types'
    
    const initialState = {
        loading : false,
        error : '',
        players : []
    }
    
    const PlayersReducers = (state = initialState , action) => {
        switch (action.type){
            case PLAYERS_BEGIN : 
            return{
                ...state,
                loading : true,
            }
            case PLAYERS_SUCCESS : 
            return{
                ...state,
                loading : false,
                error : '',
                players : action.payload
                }
            case PLAYERS_FAILS : 
            return{
                ...state , 
                loading : false,
                error : action.payload
            }
            default :
            return state
        }
    }
    
    export default PlayersReducers