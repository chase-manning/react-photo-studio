import React from "react";
import styled from "styled-components";
import ColorPicker from "../../shared/ColorPicker";
import Colors from "../tools/Colors";

const StyledColorWindow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ColorContainer = styled.div`
  width: 4.6rem;
`;

const ColorWindow = () => {
  return (
    <StyledColorWindow>
      <ColorContainer>
        <Colors showButtons={false} />
      </ColorContainer>
      <ColorPicker />
    </StyledColorWindow>
  );
};

export default ColorWindow;
