import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function createPerformanceCalculator(aPerformance, aPlay) {
  switch(aPlay.type) {
    case "tragedy": return new TragedyCalculator(aPerformance, aPlay);
    case "comedy": return new ComedyCalculator(aPerformance, aPlay);
    default:
      console.log('알수없음')
  }
}

class TragedyCalculator extends PerformanceCalculator {
  constructor(props){
    super(props)
  }
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }  

}

//class ComedyCalculator extends PerformanceCalculator{
//}

class PerformanceCalculator extends Component {
  constructor(aPerformance, aPlay){
    super(aPerformance, aPlay);
    this.performance = aPerformance;
    this.play = aPlay;
  }
  get amount() {
    let result = 0;
    switch (this.play.type) {
      case "tragedy": // 비극
      throw '오류 발생'; 
      case "comedy": //희극
      result = 30000;
      if (this.performance.audience > 20) {
        result += 10000 + 500 * (this.performance.audience - 20)
      }
      result += 300 * this.performance.audience;
      break;
      default:
        console.log('알수없장르');
    }
    return result;
  }
  get volumeCredits() {
    let result = 0;
    result += Math.max(this.performance.audience - 30, 0);
    if ("comedy" === this.play.type)
    result += Math.floor(this.performance.audience)
  }



  render() {
    return(
      <div>
          
      </div>
    );
  }
}


class Sample extends Component {
  constructor(props){
    super(props)
    this.state = {
      return: "hi"
    }
    this.statement = this.statement.bind(this)
    this.createStatementData = this.createStatementData.bind(this);
  }
//class 사용





  statement(){ //메인
    return renderPlainText(this.createStatementData(invoices, plays));

    function renderPlainText(data, plays) {
      let result = '청구 내역 (고객명: ' + data.customer + ")\n";                            //고객이름
      for (let perf of data.performances) {                                              //공연이름 돈 석 반복문으로
      result += perf.play.name + ': ' + use(perf.amount) + "("+ perf.audience + "석)\n";  
    }
    result += '총액: '+ use(data.totalAmount) + "\n";                                     //총금액
    result += '적립 포인트: $' + data.totalVolumeCredits + '점\n'                           //적립포인트
    console.log(result)
  }
  
  
    function use(aNumber) {  //숫자양식
      return new Intl.NumberFormat("en-US",
      { style: "currency", currency: "USD",
       minimumFractionDigits: 2 }).format(aNumber/100);
    }


  }




  createStatementData(invoice, plays){
    const result = {};

    result.customer = invoice.customer // 고객이누군지
    result.performances = invoice.performances.map(enrichPerformance); //무슨공연인지 얼마인지 몇석인지
    result.totalAmount = totalAmount(result);  //총금액
    result.totalVolumeCredits = totalVolumeCredits(result); //적립금액
    return result;

    function enrichPerformance(aPerformance) {
      const calculator = new PerformanceCalculator(aPerformance, playFor(aPerformance));
      const result = Object.assign({}, aPerformance);
      result.play = calculator.play
      result.amount = calculator.amount;
      result.volumeCredits = calculator.volumeCredits;
      return result;
    }

    function playFor(aPerformance){ //이름과 타입이뭔지 공연이름을통해 값을구함
      return plays[aPerformance.playID];  
    }
    
    function amountFor(aPerformance){ //각각 얼만지 계산
      return new PerformanceCalculator(aPerformance, playFor(aPerformance)).amount;
    }
    
    function volumeCreditsFor(aPerformance) { //적립포인트계산
      let result = 0;
      result += Math.max(aPerformance.audience - 30, 0);
      if ("comedy" === aPerformance.play.type)
      result += Math.floor(aPerformance.audience / 5);
      return result;
    }
    
    
    function totalAmount(data) { //총금액
      return data.performances
      .reduce((total, p) => total + p.amount, 0);
    }
    function totalVolumeCredits(data) { //총포인트
      return data.performances
      .reduce((total, p) => total + p.volumeCredits, 0);
    }
  }


  render(){

    return(
      <div>
        <button onClick={this.statement}>onClick</button>
        <ul>
          <li>{this.state.return}</li>
        </ul>
        <p>do</p>
      </div>
    );
  }
}


const plays = {
  "hamlet": {"name": "Hamlet", "type": "tragedy"},
  "as-like": {"name": "As You Like It", "type": "comedy"},
  "othello": {"name": "Othello", "type": "tragedy"}
}

const invoices = 
  {
    "customer": "BigCo",
    "performances": [
      {
        "playID": "hamlet",
        "audience": 55
      },
      {
        "playID": "as-like",
        "audience": 35
      },
      {
        "playID": "othello",
        "audience": 40 
      }
    ]
  }


ReactDOM.render(
  <Sample/>,
  document.getElementById('sample')
);