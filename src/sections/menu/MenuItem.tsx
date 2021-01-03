import React, { useState } from "react";
import styled from "styled-components";
import ContextMenu, { Position } from "../../shared/ContextMenu";
import { MenuItemType } from "./schema/menu-items";

type StyledMenuItemProps = {
  open: boolean;
};

const StyledMenuItem = styled.div`
  position: relative;
  height: 100%;
`;

const MenuItemButton = styled.button`
  height: 100%;
  padding: 0 1rem;
  color: var(--text);
  font-size: 1.4rem;
  display: flex;
  align-items: center;

  background-color: ${(props: StyledMenuItemProps) =>
    props.open ? "var(--selected)" : "var(--panel)"};
  border: solid 1px
    ${(props: StyledMenuItemProps) =>
      props.open ? "var(--hover-border)" : "var(--panel)"};
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
        itemSets={props.menuItem.itemSets}
        position={Position.BOTTOM_LEFT}
      />
    </StyledMenuItem>
  );
};

export default MenuItem;
