import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectCursorDocument,
  selectCursorPosition,
} from "../../state/cursorSlice";
import { selectBrushSize } from "../../state/toolsSlice";

const StyledCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;

interface BrushCircleProps {
  size: number;
}

const BrushCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props: BrushCircleProps) => `${props.size}px`};
  height: ${(props: BrushCircleProps) => `${props.size}px`};
  border: solid 1px black;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const Cursor = () => {
  const brushSize = useSelector(selectBrushSize);
  const cursorPosition = useSelector(selectCursorPosition);
  const cursorDocument = useSelector(selectCursorDocument);

  if (!cursorDocument) return null;

  return (
    <StyledCursor
      style={{
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
      }}
    >
      <BrushCircle size={brushSize} />
    </StyledCursor>
  );
};

export default Cursor;
