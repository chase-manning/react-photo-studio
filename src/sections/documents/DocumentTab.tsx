import React from "react";
import styled from "styled-components";
import cross from "../../assets/svgs/navigation/cross.svg";

const StyledTab = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-right: solid 1px var(--border);
  background-color: var(--panel);
  padding: 0.5rem;
`;

const CloseButton = styled.button`
  width: 1.4rem;
  height: 1.2rem;
  border-radius: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: var(--close-hover);
  }
`;

const Cross = styled.img`
  height: 0.6rem;
`;

const Label = styled.div`
  color: var(--tab-text);
  font-size: 1.2rem;
  padding: 0 0.5rem;
`;

const DocumentTab = () => {
  return (
    <StyledTab>
      <CloseButton>
        <Cross src={cross} />
      </CloseButton>
      <Label>Untitled-1 @ 100% (RGB/8)</Label>
    </StyledTab>
  );
};

export default DocumentTab;
