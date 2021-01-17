import React from "react";
import styled from "styled-components";

const StyledDocumentTabs = styled.div`
  width: 100%;
  height: 3rem;
  background-color: var(--expandable);
  border-bottom: solid 1px var(--border);
`;

const DocumentTabs = () => {
  return <StyledDocumentTabs></StyledDocumentTabs>;
};

export default DocumentTabs;
