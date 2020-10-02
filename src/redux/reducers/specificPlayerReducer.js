import {SPEC_PLAYERS_FAILS , SPEC_PLAYERS_SUCCESS , SPEC_PLAYERS_BEGIN } from '../types'
    
    const initialState = {
        loading : false,
        error : '',
        player : {}
    }
    
    const SPecPlayersReducers = (state = initialState , action) => {
        switch (action.type){
            case SPEC_PLAYERS_BEGIN : 
            return{
                ...state,
                loading : true,
            }
            case SPEC_PLAYERS_SUCCESS : 
            return{
                ...state,
                loading : false,
                player : action.payload
                }
            case SPEC_PLAYERS_FAILS : 
            return{
                ...state , 
                loading : false,
                error : action.payload
            }
            default :
            return state
        }
    }
    
    export default SPecPlayersReducers