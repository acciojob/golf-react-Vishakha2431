import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    buttonClickHandler() {
        return this.setState({
            renderBall:true
        })
   
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={{
    position: "relative",
    left: this.state.ballPosition.left
  }}></div>
		} else {
		    return <button  className="start" onClick={this.buttonClickHandler} >Start</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
        window.addEventListener("keydown",(e)=>{
            if(e.keyCode === 39){
                this.setState((state)=>{
                    const newPos=state.posi+5;
                    return{
                        posi:newPos,
                        ballPosition: { left: `${newPos}px` }
                    }
                })
            }
        })
      
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
