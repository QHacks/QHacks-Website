import React from "react";
import quotes from "../assets/img/quotes.svg";

const TestimonialCard = (props) => (
  <div
    style={{
      display: "inline-block",
      height: "375px",
      whiteSpace: "normal",
      borderRadius: "8px",
      boxShadow: "4px 9px 40px 2px rgba(7, 16, 75, 0.1)",
      border: "solid 1px #e8e8e8",
      padding: "48px",
      margin: "45px 23px",
      flex: "0 0 530px",
      backgroundColor: "white",
      zIndex: 2,
      position: "relative",
      opacity: !props.index ? 1 : 0.6,
      transition: !props.index
        ? "opacity 300ms ease 0ms"
        : "opacity 300ms ease 200ms"
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "20px"
      }}
    >
      <img
        src={props.item.image}
        style={{ borderRadius: "50%", height: "72px", width: "72px" }}
      />
      <div style={{ display: "inline-block", marginLeft: "24px" }}>
        <strong
          style={{
            marginBottom: "8px",
            fontSize: "20px",
            display: "block",
            fontColor: "black"
          }}
        >
          {props.item.name}
        </strong>
        <strong>
          <span style={{ color: "#838383" }}>Project:</span>{" "}
          <span style={{ color: "#00205b" }}>{props.item.project}</span>
        </strong>
      </div>
    </div>
    <p style={{ lineHeight: "32px" }}>{props.item.text}</p>
    <img
      src={quotes}
      style={{
        position: "absolute",
        bottom: 24,
        right: 40
      }}
    />
  </div>
);

export default TestimonialCard;
