import React, { useState } from 'react';

function Teams(){
    const [arr , setArr] = useState([5,5,5,5,25,1,45,15])
    return( 
        <div className = "teams_page">
            <div className = "create_team_btn">
                <button>
                    + Create Team 
                </button>
            </div>
             <div className = "team_list">
                {arr.map(() => {
                    return(
                        <div className = "team_tab">
                            <div className = "team_img">
                            
                            </div>
                            <div className = "team_name">
                                Deccan Chargers
                            </div>
                        </div>
                    )
                })}
                
             </div>
        </div>
    )
}    

export default Teams