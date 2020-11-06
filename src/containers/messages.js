import React , {useState} from 'react';
import propic from '../images/propic.svg'

function Messages(){
    const arr = [1,1,1,1,1,1,1,1]
        return(
            <div className = "messages">
                <div className = "message_heading">
                    Messages
                </div>
                <div className = "messages_lis">
                    {arr.map(e => {
                        return(
                            <div className = "message_row">
                                <div className = "msg_img">
                                    <img src = {propic} />
                                </div>
                                <div className = "msg_div">
                                    <div className = "msg_sender">
                                        Virat Kohli
                                    </div>
                                    <div className = "msg_body">
                                        aja bhai kl khelenge match
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }

export default Messages