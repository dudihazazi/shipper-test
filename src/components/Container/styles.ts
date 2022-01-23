import styled from "styled-components";

import mediaQuery from "@/helpers/mediaQuery";
import { SM, MD, LG, XL } from "@/styles/variables/breakpoints";
import { greySecondary } from "@/styles/variables/colors";

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 48px);
  margin-top: 48px;

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
  min-height: calc(100vh - 48px);
  background-color: ${greySecondary};

  ${mediaQuery(MD)} {
    min-height: calc(100vh - 80px);
    padding: 32px 24px;
  }
`;
