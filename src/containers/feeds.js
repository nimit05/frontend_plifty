import React , {useState} from 'react';
import propic from '../images/propic.svg';
import versus from '../images/versus.svg'

function Feeds(){
        return(
            <div className = "feeds">
                <div className = "feed_inner_body">
                    <div className = "feed_by">
                        <div className = "player_img_feed">
                            <img src = {propic} />
                        </div>
                        <div className = "player_name_feed">
                            <div className = "name">John Smith</div>
                            <div className = "time">2 days</div>
                        </div>
                    </div>
                    <div className = "match_type_feed">
                        Cricket Match ( 2 Matches )
                    </div>
                    <div className = "match_opponents_pic">
                        <div className = "challenger">
                            <img src = {propic} />
                        </div>
                        <div className = "vs_logo">
                            <img src = {versus} />
                        </div>
                        <div className = "challenger">
                            <img src = {propic} />
                        </div>
                    </div>
                    <div className = "match_fixed_details">
                        <div className = "match_length">
                            <div className = "head">Overs :</div>
                            <div className = "val">5</div>
                        </div>
                        <div className = "match_veneu">
                            <div className = "head">Venue :</div>
                            <div className = "val">High Ground,Nilokheri</div>
                        </div>
                    </div>
                    <div className = "match_fixed_details">
                        <div className = "match_time">
                            <div className = "head">Time :</div>
                            <div className = "val">6:00 PM</div>
                        </div>
                        <div className = "match_date">
                            <div className = "head">Date :</div>
                            <div className = "val">5 Sept , 2020</div>
                        </div>
                    </div>
                    <div className = "player_polls">
                        <div className = "challenger_pole">
                            <div className = "img">
                                <img src = {propic} />
                            </div>
                            <div className = "pole_er">

                            </div>
                        </div>
                        <div className = "challenger_pole">
                            <div className = "img">
                                <img src = {propic} />
                            </div>
                            <div className = "pole_ee">

                            </div>
                        </div>
                        <div className = "total_votes">
                            Total - 541 Votes
                        </div>
                    </div>
                </div>
                <div className = "opponents_poles_option">
                    <div className = "player_name_er">John Smith</div>
                    <div className = "player_name">Tommy Shelby</div>
                </div>
            </div>
        )
    }


export default Feeds