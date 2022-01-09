import { useDispatch } from "react-redux";
import styled from "styled-components";
import { requestFeature } from "../../state/featureSlice";
import BrushEventHandler from "./BrushEventHandler";

const StyledEventHandlers = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const EventHanders = () => {
  const dispatch = useDispatch();

  return (
    <StyledEventHandlers
      onWheel={() => dispatch(requestFeature("Documents/Zoom/MouseWheel"))}
    >
      <BrushEventHandler />
    </StyledEventHandlers>
  );
};

export default EventHanders;
