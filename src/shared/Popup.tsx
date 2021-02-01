import React, { useState } from "react";
import styled from "styled-components";
import { Position } from "../state/cursorSlice";

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
  user-select: none;
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

const pos = { x: 0, y: 0 };

class State {
  grabbing: boolean = false;
  init: boolean = false;
  start: Position = pos;
  transform: Position = pos;
  lastTransform: Position = pos;
}

type Props = {
  header: string;
  content: JSX.Element;
};

const Popup = (props: Props) => {
  const [state, setState] = useState(new State());

  const EndMove = () => {
    if (state.grabbing)
      setState({
        ...state,
        grabbing: false,
        init: false,
        lastTransform: state.transform,
        transform: pos,
      });
  };

  return (
    <StyledPopup
      style={{
        transform: `translate(${
          state.lastTransform.x + state.transform.x + "px"
        }, ${state.lastTransform.y + state.transform.y + "px"})`,
      }}
    >
      <Window>
        <Header
          onMouseDown={() => setState({ ...state, grabbing: true })}
          onMouseUp={() => EndMove()}
          onMouseLeave={() => EndMove()}
          onMouseMove={(e) => {
            if (state.grabbing) {
              if (!state.init) {
                setState({
                  ...state,
                  start: { x: e.clientX, y: e.clientY },
                  init: true,
                });
              } else {
                setState({
                  ...state,
                  transform: {
                    x: e.clientX - state.start.x,
                    y: e.clientY - state.start.y,
                  },
                });
              }
            }
          }}
        >
          {props.header}
        </Header>
        <Content></Content>
      </Window>
    </StyledPopup>
  );
};

export default Popup;
