import React from "react";
import ContentWrapper from "./ContentWrapper";

const questionsAndAnswers = [
  {
    question: "Who can attend QHacks?",
    answer:
      "Any college or university student at any skill level! All you need is a passion for design/data/tech, and a willingness to learn! We welcome applicants from all fields of study."
  },
  {
    question: "What if I don’t have a team?",
    answer:
      "Not to worry! There are many others in the same shoes. We'll be hosting team formation sessions prior to the hackathon that will get you up and running in no time!"
  },
  {
    question: "Where is QHacks hosted?",
    answer:
      "QHacks will be taking place at Queen's University, in Kingston, Ontario. QHacks will be run in a number of buildings on Queen's campus including Goodwin Hall, Walter Light Hall, Beamish-Munro Hall, Biosciences Complex, and Carruthers Hall. Get lost? We'll have maps for you and volunteers all over campus to guide the way."
  },
  {
    question: "What if I’m new to programming?",
    answer:
      "That's okay! A hackathon is a great place to get some experience. There will be tutorials, interesting workshops, and skilled mentors to answer any questions and help you reach your potential."
  },
  {
    question: "How much does QHacks cost to attend?",
    answer: "Absolutely nothing! Not a dime! Crazy eh?"
  },
  {
    question: "What can I create?",
    answer:
      "What CAN'T you create? Whether it's a new mobile app, a snazzy new website, or a hardware hack you've been dreaming about, you can create it at QHacks!"
  },
  {
    question: "What if I’m not from Kingston?",
    answer:
      "QHacks will be sending buses to Montreal, Ottawa, Toronto and Waterloo. If those don't apply to you, we'll be offering travel reimbursements on a case by case basis."
  },
  {
    question: "What should I bring?",
    answer:
      "Bring whatever helps you hack! If you have a specific hardware you want to work with, feel free to bring it. MLH will also be providing a hardware lab with a wide range of items. Some important items to bring include a valid form of student ID, laptop and charger, deodorant (arguably mandatory) and maybe a sleeping bag and change of clothes."
  },
  {
    question: "What if I don’t have an idea?",
    answer:
      "After you've accepted your offer to QHacks, join our QHacks Participant Slack where you can discuss ideas for projects or join a team that already has an idea. Stay tuned for our list of company APIs that can be seamlessly adapted to suit and inspire your hack!"
  },
  {
    question: "How will my project be judged?",
    answer:
      "Industry experts will be coming to QHacks to view your projects. Show them your demo, answer their intriguing questions, and compete for prizes!"
  }
];

const linkCss = {
  textDecoration: "underline",
  color: "#c81c2e",
  fontWeight: "400"
};

const FAQs = () => (
  <section id="faq" css={{ backgroundColor: "#ffffff" }}>
    <ContentWrapper>
      <div
        css={{
          padding: "110px 0px 114px 0px",
          // screen sizes larger smaller than 780px
          "@media(max-width: 780px)": {
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "64px"
          }
        }}
      >
        <h1>Frequently Asked Questions</h1>
        <div
          css={{
            paddingTop: "36px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            "@media(max-width: 1190px)": {
              display: "block"
            }
          }}
        >
          {questionsAndAnswers.map(({ question, answer }) => (
            <div
              key={question}
              css={{
                padding: "0px 64px 40px 0px",
                "@media(max-width: 780px)": {
                  paddingRight: "24px"
                }
              }}
            >
              <h2
                css={{
                  paddingBottom: "10px",
                  fontWeight: "500"
                }}
              >
                {question}
              </h2>
              <p
                css={{ fontSize: "14px", color: "#000000", lineHeight: "20px" }}
              >
                {answer}
              </p>
            </div>
          ))}
          <div css={{ paddingTop: "12px" }}>
            <h2 css={{ paddingBottom: "10px", fontWeight: "500" }}>
              Have additional questions?
            </h2>
            <p css={{ fontSize: "14px", color: "#000000", lineHeight: "20px" }}>
              Feel free to reach out to us at{" "}
              <a css={linkCss}>hello@qhacks.io</a> or on{" "}
              <a css={linkCss}>Facebook</a>
            </p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default FAQs;
