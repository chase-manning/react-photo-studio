import React from "react";
import styled from "styled-components";
import { MenuItemType } from "../sections/menu/menu-items";
import { ReactComponent as ArrowIcon } from "../assets/svgs/navigation/triangle-right.svg";

const StyledContextMenuItem = styled.div``;

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
  menuItem: MenuItemType;
};

const ContextMenuItem = (props: Props) => {
  return (
    <StyledContextMenuItem key={props.menuItem.name}>
      <Button>
        <ItemText>{props.menuItem.name}</ItemText>
        {props.menuItem.items.length > 0 && <Arrow />}
      </Button>
    </StyledContextMenuItem>
  );
};

export default ContextMenuItem;
