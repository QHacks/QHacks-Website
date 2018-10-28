import React from "react";
import SignUpForm from "./SignUpForm";
import ContentWrapper from "./ContentWrapper";
import circuits from "../assets/img/circuitsRed.png";

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
    <ContentWrapper>
      <div>
        <p
          data-cy="mailing-list-cta"
          css={{
            fontWeight: 700,
            marginBottom: "28px",
            fontSize: "22px",
            lineHeight: "28px",
            textAlign: "center"
          }}
        >
          Sign up for our mailing list to receive important QHacks announcements!
        </p>
        <SignUpForm
          dataCyInput="mailing-list-input"
          dataCyButton="mailing-list-button"
          hoverBackgroundColor="#00205b"
          center={true}
        />
      </div>
    </ContentWrapper>
  </div>

);

export default MailingListSignup;
