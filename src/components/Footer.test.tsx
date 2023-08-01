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

  it("renders without end date", () => {
    const expectedText = `© ${props.startDate} ${props.company}. All rights reserved.`;
    render(<Footer {...props} />);
    expect(screen.getAllByText(expectedText)).toHaveLength(1);
  });

  it("renders with end date", () => {
    props.endDate = "2024";
    const expectedText = `© ${props.startDate}-${props.endDate} ${props.company}. All rights reserved.`;
    render(<Footer {...props} />);
    expect(screen.getAllByText(expectedText)).toHaveLength(1);
  });
});
