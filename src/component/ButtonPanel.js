import React from "react";
import "./ButtonPanel.css";
import Button from "./Button";

export default class ButtonPanel extends React.Component {

render() {
    return(
        <div className= "component-button-panel">
            <div>
                <Button name = "AC"></Button>
                <Button name = "+/-"></Button>
                <Button name = "%"></Button>
                <Button name = "÷" orange />
            </div>
            <div>
                <Button name = "7"></Button>
                <Button name = "8"></Button>
                <Button name = "9"></Button>
                <Button name = "x" orange />
            </div>
            <div>
                <Button name = "4"></Button>
                <Button name = "5"></Button>
                <Button name = "6"></Button>
                <Button name = "-" orange />
            </div>
            <div>
                <Button name = "1"></Button>
                <Button name = "2"></Button>
                <Button name = "3"></Button>
                <Button name = "+" orange />
            </div>
            <div>
                <Button name = "0" wide />
                <Button name = "."></Button>
                <Button name = "=" orange />
            </div>
        </div>
    );
  }
}
