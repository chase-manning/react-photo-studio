import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { requestFeature } from "../../state/featureSlice";
import { selectTool } from "../../state/toolsSlice";
import ToolIcon from "../tools/ToolIcon";

const StyledPresets = styled.button`
  display: flex;
  height: 100%;
`;

const Icon = styled.div`
  height: 100%;
  padding: 0.4rem;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.4rem;
`;

const Arrow = styled.div`
  transform: rotate(90deg);
  color: var(--icon);
`;

const Presets = () => {
  const dispatch = useDispatch();
  const tool = useSelector(selectTool);

  return (
    <StyledPresets onClick={() => dispatch(requestFeature("Options/Presets"))}>
      <Icon>
        <ToolIcon option={tool.option} />
      </Icon>
      <Button>
        <Arrow>{">"}</Arrow>
      </Button>
    </StyledPresets>
  );
};

export default Presets;
