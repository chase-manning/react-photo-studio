import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FeatureRequest } from "../../services/AnalyticsService";
import Expandable from "../../shared/Expandable";
import Handle from "../../shared/Handle";
import { selectTools } from "../../state/toolsSlice";
import Colors from "./Colors";
import Tool from "./Tool";
import { ToolCollection } from "../../state/toolSchema";

const StyledTools = styled.div`
  height: 100%;
  width: 4rem;
  margin-right: 0.1rem;
  background-color: var(--panel);
  border: solid 0.1rem var(--border);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-top: solid 0.1rem var(--border);
  display: flex;
  flex-direction: column;
`;

const ToolsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0.7rem;
`;

const Tools = () => {
  const tools = useSelector(selectTools);

  return (
    <StyledTools>
      <Expandable open={false} toggle={() => FeatureRequest("Tools/Expand")} />
      <Container>
        <Handle />
        <ToolsContainer>
          {tools.map((tool: ToolCollection, index: number) => (
            <Tool key={index} collection={tool} />
          ))}
        </ToolsContainer>
        <Colors />
      </Container>
    </StyledTools>
  );
};

export default Tools;
