import React from "react";
import styled from "styled-components";
import Canvas from "./Canvas";
import Cursor from "./Cursor";

const StyledDocument = styled.div`
  position: relative;
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
      <Cursor />
    </StyledDocument>
  );
};

export default Document;
