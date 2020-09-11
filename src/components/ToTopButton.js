import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";

import upArrow from "../assets/img/icons/uparrow.svg";

const ToTopButton = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 1000) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);

  if (!visible) {
    return false;
  }

  return (
    <a
      className="back-to-top-btn"
      href="/#"
      css={{
        zIndex: "3",
        position: "fixed",
        bottom: "20px",
        right: "50px",
        "@media(max-width:820px)": {
          right: "20px"
        }
      }}
    >
      <button
        css={{
          border: "3px solid #fff",
          borderRadius: "50%",
          backgroundColor: "#c8102e",
          height: "45px",
          padding: "0 13px",
          transition: "0.5s",
          ":hover": {
            backgroundColor: "#cd5c5c"
            // border: "3px solid #cd5c5c"
          }
        }}
      >
        <img src={upArrow} css={{ width: "15px" }} />
      </button>
    </a>
  );
};

export default ToTopButton;
