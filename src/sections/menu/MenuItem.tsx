import React, { useState } from "react";
import styled from "styled-components";
import ContextMenu from "../../shared/ContextMenu";
import { MenuItemType } from "./menu-items";

const StyledMenuItem = styled.div`
  position: relative;
  height: 100%;
  padding: 0 1rem;
  color: var(--text);
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  border: solid 1px var(--panel);
  :hover {
    background-color: var(--hover-bg);
    border: solid 1px var(--hover-border);
  }
`;

type Props = {
  menuItem: MenuItemType;
};

const MenuItem = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledMenuItem onClick={() => setOpen(true)}>
      {props.menuItem.name}
      <ContextMenu open={open} />
    </StyledMenuItem>
  );
};

export default MenuItem;
