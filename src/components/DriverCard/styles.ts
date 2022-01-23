import styled from "styled-components";

import mediaQuery from "@/helpers/mediaQuery";
import pxToRem from "@/helpers/pxToRem";
import Card from "@/styles/components/Card";
import Flex from "@/styles/components/Flex";
import { MD } from "@/styles/variables/breakpoints";
import {
  blackPrimary,
  blackSecondary,
  blackTernary,
  greyPrimary,
  redPrimary,
} from "@/styles/variables/colors";
import { openBold } from "@/styles/variables/fonts";

interface IBodySection {
  isSmHide?: boolean;
  isSmLast?: boolean;
}

export const CardDriver = styled(Card)`
  width: 100%;
  flex-shrink: 0;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  ${mediaQuery(MD)} {
    width: 300px;

    &:not(:last-child) {
      margin-right: 24px;
      margin-bottom: 0;
    }
  }
`;

export const CardHeader = styled(Flex)`
  border-bottom: 2px solid ${greyPrimary};

  img {
    filter: invert(0.6);
  }
`;

export const Text = styled.p`
  font-size: ${pxToRem(14)};
  color: ${blackTernary};
  margin-right: 4px;
`;

export const TextID = styled.p`
  font-size: ${pxToRem(14)};
  font-weight: ${openBold};
  color: ${redPrimary};
  text-transform: uppercase;
`;

export const CardBody = styled(Flex)`
  flex-direction: row;

  ${mediaQuery(MD)} {
    flex-direction: column;
  }
`;

export const BodyImg = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  margin: auto 16px auto 0;
  border-radius: 50%;
  overflow: hidden;

  ${mediaQuery(MD)} {
    margin: 0 0 16px;
  }
`;

export const BodySection = styled.div<IBodySection>`
  display: ${(props) => (props.isSmHide ? "none" : "block")};

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  &.sm_last {
    margin-bottom: 0;
  }

  ${mediaQuery(MD)} {
    display: block;

    &.sm_last {
      margin-bottom: 16px;
    }
  }
`;

export const BodyTitle = styled.p`
  font-size: ${pxToRem(12)};
  color: ${blackSecondary};
`;

export const BodyTxt = styled.p`
  font-size: ${pxToRem(14)};
  font-weight: ${openBold};
  color: ${blackPrimary};
`;
