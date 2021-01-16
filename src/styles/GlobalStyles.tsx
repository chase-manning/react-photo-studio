import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --text: #E3E3E3;
        --label: #d6d6d6;
        --input-text: #f0f0f0;
        --icon: #dddddd;
        --panel: #535353;
        --border: #383838;
        --menu-border: #3d3e3e;
        --hover-bg: #454545;
        --hover-border: #666666;
        --selected: #383838;
        --context-hover: #6b6b6b;
        --disabled: #878787;
        --expandable: #424242;
        --color-border: #363636;
        --section-line: #3e3e3e;
        --input-border: #666666;
    }
  
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Ubuntu', sans-serif;
      font-size: 10px;
    }
  
    button {
      background: none;
      border: none;
      outline: none;
    }
  `;

function GlobalStyles() {
  return <GlobalStyle />;
}

export default GlobalStyles;
