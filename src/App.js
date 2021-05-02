import React from "react";
import "./styles.css";
import Input from "./components/Input";
import Label from "./components/Label";
import Select from "./components/Select";
import ButtonDiv from "./components/ButtonDiv";
function App() {
  return (
    <div className="App">
      <Label Id="heading" Content="Calculator" /> <br />
      <br/>
      <div id="operation">
        <Label Content="Select Operation :" />
        <br />
        <br />
        <Select />
        <br />
        <br />
      </div>
      <div id="numbers">
        <Label For="num1" Content="Enter First Number :" Id="fnum" />
        <br />
        <br />
        <Input Id="num1" />
        <br />
        <br />
        <Label For="num2" Content="Enter Second Number :" Id="snum" />
        <br />
        <br />
        <Input Id="num2" />
        <br />
        <br />
        <ButtonDiv />
        <br />
        <hr />
        <Label Content="Answer = "/>
        <br />
        <br />
        <Label Id="answer" />
      </div>
    </div>
  );
}
export default App;
