import styled from "styled-components";

import mediaQuery from "@/helpers/mediaQuery";
import { SM, MD, LG, XL } from "@/styles/variables/breakpoints";
import { greySecondary } from "@/styles/variables/colors";

export const Wrapper = styled.div`
  ${mediaQuery(MD)} {
    width: 100%;
    min-height: calc(100vh - 80px);
    margin-top: 80px;
    padding-left: 200px;
  }

  ${mediaQuery(LG)} {
    padding-left: 250px;
  }

  ${mediaQuery(XL)} {
    padding-left: 300px;
  }
`;

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 80px);
  background-color: ${greySecondary};
`;
