import React from "react";
import styled from "styled-components";
import { FeatureRequest } from "../../services/AnalyticsService";
import Expandable from "../../shared/Expandable";
import Handle from "../../shared/Handle";

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

const Tools = () => {
  return (
    <StyledTools>
      <Expandable open={false} toggle={() => FeatureRequest("Tools/Expand")} />
      <Container>
        <Handle />
      </Container>
    </StyledTools>
  );
};

export default Tools;
