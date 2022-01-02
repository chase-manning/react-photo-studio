import React, { useState } from "react";
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

type Props = {
  menuItem: ItemType;
  close: () => void;
};

const ContextMenuItem = (props: Props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  return (
    <StyledContextMenuItem
      onMouseEnter={() => {
        if (!props.menuItem.disabled) setOpen(true);
      }}
      onMouseLeave={() => setOpen(false)}
    >
      <Button
        onClick={() => {
          if (props.menuItem.action) dispatch(props.menuItem.action());
          props.close();
        }}
      >
        <ItemText>{props.menuItem.name}</ItemText>
        <Icon>{props.menuItem.itemSets && <Arrow />}</Icon>
      </Button>
      {props.menuItem.itemSets && (
        <ContextMenu
          subMenu
          open={open}
          itemSets={props.menuItem.itemSets}
          close={() => {
            setOpen(false);
            props.close();
          }}
        />
      )}
      {props.menuItem.disabled && <Disable />}
    </StyledContextMenuItem>
  );
};

export default ContextMenuItem;
