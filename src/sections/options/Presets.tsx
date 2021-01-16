import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectTool } from "../../state/toolsSlice";
import ToolIcon from "../tools/ToolIcon";

const StyledPresets = styled.div`
  display: flex;
  height: 100%;
`;

const Icon = styled.img`
  height: 100%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.div`
  transform: rotate(90deg);
  color: var(--icon);
`;

const Presets = () => {
  const tool = useSelector(selectTool);

  return (
    <StyledPresets>
      <ToolIcon option={tool.option} />
      <Button>
        <Arrow>{">"}</Arrow>
      </Button>
    </StyledPresets>
  );
};

export default Presets;
