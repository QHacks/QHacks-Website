import React from "react";

const Menu = (props) => (
  <div
    align="right"
    css={{
      marginRight: "80px",
      marginTop: "32px",
      display: "grid",
      gridTemplateColumns: "1fr auto auto auto auto auto",
      gridColumnGap: "50px",
      "@media(max-width: 820px)": {
        display: "none"
      }
    }}
  >
    {props.breadCrumbs.map((label, key) => (
      <a key={key}>{label}</a>
    ))}
  </div>
);

export default Menu;
