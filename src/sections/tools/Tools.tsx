import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Expandable from "../../shared/Expandable";
import Handle from "../../shared/Handle";
import { selectTools } from "../../state/toolsSlice";
import Colors from "../../shared/Colors";
import Tool from "./Tool";
import { ToolCollection } from "../../state/toolSchema";
import { requestFeature } from "../../state/featureSlice";

const StyledTools = styled.div`
  height: 100%;
  width: 4rem;
  margin-right: 0.1rem;
  background-color: var(--panel);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-top: solid 0.1rem var(--border);
  display: flex;
  flex-direction: column;
  border: solid 0.1rem var(--border);
`;

const ToolsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0.7rem;
`;

const Tools = () => {
  const dispatch = useDispatch();
  const tools = useSelector(selectTools);

  return (
    <StyledTools>
      <Expandable
        open={false}
        toggle={() => dispatch(requestFeature("Tools/Expand"))}
      />
      <Container>
        <Handle component="Tools" />
        <ToolsContainer>
          {tools.map((tool: ToolCollection, index: number) => (
            <Tool key={index} collection={tool} />
          ))}
        </ToolsContainer>
        <Colors showButtons parent="Tools" />
      </Container>
    </StyledTools>
  );
};

export default Tools;
