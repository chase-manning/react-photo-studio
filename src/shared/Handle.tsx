import React from "react";
import styled from "styled-components";
import { FeatureRequest } from "../services/AnalyticsService";

const StyledHandle = styled.button`
  width: ${(props: Props) => (props.sideways ? "1rem" : "100%")};
  height: ${(props: Props) => (props.sideways ? "100%" : "1rem")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Lines = styled.div`
  width: ${(props: Props) => (props.sideways ? "50%" : "auto")};
  height: ${(props: Props) => (props.sideways ? "auto" : "50%")};
  display: flex;
  flex-direction: ${(props: Props) => (props.sideways ? "column" : "row")};
`;

const Line = styled.div`
  width: ${(props: Props) => (props.sideways ? "100%" : "0.1rem")};
  height: ${(props: Props) => (props.sideways ? "0.1rem" : "100%")};
  margin-top: ${(props: Props) => (props.sideways ? "0.1rem" : "0")};
  margin-right: ${(props: Props) => (props.sideways ? "0" : "0.1rem")};
  background-color: var(--expandable);
`;

type Props = {
  sideways?: boolean;
};

const Handle = (props: Props) => {
  return (
    <StyledHandle
      onClick={() => FeatureRequest("Tools/Handle")}
      sideways={props.sideways}
    >
      <Lines sideways={props.sideways}>
        <Line sideways={props.sideways} />
        <Line sideways={props.sideways} />
        <Line sideways={props.sideways} />
        <Line sideways={props.sideways} />
        <Line sideways={props.sideways} />
        <Line sideways={props.sideways} />
        <Line sideways={props.sideways} />
        <Line sideways={props.sideways} />
        <Line sideways={props.sideways} />
        <Line sideways={props.sideways} />
      </Lines>
    </StyledHandle>
  );
};

export default Handle;
