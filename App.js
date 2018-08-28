import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import QuizComponent from './components/QuizScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
      correct: []
    }
  }

  componentDidMount() {
    axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then(response => {
        try {
          this.setState({
            data: response.data.results
          })
        }
        catch (error) {
          console.log(error);
        }
      })
  }

  onBeginTest = () => {
    this.setState({
      view: true
    })
  }

  onClicked = () => {
    this.setState({
      view: false
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Trivia Challenge
        </header>
        {!this.state.view ?
          <div className="App-intro">
            <span className="Heading">
              <h2>Welcome to the Trivia Challenge!</h2>
            </span>
            <span className="Middle">
              <p>You will be presented with 10 True or False questions</p>
            </span>
            <span className="Middle">
              <p>Can you score 100%?</p>
            </span>
            <span onClick={this.onBeginTest} className="Bottom">
              BEGIN
        </span>
          </div>
          :
          <div className="App-intro">
            <QuizComponent
              data={this.state.data}
              clicked={this.onClicked} />
          </div>
        }
      </div>
    );
  }
}

export default App;
