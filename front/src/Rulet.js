//룰렛게임
import React from 'react';
import ReactDOM from 'react-dom';
import API from 'apisauce';

const apiCall = API.create({
  headers: {
    "csrfmiddlewaretoken": csrfToken,
    'X-CSRF-Token': csrfToken,
    'X-CSRFToken': csrfToken,
    dataType: "html",
  }
})

class Rulet extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      score: 50,
      progress: false,
      image1: '/static/7.gif',
      image2: '/static/7.gif',
      image3: '/static/7.gif',
      imageNumber1: 7,  
      imageNumber2: 7,
      imageNumber3: 7,
      text: "시작점수50점, INSERT COIN하시구, START버튼 꾹",
      betting: 1,
      interval1: null, 
      interval2: null,
      interval3: null,
      runSwitch1: false, 
      runSwitch2: false,
      runSwitch3: false,
      speed1: 40, 
      speed2: 35,
      speed3: 30,
      records: this.props.records,
      save: false
    };
    this.start= this.start.bind(this);
    this.reset = this.reset.bind(this);
    this.die = this.die.bind(this);
    this.warning = this.warning.bind(this);
    this.win = this.win.bind(this);
    this.gameRun = this.gameRun.bind(this);
    this.ruletRun = this.ruletRun.bind(this);
    this.stopButtonPress = this.stopButtonPress.bind(this);
    this.allStopCheck = this.allStopCheck.bind(this);
    this.end = this.end.bind(this);
    this.success = this.success.bind(this);
    this.fail = this.fail.bind(this);
    this.bettingChange = this.bettingChange.bind(this);
    this.sendScore = this.sendScore.bind(this);
  }

  start(event) {
    event.preventDefault();
    if ( this.state.save === false) {
      if (!this.state.progress) {
        this.reset()
        if ( this.state.score === 0 )
          return this.die()
        if ( 0 > this.state.score - parseInt(this.state.betting))
          return this.warning()
        if ( this.state.score >= 1000)
          return this.win()
        this.gameRun()
      }
    } else {
      this.setState({
        text: "이미 세이브 하셨습니다."
      })
    }
  }

  reset() {
    this.setState({
      image1 : '/static/7.gif',
      image2 : '/static/7.gif',
      image3 : '/static/7.gif',
      runSwitch1 : false,
      runSwitch2 : false,
      runSwitch3 : false
    })
  }

  die() {
    this.setState({
      text: "당신 파산입니다."
    }) 
  }

  warning() {
    this.setState({
      text: "제발 고만하세요."
    })
  }

  win() {
    this.setState({
      text: "당신은 도박의 신입니다!"
    })
  }

  gameRun() {
    const newScore = this.state.score - parseInt(this.state.betting)
    this.setState({
      progress : true,
      score : newScore,
      text : "배팅후 점수는"+ newScore +"점 이구요, "+this.state.betting+"배팅하셨네요"
    })
    this.ruletRun(1)
    this.ruletRun(2)
    this.ruletRun(3)
  }

  ruletRun(num) { 
    const intervalState = {} 
    intervalState['interval' + num] = setInterval(() => {
      const currentNumber = this.state['imageNumber' + num]
      const nextNumber = (currentNumber + 1) % 10
      const ruletState = {}  
      ruletState['image' + num] = '/static/' + nextNumber + '.gif'  
      ruletState['imageNumber' + num] = nextNumber
      this.setState(ruletState);
    }, this.state['speed' + num])
    this.setState(intervalState);
  }

  stopButtonPress(num) {
    const runSwitch = this.state['runSwitch' + num]
    const interval  = this.state['interval'  + num]
    if (this.state.progress === true && runSwitch === false){
      clearInterval(interval)
      this.allStopCheck(num)
    }
  }

  allStopCheck(num) { 
    const runSwitch = {}
    runSwitch["runSwitch" + num] = true
    this.setState(runSwitch, () => {
      if ( 
          this.state.runSwitch1 === true && 
          this.state.runSwitch2 === true && 
          this.state.runSwitch3 === true
      ) {
        this.end()
      }
    })
  }

  end() { 
    this.setState({
      progress : false
    })
    if (this.state.imageNumber1 === this.state.imageNumber2 
     && this.state.imageNumber2 === this.state.imageNumber3) {
      this.success()
    } else {
      this.fail()
    }
  }

  success() {
    const newScore = this.state.score + this.state.betting * 6
    this.setState({
      score : newScore,
      text  : "ㅊㅋㅊㅋ~ "+this.state.betting * 5+"점 먹었구요    점수는 : " + newScore + "점",
    })
  }

  fail() {
    this.setState({
      text : "안걸렸습니다!       남은 점수 : " + this.state.score,
    })
  }
  
  bettingChange(point) {
    this.setState({betting: point.target.value});
  }
              
  sendScore() {
    const userName = prompt('닉네임을 입력해주세요.')
    if( !userName == "" ) {
      apiCall.post("/index/rulet/score/", { 'userName': userName, 'score': this.state.score })
      .then( response => {
        this.setState({
          records: response.data.records
        });
      })
      this.setState({
        save: true
      })
    } else {
      alert("이름을 입력해주세용")
      this.sendScore()
    }
  }

  render() {
    const records = []
    return(
      <div className="App" style={{textAlign: "center"}}>
        <text style={{marginLeft:1000}}> <a href="../">뒤로가기</a> </text><br/>
        <img src={this.state.image1}/>&nbsp;
        <img src={this.state.image2}/>&nbsp;
        <img src={this.state.image3}/>
        <form onSubmit={this.start}>
          <input type="button" value="stop" onClick={() => {this.stopButtonPress(1)}}></input>
          <input type="button" value="stop" onClick={() => {this.stopButtonPress(2)}}></input>   
          <input type="button" value="stop" onClick={() => {this.stopButtonPress(3)}}></input>   
          <br/><br/><br/>
          <select onChange={this.bettingChange}>
            <option value="1">INSERT COIN(S)</option>
            <option value="1">1 COIN</option>
            <option value="2">2 COINS</option>
            <option value="3">3 COINS</option>
            <option value="4">4 COINS</option>
            <option value="5">5 COINS</option>
          </select>
          <input type="submit" value="START"></input></form> <button onClick={this.sendScore}>게임 그만하고 점수등록</button>
          <br/><br/><br/>
          <textarea cols="40" rows="1" value={this.state.text}></textarea>
        <p>1000점 달성시 승리</p>
        <p>점수를 등록하고 싶다면 꼭 점수등록을 눌러주세요.</p>

        <h2 >점수 기록</h2>
        
        {this.state.records.map((record) => {

          if ( records.find( array => array.name === record.name && parseInt(array.score) >= parseInt(record.score))) {  //이전전적보다 더못한경우
            return
          }
          
          if ( records.find( array => array.name === record.name && parseInt(array.score) >= parseInt(record.score))) { //이전전적보다 잘한경우
            const deleteScore = records.find( array => array.name === record.name && array.score >= record.score) 
            const deleteIndex = records.indexOf(deleteScore)
            records.splice(deleteIndex, 1)
          }
          
          records.push({
            name: record.name, score: record.score
          })
        })}

        {records.map((record) => {
          
          return(
            <li>
              {record.name} - {record.score}
            </li>
          )
        })}

      </div>
    );
  }
}

ReactDOM.render(
  <Rulet 
  records = {records}
  csrfToken = {csrfToken}
    />,
  document.getElementById('rulet'));