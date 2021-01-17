import React from "react";
import styled from "styled-components";
import { FeatureRequest } from "../../services/AnalyticsService";
import Expandable from "../../shared/Expandable";

const StyledWindows = styled.div`
  width: 33rem;
  height: 100%;
  background-color: var(--panel);
`;

const Windows = () => {
  return (
    <StyledWindows>
      <Expandable
        open={true}
        right={true}
        toggle={() => FeatureRequest("Windows/Expandable")}
      />
    </StyledWindows>
  );
};

export default Windows;
