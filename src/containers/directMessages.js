import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {GetSpecific ,GetChats , AddChatOUt} from '../redux'
import io from 'socket.io-client';
import moment from 'moment'

class DMS extends React.Component{

    state = {
        chat_room : true,
        roomId : null
    }

     componentDidMount = async() =>{
        this.props.GetSpecific(this.props.userId)

        let server = "http://localhost:6878"

        this.socket = io(server);

        await fetch(`/api/chat/roomExist?id1=${this.props.player.Id}&id2=${this.props.user.Id}`)
        .then((res) => res.json())
        .then((data) => {
            if(data){
                this.setState({roomId : data.id})
                this.props.GetChats(this.state.roomId);
            }else{
                this.CreateNewRoom()
            }
        })

        this.socket.on('Output Chat Message' , msg => {
           this.props.AddChatOUt(msg)
        })
    }

    CreateNewRoom = () => {
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

     Handledm = () => {

        setTimeout(() => {
            this.setState((prevState) => {
                return{
                    chat_room : !prevState.chat_room
                }
            })
        } , 150)
        
    }

    handleChange = (e) => {
        this.setState({
            chatmsg : e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();

        let userId = this.props.user.Id
        let chatmsg = this.state.chatmsg

        this.socket.emit('Input Chat Message' , {
            userId,
            chatmsg
        })

        this.setState({chatmsg : ""})

    }

    render(){
        return(
            <div className = "dm_cont_upd">
                <div className = "direct_messages" onClick = {this.Handledm}>
                <div className = "chat_user_name">
                    {this.props.player.FirstName} {' '} {this.props.player.LastName}
                </div>
                
                </div>
                {this.state.chat_room && (
                    <div className = "msg_room">
                        <div className = "msg_hall_div">
                            {this.props.chats.map((chat) => {
                            return(
                                <div className = "chat_f_in_box">
                                    {this.props.user.Id == chat.UserId ? (
                                        <div className = "message_by_me">
                                            {chat.Message}
                                        </div>
                                    ) : (
                                    <div className = "message_by_another">
                                        {chat.Message}
                                    </div>
                                    )}
                                </div>
                            )
                            })}
                        </div>
                        <div className = "type_message">
                            <textarea 
                            type = "text" 
                            placeholder = "Type a message"
                            value = {this.state.chatmsg}
                            onChange = {this.handleChange}
                             />
                            <button onClick = {this.submitHandler}>send</button>
                        </div>
                    </div>
                )}    
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return{
        player : state.specificPlayer.player,
        user : state.login.user,
        chats : state.chats.chats
    }
}

const mapDispatchToProps = dispatch => {
    return {
        GetSpecific : bindActionCreators(GetSpecific , dispatch),
        GetChats : bindActionCreators(GetChats , dispatch),
        AddChatOUt : bindActionCreators(AddChatOUt , dispatch)
      };
}


export default connect(mapStateToProps , mapDispatchToProps)(DMS)