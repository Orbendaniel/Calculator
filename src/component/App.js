import React from "react" ;
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./App.css";

export default class App extends React.Component { //creating an App class and using export default to export the class 
    state = {
        total: null,
        next: null,
        operation: null,   
};

render() {
    return (
        <div className ="component-app"> 
            <h1>
                Calculator
            </h1>
            <Display value={this.state.next || this.state.total || "0" } />
            <ButtonPanel/>
        </div>
    );
  }   
}