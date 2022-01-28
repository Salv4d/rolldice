import { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    dieFaces: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);
    this.state = {
      dieOneFace: "one",
      dieTwoFace: "one",
      animateDie: "",
      btnText: "Roll Dice!",
      btnDisabled: false,
    };
    this.roll = this.roll.bind(this);
  }

  render() {
    let { dieOneFace, dieTwoFace, animateDie, btnText, btnDisabled } =
      this.state;
    return (
      <div className="RollDice">
        <div className="RollDice-Dice">
          <Die dieFace={dieOneFace} animation={animateDie} />
          <Die dieFace={dieTwoFace} animation={animateDie} />
        </div>
        <button
          className="RollDice-btn"
          onClick={this.roll}
          disabled={btnDisabled}
        >
          {btnText}
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
    this.setState({
      dieOneFace: this.pickFace(),
      dieTwoFace: this.pickFace(),
      animateDie: "rotate-animation",
      btnText: "Rolling...",
      btnDisabled: true,
    });
    setTimeout(
      () =>
        this.setState({
          animateDie: "",
          btnText: "Roll Dice!",
          btnDisabled: false,
        }),
      500
    );
  }
}

export default RollDice;
