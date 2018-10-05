import React, { Component } from "react";

class ActionButton extends React.Component {
  render() {
    const roundedStyles = {
      borderRadius: "28px",
      border: `solid 2px ${this.props.foregroundColor}`,
      paddingLeft: "55px",
      paddingRight: "55px",
      height: "48px"
    };
    const rectStyles = {
      borderRadius: "4px",
      border: "none",
      paddingLeft: "25px",
      paddingRight: "25px",
      height: "48px"
    };
    let styles = {
      ...this.props.style,
      textTransform: "uppercase",
      backgroundColor: this.props.backgroundColor,
      color: this.props.foregroundColor,
      fontSize: "18px",
      ":hover": {
        transition: "0.5s ease",
        backgroundColor: this.props.foregroundColor,
        color: this.props.backgroundColor
      }
    };
    switch (this.props.type) {
    case "rounded":
      styles = { ...styles, ...roundedStyles };
      break;
    case "rect":
      styles = { ...styles, ...rectStyles };
      break;
    }
    return (
      <button
        css={{
          ...styles
        }}
      >
        {this.props.children}
      </button>
    );
  }
}
export default ActionButton;
