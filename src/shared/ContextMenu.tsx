import React from "react";
import styled from "styled-components";

const StyledContextMenu = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Exit = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Menu = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: var(--panel);
  display: flex;
  flex-direction: column;
`;

type Props = {
  open: boolean;
};

const ContextMenu = (props: Props) => {
  if (!props.open) return null;

  return (
    <StyledContextMenu>
      <Exit />
      <Menu>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </Menu>
    </StyledContextMenu>
  );
};

export default ContextMenu;
