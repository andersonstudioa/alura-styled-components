import { createGlobalStyle } from "styled-components";

//Componente contendo estilo global aplicado a todas as tags
//É necessário importá-lo no App.js
export const GlobalStyle = createGlobalStyle `
* {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`