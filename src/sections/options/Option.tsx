import React from "react";
import styled from "styled-components";
import PercentSelector from "../../shared/PercentSelector";
import { OptionOption, OptionType } from "../../state/toolSchema";

const StyledOption = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 0.6rem;
`;

type Props = {
  option: OptionType;
};

const Option = (props: Props) => {
  return (
    <StyledOption>
      {props.option.option === OptionOption.OPACITY && (
        <PercentSelector label={"Opacity"} value={props.option.value!} />
      )}
    </StyledOption>
  );
};

export default Option;
