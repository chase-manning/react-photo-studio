import React from "react";
import styled from "styled-components";
import Canvas from "./Canvas";

const StyledDocument = styled.div`
  flex: 1;
  height: 100%;
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Document = () => {
  return (
    <StyledDocument>
      <Canvas />
    </StyledDocument>
  );
};

export default Document;
