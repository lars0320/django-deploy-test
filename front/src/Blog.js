import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postings: this.props.postings
    }
  }
  render() {
    
    return(
      <div>

<div style={{marginLeft: 200}}>
        <header>
<h1><a href="./">
<ruby>金秀慜 <rp>(</rp><rt>김 수 민</rt><rp>)</rp></ruby>블로그</a>

<nav>
<a href="../">본인 소개</a>
</nav>

</h1>
</header>

<ul class="disclaimer">
    건강합니다.
</ul>

</div>
<hr/>
<div style={{marginLeft:200}}>

<h2>작성글</h2>

{this.state.postings.map((posting) => {
  const address = "./" + posting.id + "/"
  return(
    <ul>
      <li>
        <a href={address}> {posting.title} </a>
      </li>
    </ul>
  )
})}
</div>
      </div>
    )
  }
}
  
ReactDOM.render(
  <Blog
    postings  = {postings}
    csrfToken = {csrfToken}
  />,
  document.getElementById('blog')); 

  