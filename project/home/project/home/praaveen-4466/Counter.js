import React, { Component } from "react";
import "./DisplayCss.css";

class Counter extends Component {
  state = { count: 0 };

  onIncreaseCounter = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  onDecreaseCounter = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div className="counter-container">
        <h1>My Application</h1>
        <h2>Counter : {this.state.count}</h2>
        <p>Click The Buttons to Increase or Decrease the Count</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={this.onIncreaseCounter} className="increase-button">
            {" "}
            Increase{" "}
          </button>
          <button onClick={this.onDecreaseCounter} className="decrease-button">
            Decrease
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
