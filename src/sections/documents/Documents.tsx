import React from "react";
import styled from "styled-components";
import Document from "./Document";
import DocumentFooter from "./DocumentFooter";
import DocumentTabs from "./DocumentTabs";

const StyledDocuments = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: solid 1px var(--border);
`;

const Center = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Sidebar = styled.div`
  height: 100%;
  width: 2rem;
  background-color: var(--sidebar);
`;

const Documents = () => {
  return (
    <StyledDocuments>
      <DocumentTabs />
      <Center>
        <Document />
        <Sidebar />
      </Center>
      <DocumentFooter />
    </StyledDocuments>
  );
};

export default Documents;
