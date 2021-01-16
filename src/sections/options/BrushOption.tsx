import React from "react";
import styled from "styled-components";
import { FeatureRequest } from "../../services/AnalyticsService";
import { OptionType } from "../../state/toolSchema";

const StyledBrushOption = styled.button`
  display: flex;
  height: 100%;
`;

const BrushContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% + 0.6rem);
  transform: translateY(-0.3rem);
`;

const Brush = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: var(--white);
`;

const Label = styled.div`
  width: 100%;
  font-size: 12px;
  color: var(--label);
  text-align: center;
  user-select: none;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.4rem;
`;

const Arrow = styled.div`
  transform: rotate(90deg);
  color: var(--icon);
`;

type Props = {
  option: OptionType;
};

const BrushOption = (props: Props) => {
  return (
    <StyledBrushOption onClick={() => FeatureRequest("Options/Brush")}>
      <BrushContainer>
        <Brush />
        <Label>{props.option.value}</Label>
      </BrushContainer>
      <Button>
        <Arrow>{">"}</Arrow>
      </Button>
    </StyledBrushOption>
  );
};

export default BrushOption;
