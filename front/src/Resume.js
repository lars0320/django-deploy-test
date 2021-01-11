import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class Resume extends React.Component{
  render() {
    return(
      <div style={{textAlign:"center"}}>
        <h1>이력서</h1>
        <h2>개인 정보</h2>
        <h3>이름 : 김수민 (金秀慜)</h3>
        <h3>이메일 : mini03200@naver.com</h3>
        <h3>전화번호 : 010-4807-XXXX</h3>
        <h2>학교</h2>
        <p>2017-2020 <a href="http://school.busanedu.net/buil-h/main.do">부일전자디자인고등학교</a></p>
        <h2>자격증</h2>
        <li>컴퓨터활용능력 2급</li><li>워드프로세서 1급</li><li>정보처리기능사</li><li>GTQ2급</li><li>ITQ4종</li>
      </div>
    );
  }
}

ReactDOM.render(
  <Resume/>,
  document.getElementById('resume')
)
