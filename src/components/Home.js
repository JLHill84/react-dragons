import React, { Component } from "react";
import { DragonCard } from "./DragonCard";

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // Note how style attributes are now passed as object instead of a string!!!
    return (
      <div
        style={{
          float: "left",
          width: "40%",
          padding: "5%",
          backgroundColor: "#00ffd8"
        }}
      >
        <h1>Home</h1>
        {console.log(this.props.dragons)}
        {this.props.dragons.map(dragon => {
          return <DragonCard
            name={dragon.name}
            desc={dragon.description}
            image={dragon.image}
            atWar={dragon.atWar}
          />;
        })}
      </div>
    );
  }
}

export default Home;
