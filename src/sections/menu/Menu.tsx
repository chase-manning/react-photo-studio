import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/photoshop-logo-small.png";

const StyledMenu = styled.div`
  width: 100%;
  height: 3rem;
  background-color: var(--panel);
  border-bottom: solid 1px var(--border);
  padding: 5px;
`;

const Logo = styled.img`
  height: 100%;
`;

const Menu = () => {
  return (
    <StyledMenu>
      <Logo src={logo} />
    </StyledMenu>
  );
};

export default Menu;
