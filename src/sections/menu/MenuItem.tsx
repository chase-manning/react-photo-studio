import React from "react";
import styled from "styled-components";
import { MenuItemType } from "./menu-items";

const StyledMenuItem = styled.div`
  height: 100%;
  margin-right: 3rem;
`;

type Props = {
  menuItem: MenuItemType;
};

const MenuItem = (props: Props) => {
  return <StyledMenuItem>{props.menuItem.name}</StyledMenuItem>;
};

export default MenuItem;
