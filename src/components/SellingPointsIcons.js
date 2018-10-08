import React from "react";

const SellingPointsIcons = (props) => (
  <div
    css={{
      display: "grid",
      gridTemplateColumns: "1fr ".repeat(props.list.length),
      width: "calc(100% - 200px)",
      margin: "0 auto",
      minWidth: "300px"
    }}
  >
    {props.list.map((item) => (
      <div key={item.text}>
        <img src={item.icon} />
        <div
          css={{
            fontWeight: "bold",
            padding: "6px 0"
          }}
        >
          {item.number}+
        </div>
        <div>{item.text}</div>
      </div>
    ))}
  </div>
);

export default SellingPointsIcons;
