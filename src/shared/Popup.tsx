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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--popup-new-text);
`;

const Content = styled.div`
  width: 100%;
  flex: 1;
  border-right: solid 1px var(--popup-new-border);
  border-left: solid 1px var(--popup-new-border);
  border-bottom: solid 1px var(--popup-new-border);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

type Props = {
  header: string;
  content: JSX.Element;
};

const Popup = (props: Props) => {
  return (
    <StyledPopup>
      <Window>
        <Header>{props.header}</Header>
        <Content></Content>
      </Window>
    </StyledPopup>
  );
};

export default Popup;
