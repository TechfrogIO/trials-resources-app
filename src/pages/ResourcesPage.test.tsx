import React from "react";
import { render, screen } from "@testing-library/react";
import { ResourcesPage } from "./ResourcesPage";

describe("ResourcesPage", () => {
  it("renders", () => {
    render(<ResourcesPage />);
    expect(screen.getAllByText("Bike Trials Resources")).toHaveLength(1);
  });
});
