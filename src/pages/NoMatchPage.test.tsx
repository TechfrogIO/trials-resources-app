import React from "react";
import { render, screen } from "@testing-library/react";
import { NoMatchPage } from "./NoMatchPage";

describe("NoMatchPage", () => {
  it("renders", () => {
    render(<NoMatchPage />);
    expect(screen.getAllByText("Page Not Found")).toHaveLength(1);
  });
});
