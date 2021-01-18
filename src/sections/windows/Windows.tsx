import React, { useState } from "react";
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

const isImplemented = (label: string) => {
  const implemented = ["Layers"];
  return implemented.indexOf(label) >= 0;
};

const Windows = () => {
  const [heights, setHeights] = useState([0, 0, 100]);

  return (
    <StyledWindows>
      <Expandable
        open={true}
        right={true}
        toggle={() => FeatureRequest("Windows/Expandable")}
      />
      {windows.map((window: string[], index: number) => {
        const tabs: TabType[] = [];
        window.forEach((label: string) =>
          tabs.push({
            label: label,
            content: <Window window={label} />,
            implemented: isImplemented(label),
          })
        );
        return (
          <Tabs
            tabs={tabs}
            height={heights[index] + "%"}
            bottom={index === windows.length - 1}
          />
        );
      })}
    </StyledWindows>
  );
};

export default Windows;
