import React from "react";
import { render, screen } from "@testing-library/react";

import DriverCard from "@/components/DriverCard";

describe("DriverCard componnents", () => {
  const mockProps = {
    id: "ID1234",
    img: "https://randomuser.me/api/portraits/thumb/women/57.jpg",
    firstName: "Awal",
    lastName: "Akhir",
    phone: "0812121212",
    email: "ini@email.com",
    dob: "11-11-2011",
  };

  it("should render properly", () => {
    render(<DriverCard {...mockProps} />);

    const id = screen.getByText("ID1234");
    expect(id).toBeInTheDocument();

    const name = screen.getByText("Awal Akhir");
    expect(name).toBeInTheDocument();
  });
});
