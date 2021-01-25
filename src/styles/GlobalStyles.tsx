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
        --color-border: #f8d1d1;
        --section-line: #3e3e3e;
        --input-border: #666666;
        --white: #ffffff;
        --bg: #272727;
        --sidebar: #4a4a4a;
        --close-hover: #636363;
        --tab-text: #f3f3f3;
        --tab-text-inactive: #b0b0b0;
        --footer-button-border: #595959;
        --menu-lines: #a8a8a8;
        --menu-hover-bg: #474747;
        --tab-hover: #4f4f4f;
        --layer-border: #2e2e2e;
        --layer-text: #f0f0f0;
        --layer-bg: #4d4d4d;
        --toast-border: #6f6f6f;
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
