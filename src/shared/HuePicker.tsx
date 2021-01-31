import React from "react";
import styled from "styled-components";

const StyledHuePicker = styled.div`
  height: 100%;
  width: 2.1rem;
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
  return <StyledHuePicker></StyledHuePicker>;
};

export default HuePicker;
