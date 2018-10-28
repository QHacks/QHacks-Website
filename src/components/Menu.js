import React from "react";
import ScrollSpy from "react-scrollspy";
import colored from "../assets/img/colored.svg";

const Menu = (props) => {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "min-content auto"
      }}
    >
      <img
        css={{
          paddingTop: "20px",
          paddingBottom: "20px",
          transition: "0.5s",
          "@media(min-width:820px)": {
            opacity: props.imgCss ? "1" : "0"
          }
        }}
        src={colored}
      />
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
            gridColumnGap: "50px",
            gridTemplateColumns: props.menuItems
              .map(() => "min-content ")
              .reduce((a, b) => a + b)
          }}
          items={props.menuItems}
          currentClassName="is-current"
        >
          {props.menuItems.map((label) => (
            <li
              key={label}
              css={{
                ":hover": {
                  " a": {
                    color: "#00205b"
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
                  lineHeight: "1.43",
                  textAlign: "center",
                  paddingLeft: "2px",
                  paddingRight: "2px",
                  textTransform: "uppercase"
                }}
                href={`#${label}`}
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
                  backgroundColor: "#00205b",
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
