import React, { useRef, useState, useEffect } from "react";

import Header from "./Header";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import backgroundImage from "../assets/img/backgrounds/landingBG2.png";
import graphicMobile from "../assets/img/backgrounds/backgroundMobile.png";
import waveLineRed from "../assets/img/backgrounds/waveLineRed.png";
import logo from "../assets/img/logo/qhacksCrown-colored.svg";
import word from "../assets/img/logo/qhacksWordmark-colored.svg";

const landingCSS = {
  width: "100%",
  height: "730px",
  marginTop: "120px",
  background: `url(${backgroundImage}) no-repeat center center`,
  backgroundColor: "#fff",
  backgroundSize: "auto 650px",
  "@media (min-width: 820px) and (max-width: 1200px)": {
    backgroundSize: "auto 550px"
  },
  "@media(max-width: 820px)": {
    height: "900px",
    marginTop: "50px",
    background: `url(${waveLineRed}) no-repeat center bottom`
  }
};

const applyButtonCSS = {
  alignItems: "center",
  position: "relative",
  margin: "40px 0 40px auto",
  "@media(max-width: 820px)": {
    margin: "30px auto 45px auto",
    padding: "5px 10px 5px 10px"
  }
};



function Landing() {

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  
  let interval = useRef;
  
  const startTimer = () => {
      const countDownDate = new Date('November 26 2020 17:00:00').getTime();
  
      interval = setInterval(()=>{
        const now = new Date().getTime(); 
        const distance = countDownDate - now; 

        const days = Math.floor(distance/(1000*60*60*24));
        const hours = Math.floor((distance%(1000*60*60*24)/(1000*60*60)));
        const minutes = Math.floor((distance%(1000*60*60)/(1000*60)));
        const seconds = Math.floor((distance%(1000*60)) / 1000);


        if (distance < 0){
          clearInterval(interval.current);
        }else{
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }

      }, 1000);
  };

useEffect(()=>{
  startTimer();
  return() =>{
    clearInterval(interval.current);
  };
});



  return (
    <section css={landingCSS}>
      <Header standaloneVersion={false} />
      <ContentWrapper>
        <div
          css={{
            marginLeft: "55%",
            textAlign: "left",
            paddingRight: "auto",
            paddingTop: "50px",
            "@media (min-width: 820px) and (max-width: 1200px)": {
              paddingRight: "50px"
            },
            "@media (max-width: 820px)": {
              margin: "0",
              textAlign: "center"
            }
          }}
        >
          <img
            src={graphicMobile}
            css={{
              width: "350px",
              display: "block",
              margin: "0 auto",
              "@media(min-width: 820px)": {
                display: "none"
              }
            }}
          />
          <img
            src={word}
            css={{
              paddingBottom: "10px",
              paddingRight: "10px",
              width: "280px",
              "@media (min-width: 820px) and (max-width: 1250px)": {
                width: "200px"
              },
              "@media(max-width: 820px)": {
                paddingTop: "12px",
                width: "220px"
              }
            }}
            alt="QHacks Wordmark"
          />
          <img
            src={logo}
            css={{
              paddingBottom: "20px",
              paddingLeft: "10px",
              width: "140px",
              "@media (min-width: 820px) and (max-width: 1250px)": {
                width: "100px",
                paddingLeft: "5px"
              },
              "@media(max-width: 820px)": {
                display: "none"
              }
            }}
            alt="QHacks Wordmark"
          />
          <h2
            data-cy="qhacks-information"
            css={{
              zIndex: "2",
              color: "#000000",
              fontWeight: 600,
              fontSize: "22px",
              marginTop: "20px",
              marginBottom: "20px",
              "@media (min-width: 820px) and (max-width: 1200px)": {
                fontSize: "20px"
              },
              "@media(max-width: 820px)": {
                fontSize: "15px",
                fontWeight: 600,
                paddingBottom: "20px"
              }
            }}
          >
            Queen’s University • January 22nd - 24th, 2021
          </h2>
          <h2
            data-cy="qhacks-tagline"
            css={{
              marginTop: "30px",
              marginBottom: "15px",
              fontWeight: 500,
              lineHeight: "30px",
              "@media(max-width: 820px)": {
                fontSize: "15px",
                lineHeight: "1.6"
              }
            }}
          >
            Queen’s University’s annual hackathon.
            <br />
            Join us for an unforgettable experience!
          </h2>
          <ActionButton
            dataCy="apply-button"
            backgroundColor="#00205B"
            foregroundColor="#ffffff"
            hoverBackgroundColor="#00205B"
            hoverForegroundColor="#ffffff"
            style={applyButtonCSS}
            type="rounded"
          >
            <p css = {{fontSize: "20px", fontWeight: "450"}}>Applications Opening in</p>
            <div css={{

              display: "grid",
              gridTemplateColumns:  "repeat(7, 1fr)",

               }}>
              <section>
                <p css = {{fontSize: "25px"}}>{timerDays}</p>
                <p><small>days</small></p>
              </section>
              <span>:</span>
              <section>
                <p css = {{fontSize: "25px"}}>{timerHours}</p>
                <p><small>hours</small></p>
              </section>
              <span>:</span>
              <section>
                <p css = {{fontSize: "25px"}}>{timerMinutes}</p>
                <p><small>minutes</small></p>
              </section>
              <span>:</span>
              <section>
                <p css = {{fontSize: "25px"}}>{timerSeconds}</p>
                <p><small>seconds</small></p>
              </section>
              </div>
          </ActionButton>
          {/* <ActionButton
            dataCy="apply-button"
            backgroundColor="#00205B"
            foregroundColor="#ffffff"
            hoverBackgroundColor="#16498c"
            hoverForegroundColor="#ffffff"
            style={applyButtonCSS}
            link="https://app.qhacks.io"
            type="rounded"
          >
            Apply now
          </ActionButton> */}
        </div>
      </ContentWrapper>
    </section>
  );
}

export default Landing;
