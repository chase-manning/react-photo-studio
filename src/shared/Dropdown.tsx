import React from "react";
import styled from "styled-components";
import { FeatureRequest } from "../services/AnalyticsService";

const StyledDropdown = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  color: var(--label);
  margin-right: 0.4rem;
  user-select: none;
`;

const SelectedContainer = styled.div`
  display: flex;
  background-color: var(--hover-bg);
  border: solid 1px var(--input-border);
  border-radius: 0.3rem;
`;

type SelectedProps = {
  width: number;
};

const Selected = styled.div`
  flex: 1;
  color: var(--input-text);
  padding: 0.2rem 0.7rem;
  width: ${(props: SelectedProps) => props.width + "rem"};
`;

const Button = styled.button`
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  transform: rotate(90deg);
  color: var(--icon);
`;

type Props = {
  label?: string;
  selected: string;
  options: string[];
};

const Dropdown = (props: Props) => {
  const optionLenghts = props.options.map((option: string) => option.length);
  const width = Math.max(...optionLenghts) * 0.57;

  return (
    <StyledDropdown>
      {props.label && <Label>{props.label + ":"}</Label>}
      <SelectedContainer>
        <Selected width={width}>{props.selected}</Selected>
        <Button onClick={() => FeatureRequest("Dropdown")}>
          <Icon>{">"}</Icon>
        </Button>
      </SelectedContainer>
    </StyledDropdown>
  );
};

export default Dropdown;
