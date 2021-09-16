
import react from "react" ;
import './App.css';

export default class App extends react.Component {
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
        </div>
    );
  }   
}