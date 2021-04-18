import React, { useEffect , useState } from 'react';
import {NavLink} from 'react-router-dom'


const Teams = () => {
    const [teams , setTeams] = useState([])

    useEffect(() => {
        fetch('/api/team')
        .then((res) => res.json())
        .then((data) => {
                setTeams(data)
        })
    } , [])
    return( 
        <div className = "teams_page">
            <NavLink 
            className = "create_team_btn"
            to = "/teams/create_team"
            >
                <button>
                    + Create Team 
                </button>
            </NavLink>
            <NavLink 
            className = "create_team_btn"
            to = "/teams/join_team"
            >
                <button>
                    + Join Team 
                </button>
            </NavLink>
            <div className = "teams_cont_det">
                <div className = "sr_id">S No.</div>
                <div className = "team_name">Name</div>
                <div className = "team_field">Field</div>
                <div className = "team_size">Size</div>
                <div className = "team_link">Team Code</div>
            </div>
            {teams.map((team) => {
                return (
                    <div className = "teams_cont_det_map">
                        <div className = "sr_id">{team.Id}.</div>
                        <div className = "team_name">{team.TeamName}</div>
                        <div className = "team_field">{team.TeamField}</div>
                        <div className = "team_size">{team.TeamSize}</div>
                        <div className = "team_link">{team.TeamCode}</div>
                    </div>
                )
            })}
        </div>
    )
}    

export default Teams