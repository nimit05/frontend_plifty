import React , {useState} from 'react';
import propic from '../images/propic.svg'

function RecentUpdates(props){
   const arr = [1,1,1]
        return(
            <div className = "recent_updates">
                {arr.map(e => {
                    return(
                    <div className = "update_text">
                        <div className = "text">
                        <div className = "img">
                            <img src = {propic} />
                        </div>
                        <div>
                            Lorem Ipsum has challanged you play
                            one on one match with him
                        </div>
                        </div>
                        <div className = "time">2 minutes ago</div>
                    </div>
                    )
                })}
                <div className = "see_all_upd">
                    See all
                </div>
            </div>
        )
    
}

export default RecentUpdates;