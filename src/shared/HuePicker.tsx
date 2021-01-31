import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { requestFeature } from "../state/featureSlice";

const StyledHuePicker = styled.div`
  height: 100%;
`;

const Colors = styled.div`
  height: 100%;
  width: 2rem;
  background: linear-gradient(
    #ff0000,
    #ff00ff,
    #0000ff,
    #00ffff,
    #00ff00,
    #ffff00,
    #ff0000
  );
  margin-left: 1.8rem;
`;

const HuePicker = () => {
  const dispatch = useDispatch();
  return (
    <StyledHuePicker
      onClick={() => dispatch(requestFeature("Windows/Color/Hue"))}
    >
      <Colors />
    </StyledHuePicker>
  );
};

export default HuePicker;
