import React, { Component } from "react";
import CharCard from "./components/CharCard";
import chars from "./chars.json";
import "./App.css";

class App extends Component {

  //setting this.state.chars to the chars json array
  state = {
    chars
  };

  removeChar = id => {
    // Filter this.state.chars for chars with an id not equal to the id being removed
    const chars = this.state.chars.filter(char => char.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ chars });
  };

  // Map over this.state.chars and render a CharCard component for each char object
  render() {
    return (
      <div>
       
        {this.state.chars.map(char => (
          <CharCard
            removeChar={this.removeChar}
            id={char.id}
            key={char.id}
            image={char.image}
         
          />
        ))}
        
     </div>
    );
  }
}

export default App;
