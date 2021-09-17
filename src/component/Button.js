import React from "react";
import PropTypes from 'prop-types';
import "./Button.css";

export default class Button extends React.Component {
    static propTypes = { //creating static PropTypes
        name: PropTypes.string,
        orange: PropTypes.bool,
        wide: PropTypes.bool,
};

render() {
    const className = [
        "component-button",
        this.props.orange ? "orange" : "",
        this.props.wide ? "wide" : "",
    ];

return (   //.join-converts all elements of an array into a string .trim- removes whitespace from both sides of string
    <div className = {className.join(" ").trim()}> 
    </div>
    );
  }
}