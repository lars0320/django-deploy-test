import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Test extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       data: '',
       wow2: "hi"
    }
    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.test = this.test.bind(this);
    this.testtwo = this.testtwo.bind(this);
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
 render() {
    return (
       <div>
          <input value = {this.state.data} onChange = {this.updateState} 
             ref = "myInput"></input>
          <button onClick = {this.clearInput}>CLEAR</button>
          <h4>{this.state.data}</h4>

          <button onClick = {this.test}>rorororororo</button>
       </div>
    );
 }
}

ReactDOM.render(
<Test />,
document.getElementById('test'));