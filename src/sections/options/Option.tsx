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
import { ReactComponent as ArrowIcon } from "../../assets/svgs/navigation/triangle-right.svg";

import brushSettings from "../../assets/options/brush-settings.svg";
import pressureForOpacity from "../../assets/options/pressure-for-opacity.png";
import airbrush from "../../assets/options/airbrush.png";
import settings from "../../assets/options/settings.svg";
import AngleSelector from "../../shared/AngleSelector";

const StyledOption = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
`;

type ImageProps = {
  small?: boolean;
};

const Image = styled.img`
  height: ${(props: ImageProps) => (props.small ? "1.5rem" : "1.9rem")};
  width: ${(props: ImageProps) => (props.small ? "1.5rem" : "1.9rem")};
`;

const ContextIndicator = styled(ArrowIcon)`
  position: absolute;
  right: 0.1rem;
  bottom: 0.3rem;
  height: 0.4rem;
  fill: var(--white);
  transform: rotate(90deg);
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
      {props.option.option === OptionOption.AIRBRUSH && (
        <Button
          onClick={() => FeatureRequest("Options/Brush/Airbrush")}
          selected={props.option.enabled!!}
          width={"auto"}
        >
          <Image src={airbrush} />
        </Button>
      )}
      {props.option.option === OptionOption.SMOOTHING && (
        <PercentSelector label={"Smoothing"} value={props.option.value!} />
      )}
      {props.option.option === OptionOption.SMOOTHING_OPTIONS && (
        <Button
          onClick={() => FeatureRequest("Options/Brush/Smoothing Options")}
          selected={props.option.enabled!!}
          width={"auto"}
        >
          <Image src={settings} small />
          <ContextIndicator />
        </Button>
      )}
      {props.option.option === OptionOption.ANGLE && (
        <AngleSelector value={props.option.value!} />
      )}
    </StyledOption>
  );
};

export default Option;
