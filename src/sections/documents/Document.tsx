import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ToolOption } from "../../state/toolSchema";
import { selectTool } from "../../state/toolsSlice";
import Canvas from "./Canvas";
import Cursor from "./Cursor";
import EventHanders from "./EventHandlers";

type DocumentProps = {
  cursor: string;
};

const StyledDocument = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props: DocumentProps) => props.cursor};
`;

const Document = () => {
  const tool = useSelector(selectTool);

  return (
    <StyledDocument cursor={tool.option === ToolOption.BRUSH ? "none" : "auto"}>
      <Canvas />
      <Cursor />
      <EventHanders />
    </StyledDocument>
  );
};

export default Document;
