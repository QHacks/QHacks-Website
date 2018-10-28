import React from "react";

export default (props) => (
  <div
    css={{
      maxWidth: "1240px",
      minWidth: "320px",
      marginLeft: "auto",
      marginRight: "auto",
      height: "100%"
    }}
  >
    {props.children}
  </div>
);
