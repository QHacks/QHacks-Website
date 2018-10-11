import React from "react";
import SellingPoints from "../../../components/SellingPoints";
import { shallow } from "enzyme";

describe("SellingPoints", () => {
  it("renders correctly", () => {
    expect(shallow(<SellingPoints />)).toMatchSnapshot();
  });
});
