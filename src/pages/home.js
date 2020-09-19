import React from 'react';
import ProfileCard from '../containers/profileCard';
import Feeds from '../containers/feeds';
import Messages from '../containers/messages';
import RecentUpdates from '../containers/recent_updates';

class Home extends React.Component{

  handleNext = () => {

    if(this.state.i < this.state.images.length - 1){

    this.setState((prevState) => {
      return{
        i : prevState.i + 1
      }
    })
  }
  }

  handlePrev = () => {

    if(this.state.i > 0){

    this.setState((prevState) => {
      return{
        i : prevState.i - 1
      }
    })
  }
  }

  constructor(props){
    super(props)

    this.state = {
      i : 0,
      arr : [1,1,1,1,1,1,1,1,1,1,1]
    }

    fetch('/api/login/session')
    .then((res) => res.json())
    .then((data) => {
      if(!data.token){
        localStorage.clear()
      }
    })

  }

  render(){
    return(
      <div className = "home">
          <div className = "lef_home_pro_up">
            <ProfileCard />
            <RecentUpdates />
          </div>
          <div className = "home_feeds">
          {this.state.arr.map(e => {
            return(
              <Feeds />
            )
          })}
          </div>
          <Messages />
      </div>
    )
  }
}

export default Home;

