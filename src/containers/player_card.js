import React , {useState , useEffect} from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {GetPlayers , AddMsgUser} from '../redux'

function PlayerCard(props){

    useEffect(() =>{
        props.GetPlayers()
    })

    const CreateNewRoom = () => {
        let data = {
            userId : this.props.user.Id,
            playerId : this.props.playerId
        }
        fetch(`/api/chat/room?id1=${this.props.player.Id}&id2=${this.props.user.Id}` , {
            method : 'post',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        }).then((res) => res.json)
    }

        return(
            props.players.map((player) => {
                return(
                    <div className = "player_card">
                    <div className = "player_pic"></div>
                    <div className = "name">
                        {player.FirstName} {' '} {player.LastName}
                    </div>
                    <div className = "msg_btn" onClick = {() => {
                        props.AddMsgUser(player.Id)
                    }} >
                        Message
                    </div>
                </div>
                )
            })
           
        )
    }


const mapStateToProps = state => {
    return{
        error : state.players.error ,
        players : state.players.players,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        GetPlayers : bindActionCreators(GetPlayers , dispatch),
        AddMsgUser : bindActionCreators(AddMsgUser , dispatch)
      };
}


export default connect(mapStateToProps , mapDispatchToProps)(PlayerCard)