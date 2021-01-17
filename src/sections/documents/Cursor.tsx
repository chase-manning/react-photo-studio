import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Position, selectCursorPosition } from "../../state/cursorSlice";

const StyledCursor = styled.div`
  position: absolute;
  top: ${(props: Position) => props.y};
  left: ${(props: Position) => props.x};
  height: 10px;
  width: 10px;
  background-color: red;
`;

const Cursor = () => {
  const cursorPosition = useSelector(selectCursorPosition);

  return <StyledCursor x={cursorPosition.x} y={cursorPosition.y} />;
};

export default Cursor;
