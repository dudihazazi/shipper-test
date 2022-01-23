import pxToRem from "@/helpers/pxToRem";
import styled from "styled-components";

import Flex from "../components/Flex";
import { blackPrimary, blackTernary } from "../variables/colors";
import { openBold } from "../variables/fonts";

export const Carousel = styled(Flex)`
  overflow-x: auto;
`;

interface IBtnPage {
  isDisabled: boolean;
}

export const BtnPage = styled.button<IBtnPage>`
  border: none;
  background-color: transparent;
  font-size: ${pxToRem(16)};
  font-weight: ${openBold};
  color: ${(props) => (props.isDisabled ? blackTernary : blackPrimary)};
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.isDisabled ? "none" : "initial")};

  &.prev {
    position: relative;
    margin-right: 24px;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -16px;
      border: solid
        ${(props) => (props.isDisabled ? blackTernary : blackPrimary)};
      border-width: 0 3px 3px 0;
      padding: 3px;
      transform: translateY(-50%) rotate(135deg);
    }
  }

  &.next {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: -16px;
      border: solid
        ${(props) => (props.isDisabled ? blackTernary : blackPrimary)};
      border-width: 0 3px 3px 0;
      padding: 3px;
      transform: translateY(-50%) rotate(-45deg);
    }
  }
`;
