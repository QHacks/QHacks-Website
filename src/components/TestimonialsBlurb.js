import React from "react";
import leftArrow from "../assets/img/leftArrow.svg";
import rightArrow from "../assets/img/rightArrow.svg";

const arrowStyle = {
  border: "none",
  height: "20px",
  width: "40px"
};

const blurbStyle = {
  lineHeight: "1.6",
  fontSize: "20px"
};

const TestimonialsBlurb = (props) => (
  <div
    style={{
      width: "50%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      paddingLeft: "5%",
      display: "flex",
      alignItems: "center",
      justifyContent: "right"
    }}
  >
    <div style={{ width: "455px", marginRight: "64px" }}>
      <h1 style={{ marginBottom: "30px" }}>Hacker Testimonials</h1>
      <p style={{ ...blurbStyle }}>
        See what past hackers thought about the event!
      </p>
      <p style={{ ...blurbStyle }}>
        Lorem ipsum dolor sit amet, consectetur adip.
      </p>
      <div style={{ marginTop: "65px" }}>
        <input
          onClick={() => props.prevTestimonial()}
          style={{
            ...arrowStyle,
            marginRight: "64px",
            opacity: props.firstTestimonial ? 0.2 : 1
          }}
          type="image"
          src={leftArrow}
        />
        <input
          onClick={() => props.nextTestimonial()}
          style={{
            ...arrowStyle,
            opacity: props.lastTestimonial ? 0.2 : 1
          }}
          type="image"
          src={rightArrow}
        />
      </div>
    </div>
  </div>
);

export default TestimonialsBlurb;
