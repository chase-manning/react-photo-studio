import React from "react";
import styled from "styled-components";

const StyledColorPicker = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, white, #00ff44);
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), black);
`;

const ColorPicker = () => {
  return (
    <StyledColorPicker>
      <DarkOverlay />
    </StyledColorPicker>
  );
};

export default ColorPicker;
