import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Navbar from "@/components/Navbar";

describe("Navbar componnents", () => {
  const mockProps = {
    isOpen: true,
    handleOpen: jest.fn(),
  };

  it("should render properly", async () => {
    render(<Navbar {...mockProps} />);

    const title = screen.getByText("Shipper User");
    expect(title).toBeInTheDocument();

    const hamburger = screen.getByTestId("navHamburger");
    expect(hamburger).toBeInTheDocument();

    userEvent.click(hamburger);
    await waitFor(() => expect(mockProps.handleOpen).toHaveBeenCalled());
  });
});
