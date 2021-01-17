import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Position, selectCursorPosition } from "../../state/cursorSlice";

const StyledCursor = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 10px;
  width: 10px;
  background-color: red;
`;

type Props = {
  documentPosition: Position;
};

const Cursor = (props: Props) => {
  const cursorPosition = useSelector(selectCursorPosition);
  const x = cursorPosition.x - props.documentPosition.x + "px";
  const y = cursorPosition.y - props.documentPosition.y + "px";
  //   const x = cursorPosition.x + "px";
  //   const y = cursorPosition.y + "px";

  return <StyledCursor style={{ transform: `translate(${x},${y})` }} />;
};

export default Cursor;
