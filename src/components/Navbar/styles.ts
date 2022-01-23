import styled from "styled-components";

import pxToRem from "@/helpers/pxToRem";
import mediaQuery from "@/helpers/mediaQuery";
import { SM, MD, LG, XL } from "@/styles/variables/breakpoints";
import {
  white,
  blackPrimary,
  blackSecondary,
  greyPrimary,
  redPrimary,
} from "@/styles/variables/colors";
import { openBold } from "@/styles/variables/fonts";

export const Nav = styled.nav`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 48px;
  padding: 10px 8px;
  background-color: ${white};
  box-shadow: ${greyPrimary} 0px 2px 6px 0px;

  ${mediaQuery(MD)} {
    height: 80px;
    padding: 26px 24px;
  }

  .logo {
    width: 70%;

    ${mediaQuery(MD)} {
      width: 50%;
    }
  }
`;

export const Logo = styled.div`
  position: relative;
  width: calc(100% - 48px);
  height: 100%;

  ${mediaQuery(MD)} {
    width: 100%;
    height: 100%;
  }
`;

export const Text = styled.p`
  display: none;

  ${mediaQuery(MD)} {
    display: block;
    color: ${blackPrimary};
    font-size: ${pxToRem(16)};
    font-weight: ${openBold};
    margin-right: 16px;

    & > strong {
      color: ${redPrimary};
    }
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
`;

//style Hamburger.tsx
interface IBtnHamburger {
  isOpen: boolean;
}

export const BtnHamburger = styled.div<IBtnHamburger>`
  width: 32px;
  height: 15px;
  position: relative;
  margin-right: 16px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  & > span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${blackSecondary};
    border-radius: 8px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: ${(props) => (props.isOpen ? "6px" : "0")};
      width: ${(props) => (props.isOpen ? "0%" : "100%")};
      left: ${(props) => (props.isOpen ? "50%" : "0")};
    }

    &:nth-child(2) {
      top: 6px;
      transform: ${(props) =>
        props.isOpen ? "rotate(45deg)" : "rotate(0deg)"};
    }

    &:nth-child(3) {
      top: 6px;
      transform: ${(props) =>
        props.isOpen ? "rotate(-45deg)" : "rotate(0deg)"};
    }

    &:nth-child(4) {
      top: ${(props) => (props.isOpen ? "6px" : "12px")};
      width: ${(props) => (props.isOpen ? "0%" : "100%")};
      left: ${(props) => (props.isOpen ? "50%" : "0")};
    }
  }

  ${mediaQuery(MD)} {
    display: none;
  }
`;
