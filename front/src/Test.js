import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Test extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       data: '',
       wow2: "hi",
       name1: 'wow'
    }
    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.test = this.test.bind(this);
    this.testtwo = this.testtwo.bind(this);
    this.switchTest = this.switchTest.bind(this);
    this.staticName = this.staticName.bind(this);
    this.staticHosting = this.staticHosting.bind(this);
 };
 updateState(e) {
    this.setState({data: e.target.value});
 }
 clearInput() {
    //this.setState({data: ''});
    ReactDOM.findDOMNode(this.refs.myInput).focus();
    (this.refs.myInput).value = "hi"
    console.log(this.refs.myInput.value)
 }
 test(e) {
   this.testtwo(2)
   $(First).attr("src",this.state.image1)
 }

 testtwo(e) {
    alert(this.state.wow + e)
 }
 switchTest(value) {
   switch (this.state.wow2) {
      case "hi":
         this.state.wow2 = "bye"
         console.log(this.state.wow2)
         case "bye":
            this.state.wow2 = "hi"
            console.log(this.state.wow2)
      default:
         console.log(this.state.wow2)
   }
 }
 
 staticHosting() {
    this.staticName()
 }

 staticName(name) {
   console.log(this.state+name)
 }
 render() {
    return (
       <div>
          <input value = {this.state.data} onChange = {this.updateState} 
             ref = "myInput"></input>
          <button onClick = {this.clearInput}>CLEAR</button>
          <h4>{this.state.data}</h4>

          <button onClick = {this.test}>rorororororo</button>




          <button onClick = {this.switchTest}>switte</button>

          <button onClick = {this.staticHosting}>hosting</button>
       </div>
    );
 }
}

ReactDOM.render(
<Test />,
document.getElementById('test'));