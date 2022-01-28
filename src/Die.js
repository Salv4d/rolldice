import { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    dieFace: "one",
  };

  render() {
    let { dieFace, animation } = this.props;

    return (
      <div className={`Die ${animation}`}>
        <i className={`fas fa-dice-${dieFace}`}></i>
      </div>
    );
  }
}

export default Die;
