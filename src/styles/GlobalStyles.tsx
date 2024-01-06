import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #b9b2b2;
    color: #000000;
    font-family: 'Inter', sans-serif;
  }
`;
