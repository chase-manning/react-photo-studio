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

const Test = styled.div`
  width: 100%;
`;

const Tools = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledTools>
      <Expandable open={open} toggle={() => FeatureRequest("Tools/Expand")} />
    </StyledTools>
  );
};

export default Tools;
