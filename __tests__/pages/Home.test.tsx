import React from "react";
import { render, screen } from "@testing-library/react";

import Home from "@/pages/index";

describe("Home pages", () => {
  it("should render properly", () => {
    render(<Home />);
    const txt = screen.getByText("ini home");
    expect(txt).toBeInTheDocument();
  });
});
