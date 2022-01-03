import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { ItemType } from "../sections/menu/schema/menu-items";
import { ReactComponent as ArrowIcon } from "../assets/svgs/navigation/triangle-right.svg";
import ContextMenu from "./ContextMenu";
import Disable from "../styles/Disabled";

const StyledContextMenuItem = styled.div`
  position: relative;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.2rem 1rem 0.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    background-color: var(--context-hover);
  }
`;

const ItemText = styled.div`
  color: var(--text);
  font-size: 1.3rem;
  white-space: nowrap;
`;

const Icon = styled.div`
  margin-left: 4rem;
`;

const Arrow = styled(ArrowIcon)`
  height: 1rem;
  fill: var(--text);
`;

interface Props {
  menuItem: ItemType;
  close: () => void;
}

const ContextMenuItem = ({ menuItem, close }: Props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  return (
    <StyledContextMenuItem
      onMouseEnter={() => {
        if (!menuItem.disabled) setOpen(true);
      }}
      onMouseLeave={() => setOpen(false)}
    >
      <Button
        onClick={() => {
          if (menuItem.action) dispatch(menuItem.action());
          close();
        }}
      >
        <ItemText>{menuItem.name}</ItemText>
        <Icon>{menuItem.itemSets && <Arrow />}</Icon>
      </Button>
      {menuItem.itemSets && (
        <ContextMenu
          subMenu
          open={open}
          itemSets={menuItem.itemSets}
          close={() => {
            setOpen(false);
            close();
          }}
        />
      )}
      {menuItem.disabled && <Disable />}
    </StyledContextMenuItem>
  );
};

export default ContextMenuItem;
