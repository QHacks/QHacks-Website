import React from "react";
import circuits from "../assets/img/circuits.png";
import SignUpForm from "./SignUpForm";

const MailingListSignup = (props) => (
  <div
    css={{
      width: "100%",
      color: "white",
      minHeight: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `#C12232 url(${circuits}) no-repeat center center`,
      backgroundSize: "cover",
      padding: "5%"
    }}
  >
    <div>
      <p
        css={{
          fontWeight: "bold",
          marginBottom: "28px",
          fontSize: "22px",
          lineHeight: "28px",
          textAlign: "center"
        }}
      >
        Sign up for our mailing list to receive important QHacks announcements!
      </p>
      <SignUpForm />
    </div>
  </div>
);

export default MailingListSignup;
