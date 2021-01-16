import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setActiveTool } from "../../state/toolsSlice";
import ToolIcon from "./ToolIcon";
import { ToolCollection, ToolType } from "../../state/toolSchema";
import { ReactComponent as ArrowIcon } from "../../assets/svgs/navigation/triangle-right.svg";
import { FeatureRequest } from "../../services/AnalyticsService";
import Button from "../../styles/Button";

const StyledTool = styled.div`
  width: 100%;
  height: 2.7rem;
  padding: 0 0.2rem;
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
  const [timer, setTimer] = useState(0);
  const tool = props.collection.tools.filter(
    (tool: ToolType) => tool.selected
  )[0];

  return (
    <StyledTool
      onMouseEnter={() =>
        setTimer(
          window.setTimeout(
            () => FeatureRequest("Tools/" + tool.name + "/Hover Menu"),
            1000
          )
        )
      }
      onMouseLeave={() => window.clearTimeout(timer)}
    >
      <Button
        onClick={() => {
          if (tool.implemented) dispatch(setActiveTool(tool.option));
          else FeatureRequest("Tools/" + tool.name);
        }}
        onContextMenu={(event: SyntheticEvent) => {
          event.preventDefault();
          if (props.collection.tools.length === 1) return;
          FeatureRequest("Tools/" + tool.name + "/Context Menu");
        }}
        selected={props.collection.active}
      >
        <ToolIcon option={tool.option} />
        {props.collection.tools.length > 1 && <ContextIndicator />}
      </Button>
    </StyledTool>
  );
};

export default Tool;
