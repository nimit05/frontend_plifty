import React , {useState , useEffect} from 'react';
import ProfileCard from '../containers/profileCard';
import Feeds from '../containers/feeds';
import Messages from '../containers/messages';
import RecentUpdates from '../containers/recent_updates';
import ChatTabs from '../containers/chat_tabs'

function Home(){
  
  const arr = [1,1,1,1,11,1,11,1]
  useEffect( () => {

    fetch('/api/login/session')
    .then((res) => res.json())
    .then((data) => {
      if(!data.token){
        localStorage.clear()
      }
    } )
  } ,)


    return(
      <div className = "home">

          <div className = "lef_home_pro_up">
            <ProfileCard />
            <RecentUpdates />
          </div>
          <div className = "home_feeds">
          {arr.map(e => {
            return(
              <Feeds />
            )
          })}
          </div>
          <Messages />
      </div>
    )
  }


export default Home;

