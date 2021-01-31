import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { requestFeature } from "../state/featureSlice";

const StyledColorPicker = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  background: linear-gradient(90deg, white, #00ff44);
  overflow: hidden;
  cursor: url("cursors/color-picker.png"), auto;
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), black);
`;

const Selection = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  border: solid 1px white;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const ColorPicker = () => {
  const dispatch = useDispatch();
  return (
    <StyledColorPicker
      onClick={() => dispatch(requestFeature("Windows/Color/ColorPicker"))}
    >
      <DarkOverlay />
      <Selection />
    </StyledColorPicker>
  );
};

export default ColorPicker;
