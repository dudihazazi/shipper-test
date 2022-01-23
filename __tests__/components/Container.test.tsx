import React from "react";
import { render, screen } from "@testing-library/react";

import Container from "@/components/Container";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Container componnents", () => {
  beforeAll(() => {
    useRouter.mockImplementation(() => ({
      pathname: "/",
    }));
  });

  it("should render properly", () => {
    render(
      <Container>
        <p>ini children</p>
      </Container>
    );

    const child = screen.getByText("ini children");
    expect(child).toBeInTheDocument();
  });
});
