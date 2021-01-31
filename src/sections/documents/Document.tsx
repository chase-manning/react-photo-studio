import React, { useRef } from "react";
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
  const document = useRef<HTMLDivElement>(null);

  const documentRect = document.current?.getBoundingClientRect();
  const documentPosition = {
    x: documentRect?.x || 0,
    y: documentRect?.y || 0,
  };

  return (
    <StyledDocument
      ref={document}
      cursor={tool.option === ToolOption.BRUSH ? "none" : "auto"}
    >
      <Canvas />
      <Cursor documentPosition={documentPosition} />
      <EventHanders />
    </StyledDocument>
  );
};

export default Document;
