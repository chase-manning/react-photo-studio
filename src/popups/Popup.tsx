import { useState } from "react";
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
  background-color: var(--popup-bg);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 30px 5px rgba(0, 0, 0, 0.4);
`;

const Header = styled.div`
  width: 100%;
  height: 3rem;
  background-color: var(--popup-header);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--popup-text);
  user-select: none;
`;

const Content = styled.div`
  width: 100%;
  flex: 1;
  border-right: solid 1px var(--popup-border);
  border-left: solid 1px var(--popup-border);
  border-bottom: solid 1px var(--popup-border);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const EventHander = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const pos = { x: 0, y: 0 };

class State {
  grabbing: boolean = false;

  init: boolean = false;

  start: Position = pos;

  transform: Position = pos;

  lastTransform: Position = pos;
}

interface Props {
  open: boolean;
  header: string;
  content: JSX.Element;
}

const Popup = ({ open, header, content }: Props) => {
  const [state, setState] = useState(new State());

  const movementTransform = {
    x: state.lastTransform.x + state.transform.x,
    y: state.lastTransform.y + state.transform.y,
  };

  const EndMove = () => {
    if (state.grabbing)
      setState({
        ...state,
        grabbing: false,
        init: false,
        lastTransform: movementTransform,
        transform: pos,
      });
  };

  if (!open) return null;

  return (
    <StyledPopup
      style={{
        transform: `translate(${movementTransform.x}px, ${movementTransform.y}px)`,
      }}
    >
      <Window>
        <Header onMouseDown={() => setState({ ...state, grabbing: true })}>
          {header}
        </Header>
        <Content>{content}</Content>
      </Window>
      {state.grabbing && (
        <EventHander
          onMouseUp={() => EndMove()}
          onMouseMove={(e) => {
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
          }}
        />
      )}
    </StyledPopup>
  );
};

export default Popup;
