//숫자맞추기
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class HighAndLow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      answer : 0,
      answerCounter : 0,
      text: null,
      maxnum : 0
    }
    this.veryEasy = this.veryEasy.bind(this);
    this.normal = this.normal.bind(this);
    this.hard = this.hard.bind(this);
    this.selection = this.selection.bind(this);
    this.initGame = this.initGame.bind(this);
    this.increaseCount = this.increaseCount.bind(this);
  }

  veryEasy() {
    this.state.maxnum = 10
    this.initGame(Math.floor((Math.random() * (this.state.maxnum + 1))));
  }

  normal() {
    this.state.maxnum = 100
    this.initGame(Math.floor((Math.random() * (this.state.maxnum + 1))));
  }

  hard() {
    this.state.maxnum = 1000
    this.initGame(Math.floor((Math.random() * (this.state.maxnum + 1))));
  }

  initGame(number) {
    this.state.answer = number
    console.log(number)
    this.refs.text.value = "0부터 "+ this.state.maxnum +"까지 숫자를 입력해 주세요."
    this.refs.answertext.value = null
    this.setState({
      answerCounter : 0
    })
  }

  selection() {
    if (this.refs.answertext.value == Number((this.refs.answertext.value))) {
      if (this.refs.answertext.value > this.state.answer) {
        this.refs.text.value = "그 숫자보단 작습니다."
        this.increaseCount()
      } else {
        if (this.state.answer > this.refs.answertext.value) {
          this.refs.text.value = "그 숫자보단 큽니다."
          this.increaseCount()
        } else {
          this.refs.text.value = "정답입니다."
          this.increaseCount()          
        }
      }
    } else {
      this.refs.text.value = "숫자를 입력해주세요."
    }
  }

  increaseCount() {
    this.setState({
      answerCounter: this.state.answerCounter += 1
    })
  }

  render() {
    return(
      <div>
      <h1> The Higher or Lower Game </h1>
      <button onClick={this.veryEasy}>쉬움</button>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <text ref="CounterText">찍은횟수 : {this.state.answerCounter}</text><br/>
      <button onClick={this.normal}>보통</button><br/>
      <button onClick={this.hard}>어려움</button><br/>
      <textarea rows="1" cols="40" ref="text">난이도를 선택해주세요.</textarea><br></br>
      <textarea cols="40" rows="1" ref="answertext"></textarea>
      <button onClick={this.selection}>선택</button>
      </div>
    );
  }
}


ReactDOM.render(
  <HighAndLow />,
  document.getElementById('highandlow'));