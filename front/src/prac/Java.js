import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Java extends React.Component {
  constructor(props){
    super(props)

    this.closure = this.closure.bind(this)
    this.returnTest = this.returnTest.bind(this)
  }

  closure() {
    var e = 10;
    function sum(a){
      return function(b) {
        return function(c) {
          return function(d){
            return a + b + c + d + e;
          }
        }
      }
    }

    console.log(sum(1)(2)(3)(4));

    var e = 10;
    function sum(a){
      return function sum2(b){
        return function sum3(c){
          return function sum4(d){
            return a + b + c + d + e;
          }
        }
      }
    }


    var s = sum(1);
    var s1 = s(2);
    var s2 = s1(3);
    var s3 = s2(4);
    console.log(s3)
  }


  returnTest() {
    let totalAscent = 0;
    let totalTime = 0;
    let totalDistance = 0;
    
  }


  render() {
    
    /* var Person = function(arg) {
      var name = arg ? arg : "soomin";


      return{
        getName : function() {
          return name;
        },
        setName : function(args) {
          name = arg;
        }
      };
    };

    var me = Person();
    console.log(me.getName());

    var ArrCreate = function(arg) {
      var arr = [1,2,3];

      return {
        getArr : function() {
          return arr;
        }
      };
    }

    var obj = ArrCreate();
    var arr = obj.getArr();
    arr.push(5);
    console.log(obj.getArr());




    var Person = function(arg) {
      var name = arg ? arg : "jooa";

      var Func = function() {};
      Func.prototype = {
        getName: function() {
          return name;
        },
        setName: function(arg) {
          name = arg;
        }
      };
      return Func;
    }();

    var me = new Person();
    console.log(me.getName());


    function sum(a, b) {
      return a + b;

      
    }
    var result = sum(1, 2);
      var expected = 3;

      if (result !== expected) {
        throw new Error(result + ' is not equal to ' + expected);
      }




    function test(title, testCode) {
      try {
        testCode();
      } catch (error) {
        console.error(error);
      }
    }



    function expect(result) {
      return {
        toBe: function(expected) {
          if (result !== expected) {
            throw new Error(result + ' is not equal to ' + expected);
          }
        }
      }
    }



    test(sum(1, 2) + " is not equal" + 3, function() {
      expect(sum(1, 2)).toBe(3);
    });


     

    function makeFunc() {
      var name = "KimSooMin";
      function displayName() {
        console.log(name);
      }
      return displayName;
    }

    var myFunc = makeFunc();
    myFunc();







    function makeAdder(x) {
      var y = 1;
      return function(z) {
        y = 100;
        return x + y + z; 
      };
    }

    var add5 = makeAdder(5);
    var add10 = makeAdder(10);

    console.log(add5(2));
    console.log(add10(2));







    var counter = (function() {
      var privateCounter = 0;
      function changeBy(val)  {
        privateCounter += val;
      }
      return {
        increment: function() {
          changeBy(1);
        },
        decrement: function() {
          changeBy(-1);
        },
        value: function() {
          return privateCounter;
        }
      }
    })();

    console.log(counter.value());
    counter.increment()
    counter.increment()
    console.log(counter.value());
    counter.decrement();
    console.log(counter.value());  */

    

  



    return(
      <div>
        <button onClick={this.closure}>closure</button>
      </div>
    );
  }
}

ReactDOM.render(
<Java />,
document.getElementById('java'));