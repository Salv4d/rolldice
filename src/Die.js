import { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    diceFace: "one",
  };

  render() {
    let { diceFace } = this.props;

    return (
      <div className="Die">
        <i className={`fas fa-dice-${diceFace}`}></i>
      </div>
    );
  }
}

export default Die;
