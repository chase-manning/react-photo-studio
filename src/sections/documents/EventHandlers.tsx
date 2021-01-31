import React from "react";
import styled from "styled-components";
import BrushEventHandler from "./BrushEventHandler";

const StyledEventHandlers = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const EventHanders = () => {
  return (
    <StyledEventHandlers>
      <BrushEventHandler />
    </StyledEventHandlers>
  );
};

export default EventHanders;
