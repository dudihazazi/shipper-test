import { useState, useCallback } from "react";
import type { PropsWithChildren } from "react";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Wrapper, Main } from "./styles";

export default function Container(props: PropsWithChildren<unknown>) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <Wrapper>
      <Navbar isOpen={isOpen} handleOpen={handleOpen} />
      <Sidebar isOpen={isOpen} />
      <Main>{children}</Main>
    </Wrapper>
  );
}
