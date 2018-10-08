import React from "react";
import { shallow } from "enzyme";
import SellingPointsIcons from "../../../components/SellingPointsIcons";
import hackers from "../assets/img/hackers.svg";
import schools from "../assets/img/schools.svg";
import applications from "../assets/img/applications.svg";

describe("SellingPointsIcons", () => {
  it("renders correctly", () => {
    expect(
      shallow(
        <SellingPointsIcons
          list={[
            {
              icon: applications,
              number: 1800,
              text: "Applications"
            },
            {
              icon: schools,
              number: 25,
              text: "Schools"
            },
            {
              icon: hackers,
              number: 500,
              text: "Hackers"
            }
          ]}
        />
      )
    ).toMatchSnapshot();
  });
});
