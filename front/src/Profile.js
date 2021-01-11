import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class Profile extends React.Component {
  render() {
    return(
      <div>
        <img src="/static/face.jpg" style={{float:"left"}} width={300} height={300}></img>
        <div style={{marginLeft:350}}>
          <h1>
            <ruby>
              <rb>김</rb><rp>(</rp><rt>Kim</rt><rp>)</rp>
              <rb>수</rb><rp>(</rp><rt>Soo</rt><rp>)</rp>
              <rb>민</rb><rp>(</rp><rt>Min</rt><rp>)</rp>
            </ruby>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          </h1>
          <p>
            Hello, I’m Kim Soomin living in Busan. I am currently working at Doverman.
            <br/>This is my resume. -{'>'} <a href="./resume">Resume</a>
          </p>
          <br/>
        </div>
        <li style={{marginLeft:330}}><a href="./blog"><ruby>金秀慜<rp>(</rp><rt>김수민</rt><rp>)</rp></ruby> 블로그</a></li>
        <li style={{marginLeft:330}}><a href="./index"><ruby>金秀慜<rp>(</rp><rt>김수민</rt><rp>)</rp></ruby>창작마당</a></li>
        <div style={{marginLeft:350}}>
          <br/>
          <h2>favorite everything</h2>
          <br/>
        </div>
        <div style={{marginLeft:330}}>
          {favorites.map((favorite) => {
            return(
              <li>{favorite}</li>
            )
          })}
        </div>
        <div style={{marginLeft:350}}>
          <h2>Contact</h2>
          <p>The best method to contact with me is by E-mail {">"} mini03200@naver.com {'<'} <br/>
          </p>
        </div>
        <div style={{marginLeft:350}}>
          <h2><a id="Open">What I want to happen</a></h2>
        </div>
        <div style={{marginLeft:330}}>
          {wishList.map((wish) => {
            return(
              <li>{wish}</li>
            )
          })}
        </div>
        <div style={{marginLeft:350}}>
          <p>There is no specific content, but thank you for reading this far.</p>
        </div>
     </div>
    );
  }
}

const favorites = [
  'Family',
  'Friend',
  'Chicken',
  'Game',
  'Song',
  'Computer',
  'Youtube'
]

const wishList = [
  'winning a lottery',
  'Obtaining a license',
  'Getting good at work',
  'Be healthy together',
  'Go to LoL Challenger'
]

ReactDOM.render(
  <Profile
  />,
  document.getElementById('profile')); 
