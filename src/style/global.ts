import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./index.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body{
    background-color: #ffffff;
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
    line-height: 1.3;
    margin:0;
    padding:0;
    width: 100vw;
    height: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  a, button {
      cursor:pointer;
  }
  h1, h2, h3, h4, h5, h6{
   margin:0;
   padding:0;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  div,span, p{
    margin: 0;
    padding: 0;
  }
  
`;

export default GlobalStyle;
