import React , {useState , useEffect} from 'react'
import {NavLink} from 'react-router-dom'
const Tournament = (props) => {

    const Tourn_Cat = props.Tourn_Cat
    useEffect(() => {
     
    })
    return(
        <div className = "tourna_page">
            <div className = "tourna_op" id = "tourna_op">
                <NavLink 
                className = "tourna_op_name"
                activeClassName = "tourna_op_name--active"
                to = "/tournaments"
                exact
                >
                    Active Tournaments
                </NavLink>
                <NavLink 
                className = "tourna_op_name"
                activeClassName = "tourna_op_name--active"
                to = "/tournaments/past"
                >
                    Past Tournaments
                </NavLink>
                <NavLink 
                className = "tourna_op_name"
                activeClassName = "tourna_op_name--active"
                to = "/tournaments/hosted"
                >
                    Hosted Tournaments
                </NavLink>
                <NavLink 
                className = "tourna_op_name"
                activeClassName = "tourna_op_name--active"
                to = "/tournaments/matches"
                >
                    Matches
                </NavLink>
            </div>
            <Tourn_Cat />
        </div>
    )
}

export default Tournament;