import { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    face: "one",
  };

  render() {
    let { face, animation } = this.props;

    return (
      <div className={`Die ${animation}`}>
        <i className={`fas fa-dice-${face}`}></i>
      </div>
    );
  }
}

export default Die;
