import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Task from "./components/Task1";
import Hoc from "./components/HOC";

function App() {
  return (
    <div className="App">
      {/* <Task /> */}
      <Hoc />
    </div>
  );
}
App = Hoc(App);    //calling heigher order function

export default App;
