import React, { Component } from "react";
import War from "./War";
import Home from "./Home";
import { DragonCard } from "./DragonCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dragons: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/dragons")
      .then(res => res.json())
      .then(res =>
        this.setState({
          dragons: res
        })
      );
  };

  render() {
    // console.log(this.state.dragons);
    return (
      <div>
        <Home dragons={this.state.dragons} />
        <War dragons={this.state.dragons} />
      </div>
    );
  }
}

export default App;
