import styled from "styled-components";

import pxToRem from "@/helpers/pxToRem";
import Card from "@/styles/components/Card";
import Flex from "@/styles/components/Flex";
import {
  blackPrimary,
  blackSecondary,
  blackTernary,
  greyPrimary,
  redPrimary,
} from "@/styles/variables/colors";
import { openBold } from "@/styles/variables/fonts";
import { MD } from "@/styles/variables/breakpoints";
import mediaQuery from "@/helpers/mediaQuery";

export const CardDriver = styled(Card)`
  ${mediaQuery(MD)} {
    width: 300px;
    flex-shrink: 0;

    &:not(:last-child) {
      margin-right: 24px;
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
  ${mediaQuery(MD)} {
    flex-direction: column;
  }
`;

export const BodyImg = styled.div`
  ${mediaQuery(MD)} {
    position: relative;
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
    border-radius: 50%;
    overflow: hidden;
  }
`;

interface IBodySection {
  isSmHide?: boolean;
}

export const BodySection = styled.div<IBodySection>`
  display: ${(props) => (props.isSmHide ? "none" : "block")};

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  ${mediaQuery(MD)} {
    display: block;
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
