import React from "react";
import styled from "styled-components";
import PercentSelector from "../../shared/PercentSelector";
import { OptionOption, OptionType } from "../../state/toolSchema";
import BrushOption from "./BrushOption";
import Presets from "./Presets";

const StyledOption = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 0.4rem;
`;

type Props = {
  option: OptionType;
};

const Option = (props: Props) => {
  return (
    <StyledOption>
      {props.option.option === OptionOption.PRESET && <Presets />}
      {props.option.option === OptionOption.BRUSH && (
        <BrushOption option={props.option} />
      )}
      {props.option.option === OptionOption.OPACITY && (
        <PercentSelector label={"Opacity"} value={props.option.value!} />
      )}
    </StyledOption>
  );
};

export default Option;
