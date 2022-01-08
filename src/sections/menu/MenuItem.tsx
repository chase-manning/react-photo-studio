import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import ContextMenu, { Position } from "../../shared/ContextMenu";
import { ItemType } from "./schema/menu-items";

const StyledMenuItem = styled.div`
  position: relative;
  height: 100%;
`;

interface MenuItemProps {
  open: boolean;
}

const MenuItemButton = styled.button`
  height: 100%;
  padding: 0 1rem;
  color: var(--text);
  font-size: 1.3rem;
  display: flex;
  align-items: center;

  background-color: ${(props: MenuItemProps) =>
    props.open ? "var(--selected)" : "var(--panel)"};
  border: solid 1px
    ${(props: MenuItemProps) =>
      props.open ? "var(--hover-border)" : "var(--panel)"};
  :hover {
    background-color: ${(props: MenuItemProps) =>
      props.open ? "var(--selected)" : "var(--hover-bg)"};
    border: solid 1px var(--hover-border);
  }
`;

interface Props {
  menuItem: ItemType;
}

const MenuItem = ({ menuItem }: Props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  return (
    <StyledMenuItem>
      <MenuItemButton
        id={`${menuItem.name.toLowerCase()}-menu`}
        onClick={() => {
          if (menuItem.action) dispatch(menuItem.action());
          else setOpen(true);
        }}
        open={open}
      >
        {menuItem.name}
      </MenuItemButton>
      {menuItem.itemSets && (
        <ContextMenu
          squareTop
          open={open}
          close={() => setOpen(false)}
          itemSets={menuItem.itemSets}
          position={Position.BOTTOM_LEFT}
        />
      )}
    </StyledMenuItem>
  );
};

export default MenuItem;
