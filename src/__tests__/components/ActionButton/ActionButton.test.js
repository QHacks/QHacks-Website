import React from "react";
import ActionButton from "../../../components/ActionButton";
import { shallow } from "enzyme";

describe("ActionButton", () => {
  it("renders correctly", () => {
    expect(
      shallow(
        <ActionButton
          style={{ padding: "10px", margin: "10px" }}
          text="TeSt1"
          backgroundColor="#000000"
          foregroundColor="#ffffff"
          type="rect"
        />
      )
    ).toMatchSnapshot();
  });
});

describe("ActionButton", () => {
  it("renders correctly", () => {
    expect(
      shallow(
        <ActionButton
          style={{ padding: "10px", margin: "10px" }}
          text="tEsT2"
          backgroundColor="#000000"
          foregroundColor="#ffffff"
          type="rounded"
        />
      )
    ).toMatchSnapshot();
  });
});
