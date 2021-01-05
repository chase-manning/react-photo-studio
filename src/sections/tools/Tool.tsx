import React from "react";
import styled from "styled-components";

const StyledTool = styled.div`
  width: 2.4rem;
  height: 2rem;
`;

type MenuItemProps = {
  open: boolean;
};

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

const Tool = () => {
  return <StyledTool></StyledTool>;
};

export default Tool;
