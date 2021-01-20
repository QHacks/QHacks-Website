import React from "react";
import moment from "moment";

import ContentWrapper from "./ContentWrapper";
import FooterGraphic from "../components/FooterGraphic";

import mail from "../assets/img/icons/socialMail.svg";
import logo from "../assets/img/logo/qhacksCrown-white.svg";
import facebook from "../assets/img/icons/socialFacebook.svg";
import instagram from "../assets/img/icons/socialInstagram.svg";
import wordmark from "../assets/img/logo/qhacksWordmark-white.svg";
import linkedin from "../assets/img/icons/socialLlnkedin.svg"

const [smallScreens] = ["@media(max-width: 1100px)"];

const navigateLinks = [
  {
    label: "QHacks 2020",
    url: "https://2020.qhacks.io/",
    dataCy: "footer-2020-link"
  },
  {
    label: "Local Hack Day",
    url: "https://localhackday.mlh.io/",
    dataCy: "footer-lhd-link"
  },
  {
    label: "QHacks Blog",
    url: "https://medium.com/@qhacks",
    dataCy: "footer-blog-link"
  },
  // {
  //   label: "QHacks Dashboard",
  //   url: "https://app.qhacks.io",
  //   dataCy: "footer-dashboard-link"
  // },
  {
    label: "MLH Code of Conduct",
    url: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf",
    dataCy: "footer-mlh-code-of-conduct-link"
  }
];

const socialLinks = [
  {
    icon: mail,
    url: "mailto:hello@qhacks.io",
    label: "hello@qhacks.io",
    dataCy: "footer-email-link"
  },
  {
    icon: facebook,
    url: "https://fb.com/qhacks",
    label: "Like us on Facebook",
    dataCy: "footer-facebook-link"
  },
  {
    icon: linkedin,
    url: "https://www.linkedin.com/company/qhacks/",
    label: "Follow us on LinkedIn",
    dataCy: "footer-linkedin-link"
  },
  {
    icon: instagram,
    url: "https://www.instagram.com/qhacks21/",
    label: "Follow us on Instagram",
    dataCy: "footer-instagram-link"
  }
];

const finePrint = {
  color: "#bebebe",
  fontSize: "12px"
};

const Footer = () => (
  <footer>
    <FooterGraphic />
    <div
      css={{
        backgroundColor: "#070b34",
        color: "#ffffff"
      }}
    >
      <ContentWrapper>
        <div
          css={{
            paddingTop: "40px",
            display: "block",
            position: "relative",
            textAlign: "center",
            margin: "auto 0"
          }}
        >
          <img
            height="50px"
            src={logo}
            css={{
              marginBottom: "5px",
              paddingRight: "13px",
              [smallScreens]: { height: "35px" }
            }}
            alt="QHacks Crown"
          />
          <img
            height="50px"
            src={wordmark}
            css={{
              display: "inline-block",
              marginLeft: "0px",
              [smallScreens]: { height: "35px" }
            }}
            alt="QHacks Wordmark"
          />
          <p
            css={{
              fontSize: "14px",
              lineHeight: "20px",
              paddingTop: "30px",
              paddingRight: "220px",
              paddingLeft: "220px",
              paddingBottom: "20px",
              lineHeight: "1.67",
              [smallScreens]: {
                paddingRight: "0",
                paddingLeft: "0px",
                fontSize: "12px"
              }
            }}
          >
            QHacks is Queen’s University’s annual hackathon! QHacks was founded
            in 2016 with a mission to advocate and incubate the tech community
            at Queen’s University and throughout Canada. Going into our sixth
            year, we have been aggressively growing to become one of the biggest
            and most exciting hackathons in North America.
          </p>
          <div
            css={{
              marginLeft: "275px",
              marginRight: "auto",
              float: "left",
              [smallScreens]: {
                float: "none",
                marginLeft: "0px"
              }
            }}
          >
            <p
              css={{
                fontSize: "25px",
                lineHeight: "20px",
                paddingTop: "10px",
                lineHeight: "1.67",
                textTransform: "uppercase",
                fontWeight: "bold"
              }}
            >
              Navigate
            </p>
            <ul
              css={{
                paddingTop: "15px",
                listStyleType: "none",
                ">li": { paddingBottom: "23px" },
                " a": {
                  color: "inherit",
                  fontWeight: 600,
                  textDecoration: "none",
                  ":hover": {
                    color: "#ed253a"
                  }
                }
              }}
            >
              {navigateLinks.map(({ label, url, dataCy }) => (
                <li key={url}>
                  <a href={url} data-cy={dataCy}>{`${label} ▸`}</a>
                </li>
              ))}
            </ul>
          </div>
          <div
            css={{
              marginLeft: "auto",
              marginRight: "275px",
              float: "right",
              [smallScreens]: {
                float: "none",
                marginRight: "0px"
              }
            }}
          >
            <p
              css={{
                fontSize: "25px",
                lineHeight: "20px",
                paddingTop: "10px",
                lineHeight: "1.67",
                textTransform: "uppercase",
                fontWeight: "bold",
                [smallScreens]: {
                  paddingBottom: "25px"
                }
              }}
            >
              Get in Touch
            </p>
            <div
              css={{
                paddingTop: "15px",
                listStyleType: "none",
                ">div": { paddingBottom: "18px" },
                " a": {
                  textDecoration: "none",
                  textAlign: "left",
                  color: "inherit",
                  fontWeight: "bold"
                },
                display: "grid",
                [smallScreens]: {
                  marginLeft: "auto",
                  marginRight: "auto",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  maxWidth: "196px",
                  paddingTop: "0px",
                  paddingBottom: "60px"
                }
              }}
            >
              {socialLinks.map(({ icon, label, url, dataCy }) => (
                <div
                  key={url}
                  css={{
                    display: "grid",
                    gridTemplateColumns: "min-content auto",
                    ":hover": {
                      " a": {
                        color: "#ed253a",
                        ">div": {
                          backgroundColor: "#ed253a"
                        }
                      }
                    },
                    [smallScreens]: {
                      display: "block",
                      width: "40px",
                      height: "40px",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }
                  }}
                >
                  <a aria-label={label} href={url}>
                    <div
                      css={{
                        backgroundColor: "#e3e3e3",
                        mask: `url(${icon}) no-repeat center center`,
                        maskSize: "100% 100%",
                        width: "28px",
                        height: "28px",
                        marginRight: "16px",
                        marginTop: "-5px",
                        ":hover": {
                          backgroundColor: "#ed253a"
                        },
                        [smallScreens]: {
                          width: "40px",
                          height: "40px"
                        }
                      }}
                    />
                  </a>
                  <a
                    css={{ [smallScreens]: { display: "none" } }}
                    href={url}
                    data-cy={dataCy}
                  >
                    {label}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <p
            data-cy="footer-address"
            css={{
              ...finePrint,
              marginBottom: "5px",
              clear: "both",
              paddingTop: "40px"
            }}
          >
            Queen&#39;s University | 99 University Ave, Kingston, ON
          </p>
          <a
            data-cy="footer-dev-plug"
            css={{
              ...finePrint,
              position: "relative",
              fontWeight: "400"
            }}
            href="https://github.com/qhacks/qhacks-website/tree/dev-2020"
            target="_blank"
            rel="external noopener"
          >
            {"< />"} with ♡ by Queen&#39;s students
          </a>
          <p
            data-cy="footer-copyright-notice"
            css={{ ...finePrint, marginTop: "6px", paddingBottom: "32px" }}
          >
            Copyright © {moment().year()} QHacks
          </p>
        </div>
      </ContentWrapper>
    </div>
  </footer>
);

export default Footer;
