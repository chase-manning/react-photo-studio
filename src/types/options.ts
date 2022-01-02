import BlendingModeOption from "./blendingModes";

export enum OptionOption {
  PRESET,
  BRUSH,
  SETTINGS,
  MODE,
  OPACITY,
  PRESSURE_FOR_OPACITY,
  FLOW,
  AIRBRUSH,
  SMOOTHING,
  SMOOTHING_OPTIONS,
  ANGLE,
  PRESSURE_FOR_SIZE,
  SYMMETRY,
}

export interface OptionType {
  option: OptionOption;
  enabled?: boolean;
  value?: number;
  hardness?: number;
  blendingMode?: BlendingModeOption;
}

export interface OptionSectionType {
  options: OptionType[];
}

export const getOptionName = (option: OptionOption): string => {
  switch (option) {
    case OptionOption.PRESET:
      return "Preset";
    case OptionOption.BRUSH:
      return "Brush";
    case OptionOption.SETTINGS:
      return "Settings";
    case OptionOption.MODE:
      return "Mode";
    case OptionOption.OPACITY:
      return "Opacity";
    case OptionOption.PRESSURE_FOR_OPACITY:
      return "Pressure for Opacity";
    case OptionOption.FLOW:
      return "Flow";
    case OptionOption.AIRBRUSH:
      return "Airbrush";
    case OptionOption.SMOOTHING:
      return "Smoothing";
    case OptionOption.SMOOTHING_OPTIONS:
      return "Smoothing Options";
    case OptionOption.ANGLE:
      return "Angle";
    case OptionOption.PRESSURE_FOR_SIZE:
      return "Pressure for Size";
    case OptionOption.SYMMETRY:
      return "Symmetry";
    default:
      throw new Error("Option Name Not Found");
  }
};
