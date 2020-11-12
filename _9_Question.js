
import React, { Component } from 'react';
import './Space.css';

class Questions extends Component {
  state = { count: 0, voteYes: '' }
  
  clickYes = () => {
    // handle button click

    this.setState({voteYes:'y'})
  };
  clickNo = () => {
    // handle button click
    this.setState({voteYes:'n'})
  };
  render() {
    let answer;
    const arrYes = ['I know, tell me about it', 
                    'Eoghan Walsh endorses your vote', 
                    'Eoghan Walsh is the man for the job',
                    "Down with Shane. Not a minute more",
                    "When Eoghan's in charge. We'll all be happy",
                    "Shane has done a great job but Brexit and Trump did happen under his watch. "
                   ];
    const arrNo = ["Why not think for yourself", 
                    "You'll live to regret that", 
                    "Congratulations on voting for yourself", 
                    "Ok. Btw. Shane can't see how you voted",
                  "Thank you. Your vote has been registered as ironic",
                  "Shane has done a great job despite Brexit and Trump happening under his watch."]
     

    if (this.state.voteYes=='') {
      answer = null;
    } else if (this.state.voteYes == 'y') {
      answer = arrYes[Math.floor(Math.random() * arrYes.length)];
      // 'I like the way you think';
    } else {
      answer = arrNo[Math.floor(Math.random() * arrNo.length)];

    }

    return (
      <div>
      <h1>Should Shane be group admin?</h1>
      <br/>
      <br/>
      {/* <form> */}
      <button onClick={this.clickYes} className="button" class="ui big blue button"  >No way!!!!     </button>
      <button onClick={this.clickNo} className="button" class="ui big green button">Shane must stay!!!</button>
      
      {/* </form> */}
      <br/>
      
      <h3>{answer}</h3>
      </div>
    );
  }
}

export default Questions;