import React, { createRef, useEffect } from "react";
import ActionButton from "./ActionButton";
import partnershipPackage from "../assets/partnershipPackage2021.pdf";

import lottie from "lottie-web";
import animationImage from "../assets/animations/mailbox.json";

const PartnerPackage = () => {
  let animationContainer = createRef();

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationImage
    });
    return () => animation.destroy(); // optional clean up for unmounting
  }, []);

  return (
    <div
      css={{
        textAlign: "center",
        padding: "80px 50px",
        position: "relative",
        "@media(max-width: 820px)": {
          padding: "60px 30px"
        },
        "@media(max-width: 460px)": {
          padding: "40px 20px"
        }
      }}
    >
      <div
        css={{
          margin: "0 90px",
          padding: "20px 0",
          borderRadius: "8px",
          boxShadow: "4px 9px 40px 2px rgba(7, 16, 75, 0.1)",
          border: "solid 1px #e8e8e8",
          "@media(max-width: 820px)": {
            margin: "0 70px"
          },
          "@media(max-width: 460px)": {
            margin: "0 10px",
            padding: "20px 20px"
          }
        }}
      >
        <p
          css={{
            color: "#000",
            paddingBottom: "24px",
            fontSize: "20px",
            fontWeight: "600",
            ">a": {
              color: "#c81c2e",
              textDecoration: "underline",
              ":hover": { textDecoration: "none" }
            },
            "@media(max-width: 460px)": {
              fontSize: "16px"
            }
          }}
        >
          Interested in partnering?
          <br />
          Contact us at{" "}
          <a
            data-cy="partners-email-prompt"
            href="mailto:partnership@qhacks.io"
            css={{
              fontSize: "20px",
              fontWeight: "bold",
              "@media(max-width: 460px)": {
                fontSize: "16px"
              }
            }}
          >
            partnership@qhacks.io
          </a>
        </p>
        <ActionButton
          backgroundColor="#ffffff"
          foregroundColor="#c81c2e"
          type="rounded"
          link={partnershipPackage}
        >
          Partnership Package
        </ActionButton>
      </div>
      <div
        className="mailbox"
        ref={animationContainer}
        css={{
          zIndex: "0",
          position: "absolute",
          width: "300px",
          top: "0px",
          right: "0px",
          "@media(max-width: 820px)": {
            width: "220px"
          },
          "@media(max-width: 460px)": {
            display: "none"
          }
        }}
      />
    </div>
  );
};

export default PartnerPackage;
