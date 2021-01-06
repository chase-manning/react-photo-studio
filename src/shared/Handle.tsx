import React from "react";
import styled from "styled-components";
import { FeatureRequest } from "../services/AnalyticsService";

const StyledHandle = styled.button`
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Lines = styled.div`
  height: 50%;
  display: flex;
`;

const Line = styled.div`
  height: 100%;
  width: 0.1rem;
  margin-right: 0.1rem;
  background-color: var(--expandable);
`;

const Handle = () => {
  return (
    <StyledHandle onClick={() => FeatureRequest("Tools/Handle")}>
      <Lines>
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
      </Lines>
    </StyledHandle>
  );
};

export default Handle;
