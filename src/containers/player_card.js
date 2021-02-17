import React , {useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux'
import {GetPlayers , AddMsgUser} from '../redux'

const PlayerCard = () =>{

    const {error , players} = useSelector(state => ({
        error : state.players.error ,
        players : state.players.players
    }))
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(GetPlayers())
    } , [])

    // const CreateNewRoom = () => {
    //     let data = {
    //         userId : this.props.user.Id,
    //         playerId : this.props.playerId
    //     }
    //     fetch(`/api/chat/room?id1=${this.props.player.Id}&id2=${this.props.user.Id}` , {
    //         method : 'post',
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify(data)
    //     }).then((res) => res.json)
    // }

        return(
            players.map((player) => {
                return(
                    <div className = "player_card">
                    <div className = "player_pic"></div>
                    <div className = "name">
                        {player.FirstName} {' '} {player.LastName}
                    </div>
                    <div className = "msg_btn" onClick = {() => {
                        dispatch(AddMsgUser(player.Id))
                    }} >
                        Message
                    </div>
                </div>
                )
            })
           
        )
    }

export default PlayerCard