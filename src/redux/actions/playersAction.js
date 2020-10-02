import {
        PLAYERS_BEGIN,PLAYERS_FAILS , PLAYERS_SUCCESS,
        SPEC_PLAYERS_BEGIN , SPEC_PLAYERS_FAILS , SPEC_PLAYERS_SUCCESS
      } 
    from '../types'
    export const playersBegin = () => {
        return{
            type : PLAYERS_BEGIN
        }
    }
    
    export const playersSuccess = (players) => {
        return{
            type : PLAYERS_SUCCESS,
            payload : players
        }
    }
    
    export const playersFail = (error) => {
        return{
            type : PLAYERS_FAILS,
            payload : error
        }
    }
    
    export const GetPlayers = () => {
        return dispatch => {
            dispatch(playersBegin())
            return fetch('/api/users/all')
            .then((res) => res.json())
            .then((data) => {
                if(data.error){
                    dispatch(playersFail(data.error))
                }
                else if(data){
                    dispatch(playersSuccess(data));
                }
            }).catch((err) => dispatch(playersFail(err)));
        }
    }   

    export const SpecplayersBegin = () => {
        return{
            type : SPEC_PLAYERS_BEGIN
        }
    }
    
    export const SpecplayersSuccess = (player) => {
        return{
            type : SPEC_PLAYERS_SUCCESS,
            payload : player
        }
    }
    
    export const SpecplayersFail = (error) => {
        return{
            type : SPEC_PLAYERS_FAILS,
            payload : error
        }
    }

    export const GetSpecific = (id) => {
        return dispatch => {
            dispatch(SpecplayersBegin())
            return fetch(`/api/users/specific?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
                if(data.error){
                    dispatch(SpecplayersFail(data.error))
                }
                else if(data){
                    dispatch(SpecplayersSuccess(data));
                }
            }).catch((err) => dispatch(playersFail(err)));
        }
    }