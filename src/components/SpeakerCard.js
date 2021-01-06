import React, { Component } from "react";

class SpeakerCard extends Component {
  componentWillMount() {
    this.setState({ learnMoreToggled: false });
  }

  render() {
    {
      return (
        <div
          css={{
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: "80px",
            position: "relative",
            zIndex: 3,
            "@media(min-width: 820px)": {
              paddingBottom: "112px"
            },
            maxWidth: "416px"
          }}
        >
          <div
            css={{
              borderRadius: "8px",
              boxShadow: "0 4px 24px 0 rgba(185, 185, 185, 0.5)",
              marginLeft: "13px",
              marginRight: "13px",
              background: "#ffffff"
            }}
          >
            <div
              css={{
                overflow: "hidden",
                borderTopLeftRadius: "inherit",
                borderTopRightRadius: "inherit"
              }}
            >
              <div
                css={{
                  background: `url(${this.props.image}) no-repeat center center`,
                  minHeight: "300px",
                  minWidth: "300px",
                  backgroundSize: "cover",
                  width: "100%",
                  borderTopLeftRadius: "inherit",
                  borderTopRightRadius: "inherit",
                  transition: "1s"
                }}
              />
            </div>
            <div
              css={{
                position: "relative",
                padding: "16px 24px 24px 24px",
                lineHeight: "20px",
                overflow: "hidden",
                transition: "1s",
                marginBottom: "-40px"
              }}
            >
              <h3
                css={{
                  textTransform: "uppercase",
                  fontWeight: 800,
                  lineHeight: "28px"
                }}
              >
                {this.props.name}
              </h3>
              <h2
                css={{
                  fontWeight: 500,
                  paddingTop: "8px",
                  lineHeight: "23px"
                }}
              >
                {this.props.title}
              </h2>
              <h2
                css={{
                  fontWeight: 500,
                  paddingTop: "8px",
                  lineHeight: "23px"
                }}
              >
                <a href={this.props.companyUrl}>
                  <img css={{ height:"30px", textAlign:"center"}} src={this.props.company} />
                </a>
              </h2>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SpeakerCard;
