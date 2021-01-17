import React from "react";
import styled from "styled-components";
import DocumentTab from "./DocumentTab";

const StyledDocumentTabs = styled.div`
  width: 100%;
  height: 3rem;
  background-color: var(--expandable);
  border-bottom: solid 1px var(--border);
  display: flex;
`;

const DocumentTabs = () => {
  return (
    <StyledDocumentTabs>
      <DocumentTab />
    </StyledDocumentTabs>
  );
};

export default DocumentTabs;
