import { createGlobalStyle } from "styled-components";

// global css to reset all padding and margin. also set default box-sizing rule
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif; 
  }

  #root {
    margin:0 auto;
  }
`;
