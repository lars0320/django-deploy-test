//카운터 게임
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import API from 'apisauce';

const apiCall = API.create({
  headers: {
    "csrfmiddlewaretoken": csrfToken,
    'X-CSRF-Token': csrfToken,
    'X-CSRFToken': csrfToken,
    dataType: "html",
  }
})

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      increaseNumber : 0,  
      resultNumber: "",  
      interval : null,  
      run : false,
      records : this.props.records,
    }
    this.start = this.start.bind(this);
    this.run = this.run.bind(this);
    this.counterIncrease = this.counterIncrease.bind(this);
    this.reset = this.reset.bind(this);
    this.timeOver = this.timeOver.bind(this);
    this.stop = this.stop.bind(this);
    this.win = this.win.bind(this);
    this.lose = this.lose.bind(this);
    this.end = this.end.bind(this);
    this.resultAlert = this.resultAlert.bind(this);
    this.enterName = this.enterName.bind(this);
  }

  start() {
    this.reset() 
    this.run()
  }

  run() {
    this.setState({
      run: true,
      interval : setInterval(() => {
        this.counterIncrease()
        if (this.state.increaseNumber === 150) {
          this.stop()
        }
      }, 10)
    })
  }
  
  counterIncrease() {
    this.setState({ 
      increaseNumber: this.state.increaseNumber + 1
    })
  }

  reset() { 
    clearInterval(this.state.interval)
    this.setState({
      increaseNumber: 0,
      resultNumber: 0,
      run: false
    })
  }

  stop() {
    this.resultAlert()
    this.end()
  }

  end() {
    clearInterval(this.state.interval)
    this.setState({
      resultNumber: this.state.increaseNumber,
      run: false
    })
  }

  resultAlert() {
    if ( this.state.increaseNumber >= 98 && 100 >= this.state.increaseNumber ) {
      return this.win()
    }
    if ( this.state.increaseNumber === 150 ) {
      return this.timeOver()
    }
    return this.lose()
  }

  enterName() {
    const userName = prompt('당신의 이름은 무엇입니까?')
    if ( !userName == "" ) {
      apiCall.post("/index/counter/score/", userName)
      .then( response => {
        this.setState({
          records: response.data.records
        });
      })
    } else {
      alert("이름을 입력해주세요")
      this.enterName()
    }
  }

  timeOver() {
    alert("너무늦었어요")
  }

  win() {
    alert("대단합니다")
    this.enterName()
  }

  lose() {
    alert("아쉽네요")
  }

  render() {
    const userName = []
    return(
      <div>
        <div style={{textAlign: "center"}}>
          <h1>The Count Game</h1>
          {this.state.run === false ? (
            <button onClick={this.start}>
              시작
            </button>
          ) : (
            <button onClick={this.stop}>
              {this.state.increaseNumber}
            </button>
          )}
          <input type="text" size="10" 
            value={this.state.resultNumber}>
          </input>
          <button onClick={this.reset}>Reset Game</button>
          <br/><br/><br/>
          <p>버튼을 누르면 숫자가 증가합니다. <br/>
          다시 버튼을 눌렀을때 숫자가 98에서 100사이면 승리
          <br/><br/><br/><br/><br/><br/><br/><br/>
          </p>
          <h1> 명예의 전당 </h1>
            
          {this.state.records.map((record) => {
            const name = record.name
            if ( userName.find(userName => userName.name === name) ) {
              const plusScore = userName.find(userName => userName.name === name)
              plusScore.score += 1
            } else {
              userName.push(
                {name: name, score: 1}
              )
            }
          })}
        </div>
        <div style={{marginLeft:640}}>
          {userName.map((record) => {
            return(
              <li>
                {record.name} &nbsp;&nbsp;&nbsp;&nbsp; {record.score}점
              </li>
            )
          })}
        </div>
      </div>
    )
  }
}

  
ReactDOM.render(
  <Counter
  records = {records}
  csrfToken = {csrfToken}
  />,
  document.getElementById('counter')); 

  