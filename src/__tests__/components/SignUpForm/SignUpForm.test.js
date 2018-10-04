import React from "react";
import SignUpForm from "../../../components/SignUpForm";
import { shallow } from "enzyme";

describe("SignUpForm", () => {
  it("renders correctly", () => {
    expect(shallow(<SignUpForm />)).toMatchSnapshot();
  });
});
