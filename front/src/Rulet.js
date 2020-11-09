//룰렛게임
import React from 'react';
import ReactDOM from 'react-dom';

class Rulet extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      score: 50,
      progressCount: 0,
      image: null,
      image1: '/static/7.gif',
      image2: '/static/7.gif',
      image3: '/static/7.gif',
      count: null,
      count1: 7,
      count2: 7,
      count3: 7,
      text: "시작점수50점, INSERT COIN하시구, START버튼 꾹",
      betting: 1,
      interval1: null,
      interval2: null,
      interval3: null,
      stopCount: false,
      stopCount1: 0,
      stopCount2: 0,
      stopCount3: 0,
      img0: '/static/0.gif',
      img1: '/static/1.gif',
      img2: '/static/2.gif',
      img3: '/static/3.gif',
      img4: '/static/4.gif',
      img5: '/static/5.gif',
      img6: '/static/6.gif',
      img7: '/static/7.gif',
      img8: '/static/8.gif',
      img9: '/static/9.gif',
    };
    this.gameStart = this.gameStart.bind(this);
    this.bettingChange = this.bettingChange.bind(this);
    this.img1Stop = this.img1Stop.bind(this);
    this.img2Stop = this.img2Stop.bind(this);
    this.img3Stop = this.img3Stop.bind(this);
    this.stop = this.stop.bind(this);
    this.notProgress = this.notProgress.bind(this);
  }


  gameStart(point) {
    point.preventDefault();
    if (this.state.progressCount == 0) {
      this.setState({
        image1 : this.state.img7,
        image2 : this.state.img7,
        image3 : this.state.img7,
        stopCount1 : 0,
        stopCount2 : 0,
        stopCount3 : 0
      })
      if ( 0 > this.state.score - Number(this.state.betting)) {
        this.setState({
          text: "망했어요 파산했습니다."
        })
      } else {
        if ( this.state.score >= 1000) {
          this.setState({
            text: "당신은 도박의 신입니다!"
          })
        } else {
          this.setState({
            progressCount : 1,
            score : this.state.score - Number(this.state.betting),
            text : "배팅후 점수는"+(this.state.score-Number(this.state.betting))+"점 이구요, "+this.state.betting+"배팅하셨네요"
          })
          this.state.interval1 = setInterval(() => {
            this.ruletrun(1)
          }, 40);
          this.state.interval2 = setInterval(() => {
            this.ruletrun(2)
          }, 35);
          this.state.interval3 = setInterval(() => {
            this.ruletrun(3)
          }, 30);
        }
      }
    } else {
      return null;
    }
  }

  ruletrun(wheelNum) {
    const currentNumber = this.state['count' + wheelNum]; 
    const nextNumber = (currentNumber + 1) % 10         
    const state = {}                                      
    state['image' + wheelNum] = '/static/' + nextNumber + '.gif'  
    state['count' + wheelNum] = nextNumber
    this.setState(state);
  }

  bettingChange(point) {
    this.setState({betting: point.target.value});
  }

  img1Stop() {
      this.stop(this.state.stopCount1, this.state.interval1, 1)
  }

  img2Stop() {
      this.stop(this.state.stopCount2, this.state.interval2, 2)
  }

  img3Stop() {
      this.stop(this.state.stopCount3, this.state.interval3, 3)
  }
  
  stop(count, interval, num) {
    if (this.state.progressCount == 1){
      if (count == 0){
        clearInterval(interval)
        this.confirm(num)
        console.log(this.state.stopCount1, this.state.stopCount2, this.state.stopCount3)
        if (this.state.stopCount1 + this.state.stopCount2 + this.state.stopCount3 == 2){
          if (this.state.count1 == this.state.count2 && this.state.count2 == this.state.count3) {
            this.setState({
              score : this.state.score + this.state.betting * 6,
              text : "ㅊㅋㅊㅋ~ "+this.state.betting * 5+"점 먹었구요    점수는 : " + (this.state.score + this.state.betting * 6) + "점"
            })
            this.notProgress()
          } else {
            this.setState({
              text : "안걸렸습니다!       남은 점수 : " + this.state.score
            })
            this.notProgress()
          }
        } else {
          return null;
        }
      }
    }
  }

  notProgress() {
    this.setState({
      progressCount: 0
    })
  }

  confirm(num) {
    console.log(num)
    const stopCount = {}
    stopCount["stopCount" + num] = 1
    this.setState(stopCount)
  }
  
  render() {
    return(
      <div className="App" style={{textAlign: "center"}}>
        <img src={this.state.image1}/>&nbsp;
        <img src={this.state.image2}/>&nbsp;
        <img src={this.state.image3}/>
        <form onSubmit={this.gameStart}>
          <input type="button" value="stop" onClick={this.img1Stop}></input>
          <input type="button" value="stop" onClick={this.img2Stop}></input>   
          <input type="button" value="stop" onClick={this.img3Stop}></input>   
          <br/><br/><br/>
          <select onChange={this.bettingChange}>
            <option value="1">INSERT COIN(S)</option>
            <option value="1">1 COIN</option>
            <option value="2">2 COINS</option>
            <option value="3">3 COINS</option>
            <option value="4">4 COINS</option>
            <option value="5">5 COINS</option>
          </select>
          <input type="submit" value="START"></input>
          <br/><br/><br/>
          <textarea cols="40" rows="1" value={this.state.text}></textarea>
        </form>
        <p>1000점 달성시 승리</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Rulet />,
  document.getElementById('rulet'));