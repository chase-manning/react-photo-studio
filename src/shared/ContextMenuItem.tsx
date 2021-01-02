import React, { useState } from "react";
import styled from "styled-components";
import { ItemType, MenuItemType } from "../sections/menu/menu-items";
import { ReactComponent as ArrowIcon } from "../assets/svgs/navigation/triangle-right.svg";
import ContextMenu from "./ContextMenu";

const StyledContextMenuItem = styled.div`
  position: relative;
`;

const Button = styled.button`
  padding: 0.2rem 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    background-color: var(--context-hover);
  }
`;

const ItemText = styled.div`
  color: var(--text);
  font-size: 1.4rem;
  white-space: nowrap;
`;

const Arrow = styled(ArrowIcon)`
  height: 1rem;
  fill: var(--text);
  margin-left: 2rem;
`;

type Props = {
  menuItem: ItemType;
};

const ContextMenuItem = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledContextMenuItem
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Button
        onClick={() => {
          if (props.menuItem.action) props.menuItem.action();
        }}
      >
        <ItemText>{props.menuItem.name}</ItemText>
        {props.menuItem.items.length > 0 && <Arrow />}
      </Button>
      <ContextMenu
        open={open}
        menuItems={props.menuItem.items}
        close={() => setOpen(false)}
        subMenu={true}
      />
    </StyledContextMenuItem>
  );
};

export default ContextMenuItem;
