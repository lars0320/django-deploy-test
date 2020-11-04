//카운터 게임
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import jQuery, { param } from "jquery";
window.$ = window.jQuery = jQuery

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number : 0,
      end: '',
      interval : null,
      switch : "off",
      speed1 : 300 ,
      speed2 : 100 ,
      speed3 : 10
    }
    this.start = this.start.bind(this);
    this.reStart = this.reStart.bind(this);
    this.stop = this.stop.bind(this);
  }
  start() {
    if (this.state.switch == "off") {
      this.setState({
        number: 0,
        end: 0
      })
      this.state.interval = setInterval(() => {
        this.setState({
          number: this.state.number + 1
        })
        if (this.state.number == 150) {
          clearInterval(this.state.interval)
          this.state.switch = "off"
          this.setState({
            end: this.state.number
          })
          alert("너무 늦었어요")
        } else {
          null;
        }
      }, this.state.speed3)
      this.state.switch = "on"
    } else {
      if ( this.state.switch == "on") {
        if ( this.state.number >= 98) {
          clearInterval(this.state.interval)
          this.state.switch = "off" 
          this.setState({
            end: this.state.number
          })
          if ( 100 >= this.state.number) {
            alert("대단합니다")
          } else {
            alert("아쉽네요")
          }
        } else {
          clearInterval(this.state.interval)
          this.state.switch = "off"
          this.setState({
            end: this.state.number
          })
          alert("아쉽네요")
        }
      } else {
        null;
      }
    }
  }

  reStart() {
    clearInterval(this.state.interval)
    this.setState({
      number: 0,
      end: 0
    })
    this.state.switch = "off"
    this.state.speed = 100
  }

  stop() {
    if (this.state.number == 150) {
      clearInterval(this.state.interval)
    } else {
      null;
    }
  }

  render() {
    return(
      <div>
        <div>
          <h1>The Count Game</h1>
          <button onClick={this.start}>{this.state.number}</button>
          <input type="text" size="10" value={this.state.end}></input>
          <button onClick={this.reStart}>Restart</button>
        </div>
        <br/><br/><br/>
        <p>왼쪽박스에 있는 숫자 0 을 클릭하면 1부터 150까지 카운터 <br/>
         됩니다. 이때 98에서 100까지 숫자만큼 왔을때 카운터 되는 <br/>
         숫자를 클릭해서 98~100사이에 들어오면 승리하는 게임입니다.</p>
      </div>
    );
  }
}


ReactDOM.render(
  <Counter />,
  document.getElementById('counter'));                                                                                                         