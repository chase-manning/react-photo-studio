import React from "react";
import styled from "styled-components";

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Window = styled.div`
  width: 50%;
  height: 50%;
  background-color: var(--popup-new-bg);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.4);
`;

const Header = styled.div`
  width: 100%;
  height: 3rem;
  background-color: var(--popup-new-header);
`;

const Content = styled.div`
  width: 100%;
  flex: 1;
`;

const Popup = () => {
  return (
    <StyledPopup>
      <Window>
        <Header></Header>
        <Content></Content>
      </Window>
    </StyledPopup>
  );
};

export default Popup;
