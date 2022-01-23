import React from "react";
import { render, screen } from "@testing-library/react";

import Pickup from "@/pages/pickup";

describe("Pickup pages", () => {
  it("should render properly", () => {
    render(<Pickup />);
    const txt = screen.getByText("ini pickup");
    expect(txt).toBeInTheDocument();
  });
});
