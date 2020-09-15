import React from 'react';
import pwithfreinds from '../images/pwithfreinds.jpg';
import tournament from '../images/tournament.jpg';
import teams from '../images/teams.jpg';
import exercise from '../images/exercise.jpg'
import next from '../images/next.svg';
import back from '../images/back.svg';

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
      images : [
        {id : '0' , img : pwithfreinds},
        {id : '1' , img : tournament },
        {id : '2' , img : teams },
        {id : '3' , img : exercise}
    ]
    }
  }

  render(){
    return(
      <div className = "home">
            <div className = "home_img_card">
                <img src = {this.state.images[this.state.i].img} />
                <div className = "next_img_button" onClick = {this.handleNext}>
                  <img src = {next} />
                </div>
                <div className = "back_img_button" onClick = {this.handlePrev}>
                  <img src = {back} />
                </div>
            </div>
      
      </div>
    )
  }
}

export default Home;

