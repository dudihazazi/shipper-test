import React from "react";
import { render, screen } from "@testing-library/react";

import Sidebar from "@/components/Sidebar";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Sidebarr componnents", () => {
  const mockProps = {
    isOpen: true,
    handleClose: jest.fn(),
  };

  beforeAll(() => {
    useRouter.mockImplementation(() => ({
      pathname: "/",
    }));
  });

  it("should render properly", () => {
    render(<Sidebar {...mockProps} />);

    const homeMenu = screen.getByText("Beranda");
    expect(homeMenu).toBeInTheDocument();

    const driverMenu = screen.getByText("Driver Management");
    expect(driverMenu).toBeInTheDocument();

    const pickupMenu = screen.getByText("Pickup");
    expect(pickupMenu).toBeInTheDocument();
  });
});
