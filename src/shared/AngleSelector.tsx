import React from "react";
import styled from "styled-components";
import { FeatureRequest } from "../services/AnalyticsService";
import angle from "../assets/options/angle.svg";

const StyledAngleSelector = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  color: var(--label);
  margin-right: 0.4rem;
  cursor: url("cursors/scrub.png"), auto;
  user-select: none;
`;

const Input = styled.div`
  background-color: var(--hover-bg);
  border: solid 1px var(--input-border);
  color: var(--input-text);
  padding: 0.2rem 0.3rem;
  width: 4rem;
  cursor: text;
`;

const Icon = styled.img`
  height: 1rem;
`;

type Props = {
  value: number;
};

const AngleSelector = (props: Props) => {
  return (
    <StyledAngleSelector>
      <Label onClick={() => FeatureRequest("Angle Selector/Label Scrub")}>
        <Icon src={angle} />
      </Label>
      <Input onClick={() => FeatureRequest("Angle Selector/Text Edit")}>
        {props.value + "°"}
      </Input>
    </StyledAngleSelector>
  );
};

export default AngleSelector;
