import React from "react";
import styled from "styled-components";
import PercentSelector from "../../shared/PercentSelector";
import { OptionOption, OptionType } from "../../state/toolSchema";
import Button from "../../styles/Button";
import BrushOption from "./BrushOption";
import Presets from "./Presets";
import { FeatureRequest } from "../../services/AnalyticsService";
import Dropdown from "../../shared/Dropdown";
import { getBlendingModeText } from "../../types/blendingModes";

import brushSettings from "../../assets/options/brush-settings.svg";
import pressureForOpacity from "../../assets/options/pressure-for-opacity.png";

const StyledOption = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 0.4rem;
`;

const Image = styled.img`
  height: 1.9rem;
  width: 1.9rem;
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
      {props.option.option === OptionOption.SETTINGS && (
        <Button
          onClick={() => FeatureRequest("Menu/Window/Brush Settings")}
          selected={props.option.enabled!!}
          width={"auto"}
        >
          <Image src={brushSettings} />
        </Button>
      )}
      {props.option.option === OptionOption.MODE && (
        <Dropdown
          label={"Mode"}
          selected={getBlendingModeText(props.option.blendingMode!)}
          options={["Linear Dodge (Add)"]}
        />
      )}
      {props.option.option === OptionOption.OPACITY && (
        <PercentSelector label={"Opacity"} value={props.option.value!} />
      )}
      {props.option.option === OptionOption.PRESSURE_FOR_OPACITY && (
        <Button
          onClick={() => FeatureRequest("Options/Brush/Pressure for Opacity")}
          selected={props.option.enabled!!}
          width={"auto"}
        >
          <Image src={pressureForOpacity} />
        </Button>
      )}
      {props.option.option === OptionOption.FLOW && (
        <PercentSelector label={"Flow"} value={props.option.value!} />
      )}
    </StyledOption>
  );
};

export default Option;
