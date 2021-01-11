import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Learn extends Component {
  constructor(props){
    super(props)
    this.state = {
      season : "summer",
      test : true,
      halin : 0.5,
      lowPlan : 15,
      highPlan : 30,
    }
    this.ifmoon = this.ifmoon.bind(this);
    this.summer = this.summer.bind(this);
    this.flagArgument = this.flagArgument.bind(this);
    this.heatingPlan = this.heatingPlan.bind(this);
    this.xxNEWwithinRange = this.xxNEWwithinRange.bind(this);
    this.caps = this.caps.bind(this);
    this.organization = this.organization.bind(this);
  }

  applyDiscount(aNumber) {
    if (!this.state.test) return console.log(aNumber)
    else 
      return console.log(aNumber - (this.state.halin * aNumber));

  }
    


  ifmoon() {
    if( this.summer() ) {
      this.changeWinter()
    } else {
      this.changeSummer()
    }
  }

  summer() {
    return this.state.season == "summer"
  }

  changeWinter() {
    this.setState({
      season : "winter"
    })
    console.log("season : winter")
  }

  changeSummer() {
    this.setState({
      season : "summer"
    })
    console.log("season : summer")
  }

  flagArgument(own, two) {
    if (premium) {
    } else {
    }
   }

  heatingPlan() {
    if (!this.withinRange(aRoom.daysTempRange))
      console.log('규칙안지켜짐')
    }

  withinRange(aNumberRange) {
    return (aNumberRange.low >= this.state.lowPlan) &&
           (aNumberRange.high <= this.state.highPlan);
  }

  xxNEWwithinRange(aNumberRange) {
    return (aNumberRange.low >= this.state.lowPlan) &&
           (aNumberRange.high <= this.state.highPlan);
  }

  cap() {
    const spaceshipOwner = null
    let defaultOwner = {firstName: "마틴", lastName: '파우럭'}
    spaceshipOwner = getDefaultOwner()
    setDefaultOwner({firstName: "레베카", lastName: '파슨스'});
    
    function getDefaultOwner() {return defaultOwner}
    function setDefaultOwner(arg) {defaultOwner = arg}
  }

  printNesoy() {
    printTableHead();
  }

  caps() {
    
  }

  organization() {
  }

 render() {
    return (
       <div>
          {this.state.season}
          <button onClick={this.ifmoon}>click</button>

          <button onClick={this.applyDiscount(-20000)}>rojrorjor</button>

          <button onClick={this.flagArgument}></button>

          <button onClick={this.heatingPlan}> heatingPlan</button>

          <button onClick={this.cap}>dddddddd</button>



        <button onClick={this.caps}>캡슐화</button>

       </div>
    );
  }
}

const aRoom = 
  {
    "daysTempRange": [
      {
        'low': '16',
        'high': '29'
      }
    ]
  }

  const organization = new organization({name: "애크미 구스베리", country: "GB"});




ReactDOM.render(
<Learn />,
document.getElementById('learn'));

