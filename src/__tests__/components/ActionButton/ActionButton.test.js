import React from "react";
import ActionButton from "../../../components/ActionButton";
import { shallow } from "enzyme";

describe("ActionButton", () => {
  it("renders correctly", () => {
    expect(
      shallow(
        <ActionButton style={{ padding: "10px", margin: "10px" }} text="TEST" />
      )
    ).toMatchSnapshot();
  });
});
