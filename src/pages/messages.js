import React from 'react'
import io from 'socket.io-client';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import moment from 'moment'
import {GetChats , AddChatOUt} from '../redux'

class Messages extends React.Component{
    state = {
        chatmsg : ""
    }

    componentDidMount(){
        let server = "http://localhost:6878"

        this.socket = io(server);

        this.props.GetChats();

        this.socket.on('Output Chat Message' , msg => {
           this.props.AddChatOUt(msg)
        })
    }

    handleChange = (e) => {
        this.setState({
            chatmsg : e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();

        let userId = this.props.user.id
        let username = this.props.user.f_name
        let type = "image"
        let nowtime = moment()
        let chatmsg = this.state.chatmsg

        this.socket.emit('Input Chat Message' , {
            userId,
            username,
            type,
            nowtime,
            chatmsg
        })

        this.setState({chatmsg : ""})

    }
    render(){
        return(
            <div className = "messages_page">

                <input 
                type = "text" 
                placeholder = "Enter your message" 
                value = {this.state.chatmsg}
                onChange = {this.handleChange}
                />
                <button onClick = {this.submitHandler}>Send</button>

                <div className = "messages_from_eother">
                    {this.props.chats.map((chat) => {
                        return(
                            <div className = "chat_f_in_box">
                                {chat.Message}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        user : state.login.user,
        chats : state.chats.chats
    }
}

const mapDispatchToProps = dispatch => {
    return {
        GetChats : bindActionCreators(GetChats , dispatch),
        AddChatOUt : bindActionCreators(AddChatOUt , dispatch)
      };
}


export default connect(mapStateToProps , mapDispatchToProps)(Messages)