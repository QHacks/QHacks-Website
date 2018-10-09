import React from "react";
import BriefSummary from "../../../components/BriefSummary";
import { shallow } from "enzyme";

describe("BriefSummary", () => {
  it("renders correctly", () => {
    expect(
      shallow(
        <BriefSummary style={{ padding: "10px", margin: "10px" }} text="tEsT" lower={false} backgroundColor="#000000" foregroundColor="#ffffff" />
      )
    ).toMatchSnapshot();
  });
});
