import React, { Component } from "react";

const ActionButton = (props) => (
  <button
    css={{
      borderRadius: "28px",
      backgroundColor: props.backgroundColor,
      border: `solid 2px ${props.foregroundColor}`,
      color: props.foregroundColor,
      fontSize: "18px",
      ":hover": {
        transition: "0.5s",
        backgroundColor: props.foregroundColor,
        color: props.backgroundColor
      },
      ...props.style
    }}
  >
    {props.lower ? props.text : props.text.toUpperCase()}
  </button>
);

export default ActionButton;
