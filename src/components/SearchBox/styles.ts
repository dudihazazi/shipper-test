import styled from "styled-components";

import pxToRem from "@/helpers/pxToRem";
import mediaQuery from "@/helpers/mediaQuery";
import Flex from "@/styles/components/Flex";
import { MD } from "@/styles/variables/breakpoints";
import {
  white,
  blackSecondary,
  greyPrimary,
  redPrimary,
} from "@/styles/variables/colors";
import {
  Nunito,
  nunitoBold,
  openBold,
  openNormal,
} from "@/styles/variables/fonts";

export const Title = styled.h2`
  font-family: ${Nunito};
  font-weight: ${nunitoBold};
  color: ${redPrimary};

  ${mediaQuery(MD)} {
    font-size: ${pxToRem(24)};
  }
`;

export const Text = styled.p`
  font-weight: ${openNormal};
  color: ${blackSecondary};

  ${mediaQuery(MD)} {
    font-size: ${pxToRem(14)};
  }
`;

export const Search = styled(Flex)`
  border: 1px solid ${greyPrimary};
  overflow: hidden;

  ${mediaQuery(MD)} {
    margin-right: 16px;
  }
`;

export const IconSearch = styled.span`
  height: 40px;
  padding: 12px;

  img {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(328deg)
      brightness(118%) contrast(119%);
  }
`;

export const InputSearch = styled.input`
  height: 40px;
  padding: 12px 8px 12px 0;
  border: none;
`;

export const IcSearch = styled.span`
  width: 20px;
  height: 40px;
`;

export const BtnAdd = styled.button`
  background-color: ${redPrimary};
  border: none;
  color: ${white};
  font-size: ${pxToRem(14)};
  font-weight: ${openBold};
  cursor: pointer;

  ${mediaQuery(MD)} {
    padding: 0 16px;
    height: 40px;
  }
`;
