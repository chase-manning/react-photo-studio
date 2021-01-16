import React from "react";
import styled from "styled-components";

const StyledPercentSelector = styled.div`
  display: flex;
`;

const Label = styled.p`
  color: var(--label);
`;

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled.div`
  flex: 1;
  color: var(--input-text);
`;

const Button = styled.button`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--hover-bg);
`;

const Icon = styled.div`
  transform: rotate(90deg);
  color: var(--icon);
`;

type Props = {
  label: string;
  value: number;
};

const PercentSelector = (props: Props) => {
  return (
    <StyledPercentSelector>
      <Label>{props.label + ":"}</Label>
      <InputContainer>
        <Input>{props.value}</Input>
        <Button>
          <Icon>{">"}</Icon>
        </Button>
      </InputContainer>
    </StyledPercentSelector>
  );
};

export default PercentSelector;
