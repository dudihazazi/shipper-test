import styled from "styled-components";

import mediaQuery from "@/helpers/mediaQuery";
import pxToRem from "@/helpers/pxToRem";
import Flex from "@/styles/components/Flex";
import { MD, LG } from "@/styles/variables/breakpoints";
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

export const Wrapper = styled(Flex)`
  flex-wrap: wrap;

  ${mediaQuery(LG)} {
    flex-wrap: nowrap;
  }
`;

export const Title = styled.h2`
  font-family: ${Nunito};
  font-weight: ${nunitoBold};
  color: ${redPrimary};

  ${mediaQuery(MD)} {
    font-size: ${pxToRem(20)};
  }

  ${mediaQuery(LG)} {
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

export const SearchWrapper = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 16px;

  ${mediaQuery(LG)} {
    width: auto;
    flex-wrap: nowrap;
    margin-top: 0;
  }
`;

export const Search = styled(Flex)`
  width: 100%;
  margin-bottom: 16px;
  border: 1px solid ${greyPrimary};
  overflow: hidden;

  ${mediaQuery(LG)} {
    width: auto;
    margin-right: 16px;
    margin-bottom: 0;
  }
`;

export const IconSearch = styled.span`
  img {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(328deg)
      brightness(118%) contrast(119%);
  }

  ${mediaQuery(MD)} {
    height: 32px;
    padding: 8px;
  }

  ${mediaQuery(LG)} {
    height: 40px;
    padding: 12px;
  }
`;

export const InputSearch = styled.input`
  border: none;

  ${mediaQuery(MD)} {
    height: 32px;
    padding: 8px 8px 8px 0;
  }

  ${mediaQuery(LG)} {
    height: 40px;
    padding: 12px 8px 12px 0;
  }
`;

export const BtnAdd = styled.button`
  width: 100%;
  background-color: ${redPrimary};
  border: none;
  color: ${white};
  font-size: ${pxToRem(12)};
  font-weight: ${openBold};
  cursor: pointer;

  ${mediaQuery(MD)} {
    padding: 0 8px;
    height: 32px;
  }

  ${mediaQuery(LG)} {
    padding: 0 16px;
    width: auto;
    height: 40px;
    font-size: ${pxToRem(14)};
  }
`;
