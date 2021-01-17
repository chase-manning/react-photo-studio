import React from "react";
import styled from "styled-components";

const StyledDocumentFooter = styled.div`
  width: 100%;
  height: 1.6rem;
  display: flex;
  background-color: var(--sidebar);
`;

const Zoom = styled.div`
  height: 100%;
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--hover-bg);
  border-top: solid 1px var(--expandable);
  border-right: solid 1px var(--expandable);
  color: var(--input-text);
`;

const DetailsContainer = styled.div`
  height: 100%;
  width: 15rem;
  display: flex;
  align-items: center;
  background-color: var(--panel);
  border-top: solid 1px var(--expandable);
  border-right: solid 1px var(--expandable);
`;

const Details = styled.button`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--label);
`;

const Button = styled.button`
  width: 1rem;
`;

const DocumentFooter = () => {
  return (
    <StyledDocumentFooter>
      <Zoom>100%</Zoom>
      <DetailsContainer>
        <Details>700 px x 500 px (300 ppi)</Details>
        <Button>F</Button>
      </DetailsContainer>
    </StyledDocumentFooter>
  );
};

export default DocumentFooter;
