import React from 'react';
import {connect} from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from '../containers/header'
import Home from '../pages/home';
import Login from '../pages/login'
import Signup from '../pages/signup';
import Messages from '../pages/messages';
import Players from '../pages/player';
import DMS from '../containers/directMessages'

class Apiroute extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      loginPage : true
    }

   
  }


  componentDidMount(){

    console.log(window.location.pathname)
    console.log(this.props.userIds)

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
        {this.state.loginPage && 
          (
          <div>
            <Header /> 
            <div className = "bottom_msg_row">
              {this.props.userIds.map((id) =>{
                return(
                    <DMS userId = {id}/>
                )
              } )}
            </div> 
          </div>
          )}
        
        <Switch>
          <Route path = "/login" component = {Login} exact ={true} />
          <Route path = "/signup" component = {Signup} exact ={true} />
          <Route path = "/messages" component = {Messages} exact ={true} />
          <Route path = "/players" component = {Players} exact ={true} />
          <Route path = "/" component = {Home} exact = {true} />
        </Switch>
      </div>
    </BrowserRouter>
      )
    
  }
}
  
const mapStateToProps = state => {
  return{
    userIds : state.msgUserIds.UsersId
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//       login : bindActionCreators(login , dispatch)
//     };
// }


export default connect(mapStateToProps , null)(Apiroute)