import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  Position,
  selectCursorDocument,
  selectCursorPosition,
} from "../../state/cursorSlice";
import { selectBrushSize } from "../../state/toolsSlice";

const StyledCursor = styled.div`
  top: 0;
  left: 0;
  position: absolute;
`;

type BrushCircleProps = {
  size: number;
};

const BrushCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props: BrushCircleProps) => props.size + "px"};
  height: ${(props: BrushCircleProps) => props.size + "px"};
  border: solid 1px black;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

type Props = {
  documentPosition: Position;
};

const Cursor = (props: Props) => {
  const brushSize = useSelector(selectBrushSize);
  const cursorPosition = useSelector(selectCursorPosition);
  const cursorDocument = useSelector(selectCursorDocument);

  const x = cursorPosition.x - props.documentPosition.x + "px";
  const y = cursorPosition.y - props.documentPosition.y + "px";

  if (!cursorDocument) return null;

  return (
    <StyledCursor style={{ transform: `translate(${x},${y})` }}>
      <BrushCircle size={brushSize!} />
    </StyledCursor>
  );
};

export default Cursor;
