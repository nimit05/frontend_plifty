import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from '../containers/header'
import Home from '../pages/home';
import Login from '../pages/login'
import Signup from '../pages/signup';
import Messages from '../pages/messages';
import Players from '../pages/player';
import Tournament from '../pages/tournament'
import Hosted_Tourna from '../containers/hosted_tourna';
import Active_Tourna from '../containers/active_tourna';
import Past_Tourna from '../containers/past_tourna';
import Matches_Tourna from '../containers/matches_tourna';
import Teams from '../pages/teams';

const Apiroute = () =>{
  
    return(
      <BrowserRouter>
      <div>
        {window.location.pathname != '/login' && window.location.pathname != '/signup' && <Header /> }
        <Switch>
          <Route path = "/login" component = {Login} exact ={true} />
          <Route path = "/signup" component = {Signup} exact ={true} />
          <Route path = "/messages" component = {Messages} exact ={true} />
          <Route path = "/players" component = {Players} exact ={true} />
          <Route path = "/" component = {Home} exact = {true} />
          <Route path = "/teams" component = {Teams} exact = {true} />
          <Route path = "/tournaments" component = {() => <Tournament Tourn_Cat = {Active_Tourna} />} exact = {true} />
          <Route path = "/tournaments/hosted" component = {() => <Tournament Tourn_Cat = {Hosted_Tourna} />} exact = {true} />
          <Route path = "/tournaments/past" component = {() => <Tournament Tourn_Cat = {Past_Tourna} />} exact = {true} />
          <Route path = "/tournaments/matches" component = {() => <Tournament Tourn_Cat = {Matches_Tourna} />} exact = {true} />
        </Switch>
      </div>
    </BrowserRouter>
      )
    
  }
  


export default Apiroute;