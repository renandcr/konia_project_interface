import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html *{
        font-family: "Inter", sans-serif;
        box-sizing: border-box;
        font-weight: 400;
    }
    body {
        min-height: 100vh;
        background-color: #edf6f9;
    }
    button{
        cursor: pointer;
    }
`;

export const VARIABLES = {
  blueColor: "#1768ac",
  grayColor: "#333",
};
