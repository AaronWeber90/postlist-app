import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
  }
  
  body, h2, h3 {
    margin: 0;
    padding: 0;
    font-family: Verdana;
  }
`;

export default GlobalStyle;
