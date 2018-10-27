import React from "react";

const ActionButton = (props) => {
  const roundedStyles = {
    borderRadius: "28px",
    border: `solid 2px ${props.foregroundColor}`,
    paddingLeft: "55px",
    paddingRight: "55px"
  };

  const rectStyles = {
    borderRadius: "4px",
    border: "none",
    paddingLeft: "25px",
    paddingRight: "25px"
  };

  let commonStyles = {
    ...props.style,
    height: "48px",
    width: props.width,
    textTransform: "uppercase",
    backgroundColor: props.backgroundColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: props.foregroundColor,
    fontSize: "18px",
    fontWeight: 700,
    ":hover:not(:disabled)": {
      transition: "0.5s ease",
      backgroundColor: props.hoverBackgroundColor || props.foregroundColor,
      color: props.backgroundColor
    }
  };

  switch (props.type) {
    case "rounded":
      commonStyles = { ...roundedStyles, ...commonStyles };
      break;
    case "rect":
      commonStyles = { ...rectStyles, ...commonStyles };
      break;
  }

  return (
    <button
      css={{
        ...commonStyles
      }}
      data-cy={props.dataCy}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ActionButton;
