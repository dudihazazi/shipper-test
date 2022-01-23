import React from "react";
import { render, screen } from "@testing-library/react";

import DriverNotFound from "@/components/DriverNotFound";

describe("DriverNotFound componnents", () => {
  it("should render properly", () => {
    render(<DriverNotFound />);
    const txt = screen.getByText("Driver tidak ditemukan");
    expect(txt).toBeInTheDocument();
  });
});
