import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Handle from "../../shared/Handle";
import { OptionType } from "../../state/toolSchema";
import { selectOptions } from "../../state/toolsSlice";
import Option from "./Option";

const StyledOptions = styled.div`
  width: 100%;
  height: 4rem;
  background-color: var(--panel);
  padding: 0.5rem;
  display: flex;
`;

const Options = () => {
  const options = useSelector(selectOptions);

  return (
    <StyledOptions>
      <Handle sideways={true} />
      {options.map((option: OptionType) => (
        <Option option={option} />
      ))}
    </StyledOptions>
  );
};

export default Options;
