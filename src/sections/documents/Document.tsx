import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCursorPosition } from "../../state/cursorSlice";
import { requestFeature } from "../../state/featureSlice";
import { ToolOption } from "../../state/toolSchema";
import { selectTool } from "../../state/toolsSlice";
import Canvas from "./Canvas";
import Cursor from "./Cursor";

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

const EventHandler = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Document = () => {
  const dispatch = useDispatch();
  const tool = useSelector(selectTool);

  const document = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = useState(false);

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
      {showCursor && tool.option === ToolOption.BRUSH && (
        <Cursor documentPosition={documentPosition} />
      )}
      <EventHandler
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
        onMouseMove={(e) =>
          dispatch(setCursorPosition({ x: e.clientX, y: e.clientY }))
        }
        onClick={() => dispatch(requestFeature("Document/" + tool.name))}
      />
    </StyledDocument>
  );
};

export default Document;
