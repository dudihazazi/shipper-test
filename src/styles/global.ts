import { createGlobalStyle } from "styled-components";

import { blackPrimary } from "./variables/colors";

// global css to reset all padding and margin. also set default box-sizing rule
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif;
    color: ${blackPrimary};
  }

  #root {
    margin:0 auto;
  }
`;
