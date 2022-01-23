import styled from "styled-components";

import mediaQuery from "@/helpers/mediaQuery";
import pxToRem from "@/helpers/pxToRem";
import { MD, LG, XL } from "@/styles/variables/breakpoints";
import {
  white,
  blackPrimary,
  greySecondary,
  redPrimary,
} from "@/styles/variables/colors";
import { openBold } from "@/styles/variables/fonts";

interface ILinkList {
  isActive: boolean;
}

interface IAside {
  isOpen: boolean;
}

export const Aside = styled.aside<IAside>`
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: calc(100vh - 48px);
  top: 48px;
  left: ${(props) => (props.isOpen ? "0" : "-100%")};
  background-color: ${white};
  transition: left 0.2s ease-out;

  ${mediaQuery(MD)} {
    display: block;
    top: 80px;
    left: 0;
    width: 200px;
    height: calc(100vh - 80px);
  }

  ${mediaQuery(LG)} {
    width: 250px;
  }

  ${mediaQuery(XL)} {
    width: 300px;
  }
`;

export const Menu = styled.menu`
  padding-top: 32px;
  list-style-type: none;
`;

// style List.tsx
export const LinkList = styled.a<ILinkList>`
  text-decoration: none;

  & > div {
    border-left: ${(props) =>
      props.isActive ? `6px solid ${redPrimary}` : "none"};

    &:hover {
      background-color: ${greySecondary};
    }

    & > span {
      & > img {
        filter: ${(props) =>
          props.isActive
            ? "invert(48%) sepia(79%) saturate(2476%) hue-rotate(328deg) brightness(118%) contrast(119%)" //filter to change black into red
            : "none"};
      }
    }

    & > p {
      margin-left: 16px;
      font-size: ${pxToRem(14)};
      font-weight: ${openBold};
      color: ${(props) => (props.isActive ? redPrimary : blackPrimary)};
    }
  }
`;
