import styled from "styled-components";
import pxToRem from "@/helpers/pxToRem";
import { white, blackPrimary, redPrimary } from "@/styles/variables/colors";

export const Nav = styled.nav`
  width: 100%;
  height: 92px;
  padding: 32px 24px;
  background-color: ${white};
`;

export const Logo = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`;

export const Text = styled.p`
  color: ${blackPrimary};
  font-size: ${pxToRem(16)};
  font-weight: 600;
  margin-right: 16px;

  & > strong {
    color: ${redPrimary};
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
`;
