import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from '../containers/header'
import Home from '../pages/home';
import Login from '../pages/login'
import Signup from '../pages/signup';

class Apiroute extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      loginPage : true
    }

   
  }


  componentDidMount(){

    console.log(window.location.pathname)

    if(window.location.pathname === '/login' || window.location.pathname === '/signup'){
      this.setState(() => {
        return{
          loginPage : false
        }
      })
    }else{
      this.setState(() => {
        return{
          loginPage : true
        }
      })
    }
  }

  render(){
    return(
      <BrowserRouter>
      <div>
        {this.state.loginPage && <Header /> }
        
        <Switch>
          <Route path = "/login" component = {Login} exact ={true} />
          <Route path = "/signup" component = {Signup} exact ={true} />
          <Route path = "/" component = {Home} exact = {true} />
        </Switch>
      </div>
    </BrowserRouter>
      )
    
  }
}
  
  export default Apiroute;