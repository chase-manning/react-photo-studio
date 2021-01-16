import React from "react";
import styled from "styled-components";

const StyledPercentSelector = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  color: var(--label);
  margin-right: 0.4rem;
`;

const InputContainer = styled.div`
  display: flex;
  background-color: var(--hover-bg);
  border: solid 1px var(--input-border);
  border-radius: 0.3rem;
`;

const Input = styled.div`
  flex: 1;
  color: var(--input-text);
  padding: 0.2rem 0.3rem;
  width: 3.3rem;
`;

const Button = styled.button`
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: solid 1px var(--input-border);
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
        <Input>{props.value + "%"}</Input>
        <Button>
          <Icon>{">"}</Icon>
        </Button>
      </InputContainer>
    </StyledPercentSelector>
  );
};

export default PercentSelector;
