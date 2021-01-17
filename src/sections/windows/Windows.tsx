import React from "react";
import styled from "styled-components";
import { FeatureRequest } from "../../services/AnalyticsService";
import Expandable from "../../shared/Expandable";
import Tabs, { TabType } from "../../shared/Tabs";
import windows from "./windowSchema";
import Window from "./Window";

const StyledWindows = styled.div`
  width: 33rem;
  height: 100%;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
`;

const Filler = styled.div`
  flex: 1;
  width: 100%;
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
      {windows.map((window: string[]) => {
        const tabs: TabType[] = [];
        window.forEach((label: string) =>
          tabs.push({ label: label, content: <Window window={label} /> })
        );
        return <Tabs tabs={tabs} />;
      })}
      <Filler />
    </StyledWindows>
  );
};

export default Windows;
