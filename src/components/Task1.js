import React, { Component } from "react";

class Task extends Component {
  constructor() {
    super();
    this.state = {
      width: 800,
      height: 182,
      heightSet: "auto"
    };
  }

 
    handleKeyPress = event => {
    let oldHeightSet = this.state.heightSet;
    let newHeightSet = "";
    if (oldHeightSet !== "auto") {
      newHeightSet = this.state.heightSet;
      newHeightSet = newHeightSet + event.key;
    } else {
      newHeightSet = event.key;
    }
    this.setState({ heightSet: `${newHeightSet}` });
  };

  onKeyDown = event => {
    if (event.keyCode === 8) {
      let oldHeightSet = this.state.heightSet;
      var newHeightSet = oldHeightSet.substring(0, oldHeightSet.length - 1);
      this.setState({ heightSet: `${newHeightSet}` });
    }
  };

  updateDimensions() {
    if (window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width = window.innerWidth - 100;
      let update_height = Math.round(update_width / 4.4);
      this.setState({ width: update_width, height: update_height });
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }


  Let divHeight;
  window.setDivHeight = (height) => divHeight = height;

  render() {
    return (
      <div
        style={{
          border: "1px solid #000000",
          height: `${this.state.heightSet}px`
        }}
      >
        <input
          type="number"
          pattern="[0-9]{0,5}"
          placeholder="enter height"
          onKeyPress={this.handleKeyPress}
          onKeyDown={this.onKeyDown}
        ></input>

        <span>Browser With: - {this.state.width}</span>
      </div>
    );
  }
}
export default Task;
