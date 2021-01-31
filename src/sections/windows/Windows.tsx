import React, { useState } from "react";
import styled from "styled-components";
import Expandable from "../../shared/Expandable";
import Tabs, { TabType } from "../../shared/Tabs";
import windows from "./windowSchema";
import Window from "./Window";
import { useDispatch } from "react-redux";
import { requestFeature } from "../../state/featureSlice";

const StyledWindows = styled.div`
  position: relative;
  width: 33rem;
  height: 100%;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
`;

const WindowResize = styled.div`
  position: absolute;
  width: 0.4rem;
  height: 100%;
  top: 0;
  left: -0.2rem;
  cursor: ew-resize;
`;

const isImplemented = (label: string) => {
  const implemented = ["Layers"];
  return implemented.indexOf(label) >= 0;
};

const Windows = () => {
  const dispatch = useDispatch();
  const [heights] = useState([27, 0, 73]);

  return (
    <StyledWindows>
      <Expandable
        open={true}
        right={true}
        toggle={() => dispatch(requestFeature("Windows/Expandable"))}
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
            key={index}
            tabs={tabs}
            height={heights[index] + "%"}
            bottom={index === windows.length - 1}
          />
        );
      })}
      <WindowResize
        onClick={() => dispatch(requestFeature("Windows/Resize"))}
      />
    </StyledWindows>
  );
};

export default Windows;
