import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  enterDocument,
  exitDocument,
  mouseDown,
  mouseUp,
  selectCanvasPosition,
  selectCursorCanvasPosition,
  selectCursorDown,
  setCursorPosition,
} from "../../state/cursorSlice";
import { addEvent, addPoint } from "../../state/fileSlice";
import { selectBrushSize, selectPrimaryColor } from "../../state/toolsSlice";

const StyledBrush = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const BrushEventHandler = () => {
  const dispatch = useDispatch();
  const cursorPosition = useSelector(selectCursorCanvasPosition);
  const brushSize = useSelector(selectBrushSize);
  const color = useSelector(selectPrimaryColor);
  const drawing = useSelector(selectCursorDown);
  const canvasPosition = useSelector(selectCanvasPosition);
  const circleColor = parseInt(`0x${color.substring(1, color.length)}`, 16);

  return (
    <StyledBrush
      onMouseEnter={() => dispatch(enterDocument())}
      onMouseLeave={() => dispatch(exitDocument())}
      onMouseMove={(e) => {
        dispatch(setCursorPosition({ x: e.clientX, y: e.clientY }));
        if (drawing)
          dispatch(
            addPoint({
              x: e.clientX - canvasPosition.x,
              y: e.clientY - canvasPosition.y,
            })
          );
      }}
      onMouseDown={() => {
        dispatch(mouseDown());
        dispatch(
          addEvent({
            type: "line",
            layer: 0,
            points: [{ x: cursorPosition.x, y: cursorPosition.y }],
            size: brushSize,
            color: circleColor,
          })
        );
      }}
      onMouseUp={() => {
        dispatch(mouseUp());
      }}
    />
  );
};

export default BrushEventHandler;
