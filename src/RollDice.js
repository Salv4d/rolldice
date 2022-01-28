import { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    dieFaces: ["one", "two", "three", "four", "five", "six"],
  };

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
        <button className="RollDice-btn" onClick={this.roll}>
          Roll Dice!
        </button>
      </div>
    );
  }

  pickFace() {
    let rand = Math.floor(Math.random() * 6);
    let { dieFaces } = this.props;
    return dieFaces[rand];
  }

  roll() {
    this.setState({ dieOneFace: this.pickFace(), dieTwoFace: this.pickFace() });
  }
}

export default RollDice;
