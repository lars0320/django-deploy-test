//룰렛게임
import React from 'react';
import ReactDOM from 'react-dom';
/*import img0 from '/static/0.gif';
import img1 from '/static/1.gif';
import img2 from '/static/2.gif';
import img3 from '/static/3.gif';
import img4 from '/static/4.gif';
import img5 from '/static/5.gif';
import img6 from '/static/6.gif';
import img7 from '/static/7.gif';
import img8 from '/static/8.gif';
import img9 from '/static/9.gif'; */
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;


class Rulet extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      score: 50,
      progressCount: 0,
      image1: '/static/7.gif',
      image2: '/static/7.gif',
      image3: '/static/7.gif',
      count1: 7,
      count2: 7,
      count3: 7,
      text: "시작점수50점, INSERT COIN하시구, START버튼 꾹",
      betting: 1,
      interval1: null,
      interval2: null,
      interval3: null,
      stopCount1: 0,
      stopCount2: 0,
      stopCount3: 0,
    };
    this.gameStart = this.gameStart.bind(this);
    this.bettingChange = this.bettingChange.bind(this);
    this.img1Stop = this.img1Stop.bind(this);
    this.img2Stop = this.img2Stop.bind(this);
    this.img3Stop = this.img3Stop.bind(this);
    this.stop = this.stop.bind(this);
    this.notProgress = this.notProgress.bind(this);
  }


  gameStart(point) {
    point.preventDefault();
    if (this.state.progressCount == 0) {
      this.state.image1 = '/static/7.gif'
      this.state.image2 = '/static/7.gif'
      this.state.image3 = '/static/7.gif'
      this.state.stopCount1 = 0
      this.state.stopCount2 = 0
      this.state.stopCount3 = 0
      if ( 0 > this.state.score - Number(this.state.betting)) {
        this.setState({
          text: "망했어요 파산했습니다."
        })
      } else {
        if ( this.state.score >= 1000) {
          this.setState({
            text: "당신은 도박의 신입니다!"
          })
        } else {
          this.state.progressCount = 1
          this.state.score = this.state.score - Number(this.state.betting)
          this.setState({
            text : "배팅후 점수는"+this.state.score+"점 이구요, "+this.state.betting+"배팅하셨네요"
          })
          this.state.interval1 = setInterval(() => {
            if (this.state.image1 == '/static/1.gif') {
              this.setState({
                image1: '/static/2.gif'
              })
              this.state.count1 = 2
            } else {
              if (this.state.image1 == '/static/2.gif') {
                this.setState({
                  image1: '/static/3.gif'
                })
                this.state.count1 = 3
              } else {
                if (this.state.image1 == '/static/3.gif') {
                  this.setState({
                    image1: '/static/4.gif'
                  })
                  this.state.count1 = 4
                } else {
                  if (this.state.image1 == '/static/4.gif') {
                    this.setState({
                      image1: '/static/5.gif'
                    })
                    this.state.count1 = 5
                  } else {
                    if (this.state.image1 == '/static/5.gif') {
                      this.setState({
                        image1: '/static/6.gif'
                      })
                      this.state.count1 = 6
                    } else {
                      if (this.state.image1 == '/static/6.gif') {
                        this.setState({
                          image1: '/static/7.gif'
                        })
                        this.state.count1 = 7
                      } else {
                        if (this.state.image1 == '/static/7.gif') {
                          this.setState({
                            image1: '/static/8.gif'
                          })
                          this.state.count1 = 8
                        } else {
                          if (this.state.image1 == '/static/8.gif') {
                            this.setState({
                              image1: '/static/9.gif'
                            })
                            this.state.count1 = 9
                          } else {
                            if (this.state.image1 == '/static/9.gif') {
                              this.setState({
                                image1: '/static/0.gif'
                              })
                              this.state.count1 = 0
                            } else {
                              if (this.state.image1 == '/static/0.gif') {
                                this.setState({
                                  image1: '/static/1.gif'
                                })
                                this.state.count1 = 1
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }, 40);
          this.state.interval2 = setInterval(() => {
            if (this.state.image2 == '/static/1.gif') {
              this.setState({
                image2: '/static/2.gif'
              })
              this.state.count2 = 2
            } else {
              if (this.state.image2 == '/static/2.gif') {
                this.setState({
                  image2: '/static/3.gif'
                })
                this.state.count2 = 3
              } else {
                if (this.state.image2 == '/static/3.gif') {
                  this.setState({
                    image2: '/static/4.gif'
                  })
                  this.state.count2 = 4
                } else {
                  if (this.state.image2 == '/static/4.gif') {
                    this.setState({
                      image2: '/static/5.gif'
                    })
                    this.state.count2 = 5
                  } else {
                    if (this.state.image2 == '/static/5.gif') {
                      this.setState({
                        image2: '/static/6.gif'
                      })
                      this.state.count2 = 6
                    } else {
                      if (this.state.image2 == '/static/6.gif') {
                        this.setState({
                          image2: '/static/7.gif'
                        })
                        this.state.count2 = 7
                      } else {
                        if (this.state.image2 == '/static/7.gif') {
                          this.setState({
                            image2: '/static/8.gif'
                          })
                          this.state.count2 = 8
                        } else {
                          if (this.state.image2 == '/static/8.gif') {
                            this.setState({
                              image2: '/static/9.gif'
                            })
                            this.state.count2 = 9
                          } else {
                            if (this.state.image2 == '/static/9.gif') {
                              this.setState({
                                image2: '/static/0.gif'
                              })
                              this.state.count2 = 0
                            } else {
                              if (this.state.image2 == '/static/0.gif') {
                                this.setState({
                                  image2: '/static/1.gif'
                                })
                                this.state.count2 = 1
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }, 35);
          this.state.interval3 = setInterval(() => {
            if (this.state.image3 == '/static/1.gif') {
              this.setState({
                image3: '/static/2.gif'
              })
              this.state.count3 = 2
            } else {
              if (this.state.image3 == '/static/2.gif') {
                this.setState({
                  image3: '/static/3.gif'
                })
                this.state.count3 = 3
              } else {
                if (this.state.image3 == '/static/3.gif') {
                  this.setState({
                    image3: '/static/4.gif'
                  })
                  this.state.count3 = 4
                } else {
                  if (this.state.image3 == '/static/4.gif') {
                    this.setState({
                      image3: '/static/5.gif'
                    })
                    this.state.count3 = 5
                  } else {
                    if (this.state.image3 == '/static/5.gif') {
                      this.setState({
                        image3: '/static/6.gif'
                      })
                      this.state.count3 = 6
                    } else {
                      if (this.state.image3 == '/static/6.gif') {
                        this.setState({
                          image3: '/static/7.gif'
                        })
                        this.state.count3 = 7
                      } else {
                        if (this.state.image3 == '/static/7.gif') {
                          this.setState({
                            image3: '/static/8.gif'
                          })
                          this.state.count3 = 8
                        } else {
                          if (this.state.image3 == '/static/8.gif') {
                            this.setState({
                              image3: '/static/9.gif'
                            })
                            this.state.count3 = 9
                          } else {
                            if (this.state.image3 == '/static/9.gif') {
                              this.setState({
                                image3: '/static/0.gif'
                              })
                              this.state.count3 = 0
                            } else {
                              if (this.state.image3 == '/static/0.gif') {
                                this.setState({
                                  image3: '/static/1.gif'
                                })
                                this.state.count3 = 1
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }, 30);
        }
      }
    } else {
      return null;
    }

  }

  bettingChange(point) {
    this.setState({betting: point.target.value});
  }

  img1Stop() {
      this.stop(this.state.stopCount1, this.state.interval1, 1)
  }

  img2Stop() {
      this.stop(this.state.stopCount2, this.state.interval2, 2)
  }

  img3Stop() {
      this.stop(this.state.stopCount3, this.state.interval3, 3)
  }
  
  stop(count, interval, num) {
    if (this.state.progressCount == 1){
      if (count == 0){
        clearInterval(interval)
        this.confirm(num)
        if (this.state.stopCount1 + this.state.stopCount2 + this.state.stopCount3 == 3){
          if (this.state.count1 == this.state.count2 && this.state.count2 == this.state.count3) {
            this.state.score = this.state.score + this.state.betting * 6
            this.setState({
              text : "ㅊㅋㅊㅋ~ "+this.state.betting * 5+"점 먹었구요    점수는 : " + this.state.score + "점"
            })
            this.notProgress()
          } else {
            this.setState({
              text : "안걸렸습니다!       남은 점수 : " + this.state.score
            })
            this.notProgress()
          }
        } else {
          return null;
        }
      }
    }
  }

  notProgress() {
    this.state.progressCount = 0
  }

  confirm(num) {
    if (num == 1) {
      this.state.stopCount1 = 1
    } else {
      if (num == 2) {
        this.state.stopCount2 = 1
      } else {
        this.state.stopCount3 = 1
      }
    }
  }
  

  render() {
    return(
      <div className="App" style={{textAlign: "center"}}>
        <img src={this.state.image1}/>&nbsp;
        <img src={this.state.image2}/>&nbsp;
        <img src={this.state.image3}/>
        <form onSubmit={this.gameStart}>
          <input type="button" value="stop" onClick={this.img1Stop}></input>
          <input type="button" value="stop" onClick={this.img2Stop}></input>   
          <input type="button" value="stop" onClick={this.img3Stop}></input>   
          <br/><br/><br/>
          <select onChange={this.bettingChange}>
            <option value="1">INSERT COIN(S)</option>
            <option value="1">1 COIN</option>
            <option value="2">2 COINS</option>
            <option value="3">3 COINS</option>
            <option value="4">4 COINS</option>
            <option value="5">5 COINS</option>
          </select>
          <input type="submit" value="START"></input>
          <br/><br/><br/>
          <textarea cols="40" rows="1" value={this.state.text}></textarea>
        </form>
        <p>1000점 달성시 승리</p>
      </div>
      
    );
  }
}


ReactDOM.render(
  <Rulet />,
  document.getElementById('rulet'));