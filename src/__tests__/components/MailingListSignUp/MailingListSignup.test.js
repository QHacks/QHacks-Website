import React from "react";
import MailingListSignup from "../../../components/MailingListSignup";
import { shallow } from "enzyme";

describe("MailingListSignup", () => {
  it("renders correctly", () => {
    expect(shallow(<MailingListSignup />)).toMatchSnapshot();
  });
});
