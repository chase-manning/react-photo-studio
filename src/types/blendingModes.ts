enum BlendingModeOption {
  NORMAL,
  DISOLVE,
  DARKEN,
  MULTIPLY,
  COLOR_BURN,
  LINEAR_BURN,
  DARKEN_COLOR,
  LIGHTEN,
  SCREEN,
  COLOR_DODGE,
  LINEAR_DODGE,
  LIGHTEN_COLOR,
  OVERLAY,
  SOFT_LIGHT,
  HARD_LIGHT,
  VIVID_LIGHT,
  LINEAR_LIGHT,
  PIN_LIGHT,
  HARD_MIX,
  DIFFERENCE,
  EXCLUSION,
  SUBTRACT,
  DIVIDE,
  HUE,
  SATURATION,
  COLOR,
  LUNIMOSITY,
}

export const getBlendingModeText = (mode: BlendingModeOption) => {
  switch (mode) {
    case BlendingModeOption.NORMAL:
      return "Normal";
    default:
      throw new Error("Blending Mode Text Not Found");
  }
};

export default BlendingModeOption;
