import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import PercentSelector from "../../shared/PercentSelector";
import Button from "../../styles/Button";
import BrushOption from "./BrushOption";
import Presets from "./Presets";
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
import { requestFeature } from "../../state/featureSlice";

const StyledOption = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 0.3rem;
`;

interface ImageProps {
  small?: boolean;
}

const Image = styled.img`
  height: ${(props: ImageProps) => (props.small ? "1.5rem" : "1.9rem")};
  width: ${(props: ImageProps) => (props.small ? "1.5rem" : "1.9rem")};
`;

interface Props {
  option: OptionType;
}

const Option = ({ option }: Props) => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(0);

  return (
    <StyledOption
      onMouseEnter={() =>
        setTimer(
          window.setTimeout(
            () =>
              dispatch(
                requestFeature(
                  `Options/${getOptionName(option.option)}/Hover Menu`
                )
              ),
            2000
          )
        )
      }
      onMouseLeave={() => window.clearTimeout(timer)}
    >
      {option.option === OptionOption.PRESET && <Presets />}
      {option.option === OptionOption.BRUSH && <BrushOption option={option} />}
      {option.option === OptionOption.SETTINGS && (
        <Button
          onClick={() => dispatch(requestFeature("Menu/Window/Brush Settings"))}
          selected={option.enabled}
          width="auto"
        >
          <Image src={brushSettings} alt="brush settings" />
        </Button>
      )}
      {option.option === OptionOption.MODE && (
        <Dropdown
          label="Mode"
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          selected={getBlendingModeText(option.blendingMode!)}
          options={["Linear Dodge (Add)"]}
        />
      )}
      {option.option === OptionOption.OPACITY && (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        <PercentSelector label="Opacity" value={option.value!} />
      )}
      {option.option === OptionOption.PRESSURE_FOR_OPACITY && (
        <Button
          onClick={() =>
            dispatch(requestFeature("Options/Brush/Pressure for Opacity"))
          }
          selected={option.enabled}
          width="auto"
        >
          <Image src={pressureForOpacity} alt="pressure for opacity" />
        </Button>
      )}
      {option.option === OptionOption.FLOW && (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        <PercentSelector label="Flow" value={option.value!} />
      )}
      {option.option === OptionOption.AIRBRUSH && (
        <Button
          onClick={() => dispatch(requestFeature("Options/Brush/Airbrush"))}
          selected={option.enabled}
          width="auto"
        >
          <Image src={airbrush} alt="airbrush" />
        </Button>
      )}
      {option.option === OptionOption.SMOOTHING && (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        <PercentSelector label="Smoothing" value={option.value!} />
      )}
      {option.option === OptionOption.SMOOTHING_OPTIONS && (
        <Button
          onClick={() =>
            dispatch(requestFeature("Options/Brush/Smoothing Options"))
          }
          selected={option.enabled}
          width="auto"
        >
          <Image small src={settings} alt="settings" />
          <ContextIndicator />
        </Button>
      )}
      {option.option === OptionOption.ANGLE && (
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        <AngleSelector value={option.value!} />
      )}
      {option.option === OptionOption.PRESSURE_FOR_SIZE && (
        <Button
          onClick={() =>
            dispatch(requestFeature("Options/Brush/Pressure for Size"))
          }
          selected={option.enabled}
          width="auto"
        >
          <Image src={pressureForSize} alt="pressure for size" />
        </Button>
      )}
      {option.option === OptionOption.SYMMETRY && (
        <Button
          onClick={() => dispatch(requestFeature("Options/Brush/Symmetry"))}
          selected={option.enabled}
          width="auto"
        >
          <Image src={symmetry} alt="symmetry" />
          <ContextIndicator />
        </Button>
      )}
    </StyledOption>
  );
};

export default Option;
