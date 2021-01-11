import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import API from 'apisauce';



const apiCall = API.create({
  headers: {
    "csrfmiddlewaretoken": csrfToken,
    'X-CSRF-Token': csrfToken,
    'X-CSRFToken': csrfToken,
    dataType: "html",
  }
})


class Weather extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      comments: this.props.comments
    }
    this.writeComment = this.writeComment.bind(this);
  }

writeComment() {
  console.log(this.refs.commentBox.value)
  apiCall.post("/blog/weather/comment/", "1 " + this.refs.commentBox.value)
  .then( response => {
    console.log(response)
    this.setState({
      comments: response.data.comments
    });
    this.refs.commentBox.value = ""
  })
}

  render() {
    return(
      <div>
        <header>
          <h1><a href="http://larsoomin.cf/blog/">
            <ruby>金秀慜 <rp>(</rp><rt>김 수 민</rt><rp>)</rp></ruby>블로그</a>
            <nav>
              <a href="http://larsoomin.cf/">본인 소개</a>  
            </nav>
          </h1>
        </header>
        <ul class="disclaimer">
          건강합니다.
        </ul>
        <p>2020년 9월 23일</p>
        <h2>맑음</h2>
        <p>엄청 맑음</p>


        <textarea
          rows = "10"
          cols = "100"
          name = "commentBox"
          id = "commentBox"
          ref= "commentBox"
          autoFocus>
        </textarea>
        <input type="button" onClick = {this.writeComment} value = "전송"></input>
        <ul>
          {this.state.comments.map((comment) => {
            return (
              <li>
                {comment.time.substring(0,4)}년&nbsp;
                {comment.time.substring(5,7)}월 
                {comment.time.substring(8,10)}일&nbsp;
                {comment.time.substring(11,13)}시 
                {comment.time.substring(14,16)}분
                - {comment.comment}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}


ReactDOM.render(
<Weather
  comments = {comments}
  csrfToken = {csrfToken} />,
document.getElementById('weather'));