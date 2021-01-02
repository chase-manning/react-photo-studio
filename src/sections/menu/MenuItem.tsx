import React, { useState } from "react";
import styled from "styled-components";
import ContextMenu from "../../shared/ContextMenu";
import { MenuItemType } from "./menu-items";

type StyledMenuItemProps = {
  open: boolean;
};

const StyledMenuItem = styled.div`
  position: relative;
  height: 100%;
`;

const MenuItemButton = styled.div`
  height: 100%;
  padding: 0 1rem;
  color: var(--text);
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  background-color: ${(props: StyledMenuItemProps) =>
    props.open ? "var(--selected)" : "var(--panel)"};
  border: solid 1px var(--panel);
  :hover {
    background-color: ${(props: StyledMenuItemProps) =>
      props.open ? "var(--selected)" : "var(--hover-bg)"};
    border: solid 1px var(--hover-border);
  }
`;

type Props = {
  menuItem: MenuItemType;
};

const MenuItem = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledMenuItem>
      <MenuItemButton onClick={() => setOpen(true)} open={open}>
        {props.menuItem.name}
      </MenuItemButton>
      <ContextMenu
        open={open}
        close={() => setOpen(false)}
        menuItems={props.menuItem.items}
      />
    </StyledMenuItem>
  );
};

export default MenuItem;
