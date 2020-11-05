import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Index extends Component {
  render() {
    return (
      <div>
        <h1>게임 모음</h1>
        <nav>
          <ul>
            <li>
              <a href="http://larsoomin.cf/index/rulet">룰렛 게임</a>
            </li>
            <li>
              <a href="http://larsoomin.cf/index/highandlow">크거나작거나 게임</a>
            </li>
            <li>
              <a href="http://larsoomin.cf/index/counter">숫자 멈추기 게임</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('index'));    