import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer, FooterProps } from "./Footer";

describe("Footer", () => {
  let props: FooterProps;

  beforeEach(() => {
    props = {
      company: "ACME",
      startDate: "2023",
    };
  });

  it("renders", () => {
    const expectedText = `&copy;&nbsp;${props.startDate} ${props.company}. All rights reserved.`;
    render(<Footer {...props} />);
    expect(screen.getAllByText(expectedText)).toHaveLength(1);
  });
});
