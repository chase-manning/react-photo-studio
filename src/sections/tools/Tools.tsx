import React, { useState } from "react";
import styled from "styled-components";
import { FeatureRequest } from "../../services/AnalyticsService";
import Expandable from "../../shared/Expandable";

const StyledTools = styled.div`
  height: 100%;
  width: 4rem;
  display: flex;
  margin-right: 0.1rem;
  background-color: var(--panel);
  border: solid 0.1rem var(--border);
`;

const Tools = () => {
  return (
    <StyledTools>
      <Expandable open={false} toggle={() => FeatureRequest("Tools/Expand")} />
    </StyledTools>
  );
};

export default Tools;
