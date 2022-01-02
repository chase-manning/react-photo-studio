import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setActiveTool } from "../../state/toolsSlice";
import ToolIcon from "./ToolIcon";
import { ToolCollection, ToolType } from "../../state/toolSchema";
import Button from "../../styles/Button";
import ContextIndicator from "../../styles/ContextIndicator";
import { requestFeature } from "../../state/featureSlice";

const StyledTool = styled.div`
  width: 100%;
  height: 2.7rem;
  padding: 0 0.2rem;
`;

interface Props {
  collection: ToolCollection;
}

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
            () => dispatch(requestFeature(`Tools/${tool.name}/Hover Menu`)),
            2000
          )
        )
      }
      onMouseLeave={() => window.clearTimeout(timer)}
    >
      <Button
        onClick={() => {
          if (tool.implemented) dispatch(setActiveTool(tool.option));
          else dispatch(requestFeature(`Tools/${tool.name}`));
        }}
        onContextMenu={(event: SyntheticEvent) => {
          event.preventDefault();
          if (props.collection.tools.length === 1) return;
          dispatch(requestFeature(`Tools/${tool.name}/Context Menu`));
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
