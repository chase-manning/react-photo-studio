import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/photoshop-logo-small.png";
import { menuItems, MenuItemType } from "./menu-items";
import MenuItem from "./MenuItem";

const StyledMenu = styled.div`
  width: 100%;
  height: 3rem;
  background-color: var(--panel);
  border-bottom: solid 1px var(--border);
  display: flex;
`;

const Logo = styled.img`
  padding: 5px;
  height: 100%;
  margin-right: 1rem;
`;

const Menu = () => {
  return (
    <StyledMenu>
      <Logo src={logo} />
      {menuItems.map((menuItem: MenuItemType) => (
        <MenuItem key={menuItem.name} menuItem={menuItem} />
      ))}
    </StyledMenu>
  );
};

export default Menu;
