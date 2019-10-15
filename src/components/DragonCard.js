import React, { Component } from "react";

export class DragonCard extends Component {
  render() {
    return (
      <div onClick={this.props.handleClick}>
        <img src={this.props.image} alt='' width='120px'/>
        <h2>{this.props.name}</h2>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}
