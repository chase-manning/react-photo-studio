import React from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  width: 100%;
  height: 3rem;
  background-color: var(--panel);
  border-bottom: solid 1px var(--border);
  padding: 5px;
`;

const Menu = () => {
  return <StyledMenu></StyledMenu>;
};

export default Menu;
