import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setActiveTool } from "../../state/toolsSlice";
import ToolIcon from "./ToolIcon";
import { ToolCollection, ToolType } from "./toolSchema";
import { ReactComponent as ArrowIcon } from "../../assets/svgs/navigation/triangle-right.svg";
import { FeatureRequest } from "../../services/AnalyticsService";

const StyledTool = styled.div`
  width: 100%;
  height: 2.7rem;
  padding: 0 0.2rem;
`;

type ToolButtonProps = {
  open: boolean;
};

const ToolButton = styled.button`
  position: relative;
  height: 100%;
  width: 100%;
  color: var(--text);
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;
  padding: 0.4rem;

  background-color: ${(props: ToolButtonProps) =>
    props.open ? "var(--selected)" : "var(--panel)"};
  border: solid 1px
    ${(props: ToolButtonProps) =>
      props.open ? "var(--hover-border)" : "var(--panel)"};
  :hover {
    background-color: ${(props: ToolButtonProps) =>
      props.open ? "var(--selected)" : "var(--hover-bg)"};
    border: solid 1px var(--hover-border);
  }
`;

const ContextIndicator = styled(ArrowIcon)`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 0.5rem;
  fill: var(--icon);
  transform: rotate(45deg);
`;

type Props = {
  collection: ToolCollection;
};

const Tool = (props: Props) => {
  const dispatch = useDispatch();
  const tool = props.collection.tools.filter(
    (tool: ToolType) => tool.selected
  )[0];

  return (
    <StyledTool>
      <ToolButton
        onClick={() => {
          if (tool.implemented) dispatch(setActiveTool(tool.option));
          else FeatureRequest("Tools/" + tool.name);
        }}
        open={props.collection.active}
      >
        <ToolIcon option={tool.option} />
        {props.collection.tools.length > 1 && <ContextIndicator />}
      </ToolButton>
    </StyledTool>
  );
};

export default Tool;
