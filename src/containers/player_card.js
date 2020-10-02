import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {GetPlayers , AddMsgUser} from '../redux'

class PlayerCard extends React.Component{

    componentDidMount(){
        this.props.GetPlayers()
    }

    render(){
        return(
            this.props.players.map((player) => {
                return(
                    <div className = "player_card">
                    <div className = "player_pic"></div>
                    <div className = "name">
                        {player.FirstName} {' '} {player.LastName}
                    </div>
                    <div className = "msg_btn" onClick = {() => {
                        this.props.AddMsgUser(player.Id)
                    }} >
                        Message
                    </div>
                </div>
                )
            })
           
        )
    }
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