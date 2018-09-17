import React, { Component } from "react";
import CharCard from "./components/CharCard";
import chars from "./chars.json";
import "./App.css";

class App extends Component {

  //setting this.state.chars to the chars json array
  state = {
    chars,
    clickedChars: [],
    score: 0,
    topScore: 0
  };

  clickChar = id => {
    console.log("----");

    const match = this.state.clickedChars.filter(char => char === id);
    console.log("Match: " + match);

    if (match.length === 0 || this.state.clickedChars.length === 0) {
      console.log("(inside no-match)");
      var newScore = this.state.score + 1;
      this.setState({ score: newScore });
      this.checkScore();

      // Filter this.state.chars for chars with an id equal to the id clicked
      const char = this.state.chars.filter(char => char.id === id);
      this.state.clickedChars.push(char[0].id);
      console.log("Clicked chars: " + this.state.clickedChars);
      var shuffle = require('shuffle-array');
      shuffle(this.state.chars);
      this.setState(chars);
    }

    else if (match.length > 0) {
      this.setState({ score: 0 });

      this.setState({ clickedChars: [] })
    }

    console.log("Score: " + this.state.score);
  };

  checkScore = () => {
    if (this.state.score >= this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 })
    }
  }

  // Map over this.state.chars and render a CharCard component for each char object
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Memory Game</h1>
            <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>
          </div>
        </div>
        <div className="container" id = "mainSection">
          <div id="scoreCard">
            Score: {this.state.score} | Top Score: {this.state.topScore}
          </div>

          {this.state.chars.map(char => (
            <CharCard
              clickChar={this.clickChar}
              id={char.id}
              key={char.id}
              image={char.image}

            />
          ))}

        </div>
      </div>
    );
  }
}

export default App;
