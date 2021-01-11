import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Test extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       data: '',
       wow2: "hi",
       name4: 1,
       name5: 2,
       num: 0
    }
    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.test = this.test.bind(this);
    this.testtwo = this.testtwo.bind(this);
    this.switchTest = this.switchTest.bind(this);
    this.staticName = this.staticName.bind(this);
    this.staticHosting = this.staticHosting.bind(this);
    this.test3 = this.test3.bind(this);
    this.test4 = this.test4.bind(this);
    this.test5 = this.test5.bind(this);
    this.test6 = this.test6.bind(this);
    this.test7 = this.test6.bind(this);
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
 
 test3() {
   const nextNumber = (this.state.num + 1) % 10
   console.log(nextNumber)
   this.setState({
      num : nextNumber
   })
 }

 test4() {
   this.test6(4)
 }

 test5() {
   this.test6(5)
 }

 test6(num) {
   const name = this.state['name' + num]
   console.log( name )
   const state = {}
   state["name"+num] = name+1
   this.setState(state)
   
 }
 
 test7() {
   const numb = "wowowwoww"
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

          <button onClick = {this.test3}>ddqoedoq</button>

          <button onClick = {this.test4}>누르면 참조실험1</button>

          <button onClick = {this.test5}>누르면 참조실험2</button>
         
         
         <p>dodoo</p>
       </div>
    );
 }
}

ReactDOM.render(
<Test />,
document.getElementById('test'));