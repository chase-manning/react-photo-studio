import React from "react";
import styled from "styled-components";
import { MenuItemType } from "../sections/menu/menu-items";

const StyledContextMenu = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Exit = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Menu = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  background-color: var(--panel);
  display: flex;
  flex-direction: column;
  border: solid 1px var(--menu-border);
  z-index: 2;
`;

const MenuItem = styled.div`
  padding: 0.2rem 0.4rem;
  display: flex;
  justify-content: space-between;
`;

const ItemText = styled.div`
  color: var(--text);
  font-size: 1.4rem;
`;

type Props = {
  open: boolean;
  close: () => void;
  menuItems: MenuItemType[];
};

const ContextMenu = (props: Props) => {
  if (!props.open) return null;

  return (
    <StyledContextMenu>
      <Exit onClick={() => props.close()} />
      <Menu>
        {props.menuItems.map((menuItem: MenuItemType) => (
          <MenuItem>
            <ItemText>{menuItem.name}</ItemText>
            {menuItem.items.length > 0 && <div>{">"}</div>}
          </MenuItem>
        ))}
      </Menu>
    </StyledContextMenu>
  );
};

export default ContextMenu;
