import React from "react";
import styled from "styled-components";
import Menu from "./sections/menu/Menu";
import Options from "./sections/options/Options";
import Tools from "./sections/tools/Tools";

const StyledApp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Horizontal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const App = () => {
  return (
    <StyledApp>
      <Menu />
      <Options />
      <Horizontal>
        <Tools />
      </Horizontal>
    </StyledApp>
  );
};

export default App;
