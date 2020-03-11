import React, { Component } from "react";
import Task from "./components/Task1";

function Hoc(HocComponent) {
  return class extends Component {
    render() {
      return (
        <div>
          <Task />
          let divHeight; window.setDivHeight = (height) => divHeight = height;
          return divHeight; console.log(divHeight)
        </div>
      );
    }
  };
}
export default Hoc;
