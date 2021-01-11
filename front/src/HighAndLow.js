//숫자맞추기
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import API from 'apisauce';
import { max, first, last } from 'lodash';

const apiCall = API.create({
  headers: {
    "csrfmiddlewaretoken": csrfToken,
    'X-CSRF-Token': csrfToken,
    'X-CSRFToken': csrfToken,
    dataType: "html",
  }
})

class HighAndLow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      answer : 0, 
      tryCounter : 0, 
      textBox: null, 
      gameProgress: false,
      gameLevel: '',
      records: this.props.records
    }
    this.levelSelect = this.levelSelect.bind(this);
    this.initGame = this.initGame.bind(this);
    this.submit = this.submit.bind(this);
    this.answerCheck = this.answerCheck.bind(this);
    this.highNumber = this.highNumber.bind(this);
    this.lowNumber = this.lowNumber.bind(this);
    this.answer = this.answer.bind(this);
    this.increaseCount = this.increaseCount.bind(this);
    this.textBoxChange = this.textBoxChange.bind(this);
    this.record = this.record.bind(this);
  }

  levelSelect(maxnum) {
    const answer = Math.floor((Math.random() * (maxnum + 1)))
    this.initGame(answer, maxnum);

    if ( maxnum === 10   ) 
      return this.setState({ gameLevel : "easy"})
    if ( maxnum === 100  )
      return this.setState({ gameLevel : "normal"})
    if ( maxnum === 1000 )
      return this.setState({ gameLevel : "hard"})
  }

  initGame(answer, maxnum) {
    this.setState({
      answer: answer,
      tryCounter : 0,
      textBox: null,
      gameProgress: true
    })
    this.refs.orderBox.value = "0부터 "+ maxnum +"까지 숫자를 입력해 주세요." 
  }

  submit() {
    if (this.state.gameProgress) {
      if (!isNaN(parseInt(this.state.textBox))) {
        this.answerCheck()
      } else {
        this.refs.orderBox.value = "숫자를 입력해주세요."
      }
    }
  }

  answerCheck() {
    this.increaseCount()
    if (this.state.textBox > this.state.answer)
      return this.lowNumber()
    if (this.state.answer > this.state.textBox)
      return this.highNumber()
    this.answer()
  }

  lowNumber() { 
    this.refs.orderBox.value = "그 숫자보단 작습니다."
  }

  highNumber() {
    this.refs.orderBox.value = "그 숫자보단 큽니다."
  }

  answer() {
    this.refs.orderBox.value = "정답입니다."
    this.setState({
      gameProgress : false
    })
    this.record()
  }

  record() {
    const userName = prompt('당신의 이름은 무엇입니까?')
    if( !userName == "" ) {
      apiCall.post("/index/highandlow/score/",  
      {
        'userName': userName, 
        'tryCount': this.state.tryCounter, 
        'gameLevel': this.state.gameLevel
      })
      .then( response => {
        this.setState({
          records: response.data.records
        });
      })
    } else {
      alert( '이름을 입력해주세여' )
      this.record()
    }
  }

  increaseCount() {
    this.setState({
      tryCounter: this.state.tryCounter += 1
    })
  }

  textBoxChange(box) {
    this.setState({
      textBox: box.target.value
    })
  }

  render() { 
    const recordBundle = []
    const float = {
      float:"left"
    }
    return(
      <div>
        
        <div style={{marginLeft:525}}>
        <h1> The Higher or Lower Game </h1>
        <button onClick={() => {this.levelSelect(10)}}>쉬움</button>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <text ref="CounterText">찍은횟수 : {this.state.tryCounter}</text><br/>
        <button onClick={() => {this.levelSelect(100)}}>보통</button><br/>
        <button onClick={() => {this.levelSelect(1000)}}>어려움</button><br/>
        <textarea rows="1" cols="40" ref="orderBox">난이도를 선택해주세요.</textarea><br></br>
        <textarea cols="40" rows="1" onChange={this.textBoxChange}></textarea>
        <button onClick={this.submit}>선택</button>
        <br/>
        </div>
        
        <h1 style={{textAlign: "center"}}>전적표</h1>
        <div style={{marginLeft:370}}>
        {this.state.records.map((record) => {
          
          if ( recordBundle.find( 
            bundle => bundle.name === record.name && 
            bundle.gameLevel === record.level && 
            parseInt(bundle.tryCount) <= parseInt(record.tryCount) 
          )) //전적보다 못한경우 기록x
            return 
          if ( recordBundle.find( 
            bundle => bundle.name === record.name && 
            bundle.gameLevel === record.level && 
            parseInt(bundle.tryCount) >= parseInt(record.tryCount) 
          )){ //이전보다 잘하면 이전기록 삭제
            const deleteScore = recordBundle.find( 
              bundle => bundle.name === record.name && 
              bundle.gameLevel === record.level && 
              parseInt(bundle.tryCount) >= parseInt(record.tryCount)
            )
            const deleteIndex = recordBundle.indexOf(deleteScore)
            recordBundle.splice(deleteIndex, 1)
          }
          recordBundle.push({
            name: record.name, tryCount: record.tryCount, gameLevel: record.level
          })
          })}

        <ul style={float}> 
        {recordBundle.map((record) => {
          if ( record.gameLevel === 'easy' ) 
          return(
            <li>
              쉬움 - {record.name} - 찍은횟수 : {record.tryCount}
            </li>
          )
        })}
        </ul>

        <ul style={float}>
        {recordBundle.map((record) => {
          if ( record.gameLevel === 'normal' )
          return(
            <li>
              보통 - {record.name} - 찍은횟수 : {record.tryCount}
            </li>
          )
        })}
        </ul>

        <ul style={float}>
        {recordBundle.map((record) => {
          if ( record.gameLevel === 'hard')
          return(
            <li>
              어려움 - {record.name} - 찍은횟수 : {record.tryCount}
            </li>
          )
        })}
        </ul>
      </div>
      </div>
    );
  }
}


ReactDOM.render(
  <HighAndLow
  records = {records}
  csrfToken = {csrfToken} />,
  document.getElementById('highandlow')); 