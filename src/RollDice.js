import { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { dieOneFace: "one", dieTwoFace: "one" };
    this.roll = this.roll.bind(this);
  }

  render() {
    let { dieOneFace, dieTwoFace } = this.state;

    return (
      <div className="RollDice">
        <div className="RollDice-Dice">
          <Die dieFace={dieOneFace} />
          <Die dieFace={dieTwoFace} />
        </div>
        <button onClick={this.roll}>Roll</button>
      </div>
    );
  }

  pickFace() {
    let rand = Math.floor(Math.random() * 6);
    let dieFaces = ["one", "two", "three", "four", "five", "six"];
    return dieFaces[rand];
  }

  roll() {
    this.setState({ dieOneFace: this.pickFace(), dieTwoFace: this.pickFace() });
  }
}

export default RollDice;
