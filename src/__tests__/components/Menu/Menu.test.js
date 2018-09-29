import React from "react";
import Menu from "../../../components/Menu";
import { shallow } from "enzyme";

describe("Menu", () => {
  it("renders correctly", () => {
    expect(
      shallow(<Menu breadcrumbs={["THIS", "IS", "A", "TEST"]} />)
    ).toMatchSnapshot();
  });
});
