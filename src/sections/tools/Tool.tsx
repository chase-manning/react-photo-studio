import React from "react";
import styled from "styled-components";
import { ToolCollection, ToolType } from "./toolSchema";

const StyledTool = styled.div`
  width: 100%;
  height: 2rem;
  padding: 0 0.2rem;
`;

type ToolButtonProps = {
  open: boolean;
};

const ToolButton = styled.button`
  height: 100%;
  width: 100%;
  color: var(--text);
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;

  background-color: ${(props: ToolButtonProps) =>
    props.open ? "var(--selected)" : "var(--panel)"};
  border: solid 1px
    ${(props: ToolButtonProps) =>
      props.open ? "var(--hover-border)" : "var(--panel)"};
  :hover {
    background-color: ${(props: ToolButtonProps) =>
      props.open ? "var(--selected)" : "var(--hover-bg)"};
    border: solid 1px var(--hover-border);
  }
`;

type Props = {
  collection: ToolCollection;
};

const Tool = (props: Props) => {
  return (
    <StyledTool>
      <ToolButton open={props.collection.active}>Hi</ToolButton>
    </StyledTool>
  );
};

export default Tool;
