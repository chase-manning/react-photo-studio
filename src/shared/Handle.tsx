import React from "react";
import styled from "styled-components";
import { FeatureRequest } from "../services/AnalyticsService";

type StyleProps = {
  sideways?: boolean;
};

const StyledHandle = styled.button`
  width: ${(props: StyleProps) => (props.sideways ? "1rem" : "100%")};
  height: ${(props: StyleProps) => (props.sideways ? "100%" : "1rem")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Lines = styled.div`
  width: ${(props: StyleProps) => (props.sideways ? "50%" : "auto")};
  height: ${(props: StyleProps) => (props.sideways ? "auto" : "50%")};
  display: flex;
  flex-direction: ${(props: StyleProps) => (props.sideways ? "column" : "row")};
`;

const Line = styled.div`
  width: ${(props: StyleProps) => (props.sideways ? "100%" : "0.1rem")};
  height: ${(props: StyleProps) => (props.sideways ? "0.1rem" : "100%")};
  margin-top: ${(props: StyleProps) => (props.sideways ? "0.1rem" : "0")};
  margin-right: ${(props: StyleProps) => (props.sideways ? "0" : "0.1rem")};
  background-color: var(--expandable);
`;

type Props = {
  component: string;
  sideways?: boolean;
};

const Handle = (props: Props) => {
  return (
    <StyledHandle
      onClick={() => FeatureRequest(props.component + "/Handle")}
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
