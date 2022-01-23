import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBox from "@/components/SearchBox";

describe("SearchBox componnents", () => {
  const mockProps = {
    handleSearch: jest.fn(),
  };

  it("should render properly", async () => {
    render(<SearchBox {...mockProps} />);

    const searchBar = screen.getByPlaceholderText("Cari Driver");
    expect(searchBar).toBeInTheDocument();

    userEvent.type(searchBar, "Dizzi");
    await waitFor(() =>
      expect(mockProps.handleSearch).toHaveBeenCalledWith("Dizzi")
    );
  });
});
