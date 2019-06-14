import React, { Component } from "react";

export default class Clicker extends Component {
  state = {
    number: 1,
  };

  handleClick = () => {
    this.setState({ number: Math.floor(Math.random() * 10) + 1 });
  };

  render() {
    return (
      <div>
        <h1>Number is {this.state.number}</h1>
        {this.state.number !== 7 ? (
          <button onClick={this.handleClick}>Random Number</button>
        ) : (
          <h2>YOU WIN!</h2>
        )}
      </div>
    );
  }
}
