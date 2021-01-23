import React, { useState } from "react";
import styled from "styled-components";
import PercentSelector from "../../shared/PercentSelector";
import Button from "../../styles/Button";
import BrushOption from "./BrushOption";
import Presets from "./Presets";
import { FeatureRequest } from "../../services/AnalyticsService";
import Dropdown from "../../shared/Dropdown";
import { getBlendingModeText } from "../../types/blendingModes";

import brushSettings from "../../assets/options/brush-settings.svg";
import pressureForOpacity from "../../assets/options/pressure-for-opacity.png";
import airbrush from "../../assets/options/airbrush.png";
import settings from "../../assets/options/settings.svg";
import AngleSelector from "../../shared/AngleSelector";
import pressureForSize from "../../assets/options/pressure-for-size.png";
import symmetry from "../../assets/options/symmetry.png";
import { getOptionName, OptionOption, OptionType } from "../../types/options";
import ContextIndicator from "../../styles/ContextIndicator";

const StyledOption = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 0.3rem;
`;

type ImageProps = {
  small?: boolean;
};

const Image = styled.img`
  height: ${(props: ImageProps) => (props.small ? "1.5rem" : "1.9rem")};
  width: ${(props: ImageProps) => (props.small ? "1.5rem" : "1.9rem")};
`;

type Props = {
  option: OptionType;
};

const Option = (props: Props) => {
  const [timer, setTimer] = useState(0);
  return (
    <StyledOption
      onMouseEnter={() =>
        setTimer(
          window.setTimeout(
            () =>
              FeatureRequest(
                "Options/" + getOptionName(props.option.option) + "/Hover Menu"
              ),
            1000
          )
        )
      }
      onMouseLeave={() => window.clearTimeout(timer)}
    >
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
      {props.option.option === OptionOption.PRESSURE_FOR_SIZE && (
        <Button
          onClick={() => FeatureRequest("Options/Brush/Pressure for Size")}
          selected={props.option.enabled!!}
          width={"auto"}
        >
          <Image src={pressureForSize} />
        </Button>
      )}
      {props.option.option === OptionOption.SYMMETRY && (
        <Button
          onClick={() => FeatureRequest("Options/Brush/Symmetry")}
          selected={props.option.enabled!!}
          width={"auto"}
        >
          <Image src={symmetry} />
          <ContextIndicator />
        </Button>
      )}
    </StyledOption>
  );
};

export default Option;
