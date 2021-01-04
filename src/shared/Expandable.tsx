import React from "react";
import styled from "styled-components";

type ExpandableProps = {
  right: boolean;
};

const StyledExpandable = styled.div`
  width: 100%;
  height: 1rem;
  background-color: var(--expandable);
  display: flex;
  justify-content: ${(props: ExpandableProps) =>
    props.right ? "right" : "left"};
`;

const ToggleButton = styled.button`
  height: 100%;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text);

  border: solid 0.1rem var(--expandable);
  :hover {
    background-color: #474747;
    border: solid 0.1rem var(--border);
  }
`;

type Props = {
  open: boolean;
  right?: boolean;
  toggle: () => void;
};

const Expandable = (props: Props) => {
  const arrows = () => {
    if (props.right) return props.open ? ">>" : "<<";
    else return props.open ? "<<" : ">>";
  };

  return (
    <StyledExpandable right={!!props.right}>
      <ToggleButton onClick={() => props.toggle()}>{arrows()}</ToggleButton>
    </StyledExpandable>
  );
};

export default Expandable;
