import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import API from 'apisauce';
import { defaultsDeep } from 'lodash';

const apiCall = API.create({
  headers: {
    "csrfmiddlewaretoken": csrfToken,
    'X-CSRF-Token': csrfToken,
    'X-CSRFToken': csrfToken,
    dataType: "html",
  }
})


class Posting extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      postings: this.props.postings,
      comments: this.props.comments,
      id: this.props.id
    }
    this.writeComment = this.writeComment.bind(this)
  }

writeComment() {
  if ( !this.refs.name.value == "" && !this.refs.comment.value == "" ) {
    apiCall.post("/blog/" + this.state.id + "/comment/",  {'id': this.state.id, 'userName': this.refs.name.value, 'content':this.refs.comment.value})
    .then( response => {
      this.setState({
        comments: response.data.comments
      });
      this.refs.name.value = ""
      this.refs.comment.value = ""
    })
  } else {
  alert("내용이 없습니다.")
  }
}

  render() {

    return(
      <div>

<div style={{marginLeft: 200}}>
        <header>
<h1><a href="../">
<ruby>金秀慜 <rp>(</rp><rt>김 수 민</rt><rp>)</rp></ruby>블로그</a>

<nav>
<a href="../../">본인 소개</a>
</nav>

</h1>
</header>

<ul>
    건강합니다.
</ul>
</div>

<hr/>

      <div style={{marginLeft: 200}}>
      {this.state.postings.map((posting) => {
        if (posting.id === this.state.id)
        return(

          <div>
          <h2> {posting.title} </h2>
          <small> 게시일 | {posting.time} </small>
          <aside id="aside">
            <pre><b> 카탈로그</b></pre>
            {this.state.postings.map((posting) => {
              const address = "../" + posting.id + "/"
              return(
                <li style={{fontSize:15, marginBottom:5}}> <a href={address}>{posting.title}</a></li>
              )
            })}
          </aside>
          <pre>{posting.content}</pre>

          </div>
        )
      })}

      <br/><br/>

      <textarea
        placeholder="이름"
        ref="name"
        rows = '1'
        cols = '10'>
      </textarea>
      <br/>
       <textarea
          placeholder="댓글"
          ref="comment"
          rows = "3"
          cols = "50">
        </textarea>
        <input type="button" onClick = {this.writeComment} value = "작성"></input>

        
          {this.state.comments.map((comment) => {
            if ( comment.id == this.state.id ) 
            return (
              <li style={{fontSize: 14, marginTop: 10}}>
                <b>{comment.name}</b>
                &nbsp;-&nbsp;
                <div style={{fontSize: 12, display:"inline"}}>
                {comment.time.substring(0,4)}년&nbsp;
                {comment.time.substring(5,7)}월 
                {comment.time.substring(8,10)}일&nbsp;
                {comment.time.substring(11,13)}시 
                {comment.time.substring(14,16)}분
                </div>
                <br/>
                <div style={{marginTop: 7}}>
                {comment.content}
                </div>
              </li>
            )
            
          })}
        </div>

      </div>
    )
  }
}

ReactDOM.render(
  <Posting
    comments = {comments}
    postings  = {postings}
    csrfToken = {csrfToken}
    id = {id}
  />,
  document.getElementById('posting')); 