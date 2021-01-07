import React from "react";

export default ({
  headshot,
  name,
  title,
  companyLogo,
  borderColor,
  companyName,
  companyUrl,
  logoWidth = "auto",
  logoHeight = "40px",
  logoMarginTop = "0px",
}) => (
  <div css={{ textAlign: "center", margin: "10px", marginTop: "56px" }}>
    <div
      css={{
        width: "180px",
        height: "180px",
        borderRadius: "50%",
        borderColor,
        marginLeft: "auto",
        marginRight: "auto",
        borderWidth: "3px",
        borderStyle: "solid",
        overflow: "hidden"
      }}
    >
      <img
        css={{ width: "190px", marginLeft: "-10px" }}
        src={headshot}
        alt={`${name} - ${title}`}
      />
    </div>
    <div css={{ color: "#000000" }}>
      <h2
        css={{
          marginTop: "24px",
          marginBottom: "8px",
          fontSize: "28px",
          fontWeight: "600"
        }}
      >
        {name}
      </h2>
      <p>{title}</p>
      <br />
      <a href={companyUrl} target="_blank" rel="external noopener">
        <img
          css={{
            width: logoWidth,
            height: logoHeight,
            marginBottom: "32px",
            marginTop: logoMarginTop
          }}
          src={companyLogo}
          alt={companyName}
        />
      </a>
    </div>
  </div>
);
