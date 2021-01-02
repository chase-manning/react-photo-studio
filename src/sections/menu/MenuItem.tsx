import React from "react";
import styled from "styled-components";
import { MenuItemType } from "./menu-items";

const StyledMenuItem = styled.div`
  height: 100%;
  margin-right: 2rem;
  color: var(--text);
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding: 0.2rem;
  cursor: pointer;
`;

type Props = {
  menuItem: MenuItemType;
};

const MenuItem = (props: Props) => {
  return <StyledMenuItem>{props.menuItem.name}</StyledMenuItem>;
};

export default MenuItem;
