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
  height: calc(100% + 0.2rem);
  transform: translateY(-0.1rem);
  justify-content: space-between;
  align-items: center;
  margin: 0 0.6rem;
`;

type BrushProps = {
  size: number;
};

const Brush = styled.div`
  height: ${(props: BrushProps) => props.size + "rem"};
  width: ${(props: BrushProps) => props.size + "rem"};
  border-radius: 50%;
  background-color: var(--white);
`;

const Label = styled.div`
  width: 100%;
  font-size: 1rem;
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
  const brushSize = Math.max(1.6 * (props.option.value! / 40), 1);

  return (
    <StyledBrushOption onClick={() => FeatureRequest("Options/Brush")}>
      <BrushContainer>
        <Brush size={brushSize} />
        <Label>{props.option.value}</Label>
      </BrushContainer>
      <Button>
        <Arrow>{">"}</Arrow>
      </Button>
    </StyledBrushOption>
  );
};

export default BrushOption;
