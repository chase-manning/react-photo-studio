import React from "react";
import styled from "styled-components";
import ColorPicker from "../../shared/ColorPicker";

const StyledColorWindow = styled.div`
  width: 100%;
  height: 100%;
`;

const ColorWindow = () => {
  return (
    <StyledColorWindow>
      <ColorPicker />
    </StyledColorWindow>
  );
};

export default ColorWindow;
