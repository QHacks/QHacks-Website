import React from "react";

const ActionButton = (props) => {
  const roundedStyles = {
    borderRadius: "28px",
    border: `solid 2px ${props.foregroundColor}`,
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
  let commonStyles = {
    ...props.style,
    textTransform: "uppercase",
    backgroundColor: props.backgroundColor,
    color: props.foregroundColor,
    fontSize: "18px",
    ":hover": {
      transition: "0.5s ease",
      backgroundColor: props.foregroundColor,
      color: props.backgroundColor
    }
  };
  switch (props.type) {
  case "rounded":
    commonStyles = { ...commonStyles, ...roundedStyles };
    break;
  case "rect":
    commonStyles = { ...commonStyles, ...rectStyles };
    break;
  }
  return (
    <button
      css={{
        ...commonStyles
      }}
    >
      {props.children}
    </button>
  );
};

export default ActionButton;
