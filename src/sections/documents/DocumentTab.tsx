import React from "react";
import styled from "styled-components";

const StyledTab = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-right: solid 1px var(--border);
`;

const CloseButton = styled.button`
  width: 1rem;
  height: 1rem;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: var(--close-hover);
  }
`;

const Label = styled.div`
  color: var(--tab-text);
  font-size: 1.2rem;
`;

const DocumentTab = () => {
  return (
    <StyledTab>
      <CloseButton>x</CloseButton>
      <Label>Untitled-1 @ 100% (RGB/8)</Label>
    </StyledTab>
  );
};

export default DocumentTab;
