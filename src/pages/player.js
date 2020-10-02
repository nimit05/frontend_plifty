import React from 'react';
import PlayerCard from '../containers/player_card'

class Players extends React.Component{
    render(){
        return(
            <div className = "player_page">
                <PlayerCard />
            </div>
        )
    }
}

export default Players