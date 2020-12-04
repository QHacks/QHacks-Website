import React from "react";
import ScrollSpy from "react-scrollspy";

import colored from "../assets/img/logo/qhacksCrown-colored.svg";

const Menu = (props) => {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "min-content auto",
        overflow: "visible",
        height: "84px",
        "@media(max-width:820px)": {
          display: "none"
        } 
      }}
    >
      <a
        href="/#"
        css={{
          transition: "0.5s",
          "@media(min-width:820px)": {
            display: props.standaloneVersion
              ? "inline-block"
              : props.imgCss
              ? "inline-block"
              : "none"
          }
        }}
      >
        <img
          css={{
            paddingTop: "20px",
            paddingBottom: "20px",
            "@media(max-width:820px)": {
              display: "none"
            }
          }}
          src={colored}
          alt="QHacks Crown"
        />
      </a>
      <a
        id="mlh-trust-badge"
        href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=gray"
        target="_blank"
        rel="external noopener"
        css={{
          display: "none",
          "@media(min-width:820px)": {
            display: props.standaloneVersion
              ? "none"
              : props.imgCss
              ? "none"
              : "inline-block"
          },
          transition: "0.5s"
        }}
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-gray.svg"
          alt="Major League Hacking 2021 Hackathon Season"
          css={{
            height: "150px"
          }}
        ></img>
      </a>
      <div
        align="right"
        css={{
          paddingTop: "32px",
          paddingBottom: "32px",
          height: "84px",
          display: "grid",
          transition: "1s",
          marginLeft: "auto",
          "@media(max-width: 820px)": {
            display: "none"
          },
          " li": {
            listStyleType: "none"
          }
        }}
      >
        <ScrollSpy
          css={{
            display: "grid",
            gridColumnGap: "40px",
            gridTemplateColumns: props.menuItems
              .map(() => "min-content ")
              .reduce((a, b) => a + b)
          }}
          offset={-1}
          items={props.menuItems}
          currentClassName="is-current"
        >
          {props.menuItems.map((label) => (
            <li
              key={label}
              css={{
                ":hover": {
                  " a": {
                    color: "#000000"
                  },
                  ">div": {
                    width: "100%",
                    height: "2px"
                  }
                }
              }}
            >
              <a
                css={{
                  color: "#000000",
                  lineHeight: "1.43",
                  textAlign: "center",
                  paddingLeft: "2px",
                  paddingRight: "2px",
                  textTransform: "uppercase"
                }}
                href={`/#${label}`}
              >
                {label}
              </a>
              <div
                css={{
                  width: "100%",
                  height: "2px",
                  transition: "0.5s",
                  marginLeft: "auto",
                  marginRight: "auto",
                  backgroundColor: "#000000",
                  width: "0px"
                }}
              />
            </li>
          ))}
        </ScrollSpy>
      </div>
    </div>
  );
};

export default Menu;
