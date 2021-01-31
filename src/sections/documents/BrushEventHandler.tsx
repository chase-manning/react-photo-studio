import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  enterDocument,
  exitDocument,
  selectCursorPosition,
  setCursorPosition,
} from "../../state/cursorSlice";
import { addEvent, EventType } from "../../state/fileSlice";
import { selectBrushSize } from "../../state/toolsSlice";

const StyledBrush = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const BrushEventHandler = () => {
  const dispatch = useDispatch();
  const cursorPosition = useSelector(selectCursorPosition);
  const brushSize = useSelector(selectBrushSize);
  const [showCursor, setShowCursor] = useState(false);

  return (
    <StyledBrush
      onMouseEnter={() => dispatch(enterDocument())}
      onMouseLeave={() => dispatch(exitDocument())}
      onMouseMove={(e) =>
        dispatch(setCursorPosition({ x: e.clientX, y: e.clientY }))
      }
      onClick={() => {
        dispatch(
          addEvent({
            type: EventType.CIRCLE,
            layer: 0,
            x: cursorPosition.x,
            y: cursorPosition.y,
            size: brushSize,
            color: 0xe74c3c,
          })
        );
      }}
    />
  );
};

export default BrushEventHandler;
