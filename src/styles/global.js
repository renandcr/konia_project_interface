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
        border: none;
    }
`;

export const VARIABLES = {
  blueColor: "#1768ac",
  grayColor: "#333",
  grayColor2: "#d3d3d3",
  grayColor3: "#495057",
  grayColor4: "#edf6f9",
  grayColor5: "#778899",
  colorDarkBackground: "rgba(0, 0, 0, 0.75)",
};
