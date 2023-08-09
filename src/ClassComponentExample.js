import React from "react";
import ContextTest from "./Contexttest";

class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  render() {
    return (
      <>
        <h2>I am a Class Component!</h2>
        <div>state from class component : {this.state.year}</div>
        <ContextTest />
      </>
    );
  }
}

export default Car;
