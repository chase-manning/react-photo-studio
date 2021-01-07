export enum ToolOption {
  MOVE,
  ARTBOARD,
  RECTANGULAR_MARQUEE,
  ELLIPTICAL_MARQUEE,
  SINGLE_ROW_MARQUEE,
  SINGLE_COLUMN_MARQUEE,
  LASSO,
  POYGONAL_LASSO,
  MAGNETIC_LASSO,
  OBJECT_SELECTION,
  QUICK_SELECTION,
  MAGIC_WAND,
  CROP,
  PERSPECTIVE_CROP,
  SLICE,
  SLICE_SELECT,
  FRAME,
  EYEDROPPER,
  THREE_D_MATERIAL_EYEDROPPER,
  COLOR_SAMPLER,
  RULER,
  NOTE,
  COUNT,
  SPOT_HEALING_BRUSH,
  HEALING_BRUSH,
  PATCH,
  CONTENT_AWARE_MOVE,
  RED_EYE,
  BRUSH,
  PENCIL,
  COLOR_REPLACEMENT,
  MIXER_BRUSH,
  CLONE_STAMP,
  PATTERN_STAMP,
  HISTORY_BRUSH,
  ART_HISTORY_BRUSH,
  ERASER,
  BACKGROUND_ERASER,
  MAGIC_ERASER,
  GRADIENT,
  PAINT_BUCKET,
  THREE_D_MATERIAL_DROP,
  BLUR,
  SHARPEN,
  SMUDGE,
  DODGE,
  BURN,
  SPONGE,
  PEN,
  FREEFORM_PEN,
  CURVATURE_PEN,
  ADD_ANCHOR_POINT,
  DELETE_ANCHOR_POINT,
  CONVERT_POINT,
  HORIZONTAL_TYPE,
  VERTICAL_TYPE,
  VERTICAL_TYPE_MASK,
  HORIZONTAL_TYPE_MASK,
  PATH_SELECTION,
  DIRECT_SELECTION,
  RECTANGLE,
  ROUNDED_RECTANGLE,
  ELLIPSE,
  POLYGON,
  LINE,
  CUSTOM_SHAPE,
  HAND,
  ROTATE_VIEW,
  ZOOM,
}

export type ToolType = {
  option: ToolOption;
  selected: boolean;
  implemented: boolean;
};

export type ToolCollection = {
  active: boolean;
  tools: ToolType[];
};

export const tools: ToolCollection[] = [
  {
    active: false,
    tools: [
      {
        option: ToolOption.MOVE,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.ARTBOARD,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.RECTANGULAR_MARQUEE,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.ELLIPTICAL_MARQUEE,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.SINGLE_ROW_MARQUEE,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.SINGLE_COLUMN_MARQUEE,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.LASSO,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.POYGONAL_LASSO,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.MAGNETIC_LASSO,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.OBJECT_SELECTION,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.QUICK_SELECTION,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.MAGIC_WAND,
        selected: true,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.CROP,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.PERSPECTIVE_CROP,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.SLICE,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.SLICE_SELECT,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.FRAME,
        selected: true,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.EYEDROPPER,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.THREE_D_MATERIAL_EYEDROPPER,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.COLOR_SAMPLER,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.RULER,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.NOTE,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.COUNT,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.SPOT_HEALING_BRUSH,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.HEALING_BRUSH,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.PATCH,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.CONTENT_AWARE_MOVE,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.RED_EYE,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: true,
    tools: [
      {
        option: ToolOption.BRUSH,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.PENCIL,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.COLOR_REPLACEMENT,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.MIXER_BRUSH,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.CLONE_STAMP,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.PATTERN_STAMP,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.HISTORY_BRUSH,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.ART_HISTORY_BRUSH,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.ERASER,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.BACKGROUND_ERASER,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.MAGIC_ERASER,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.GRADIENT,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.PAINT_BUCKET,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.THREE_D_MATERIAL_DROP,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.BLUR,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.SHARPEN,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.SMUDGE,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.DODGE,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.BURN,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.SMUDGE,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.PEN,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.FREEFORM_PEN,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.CURVATURE_PEN,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.ADD_ANCHOR_POINT,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.DELETE_ANCHOR_POINT,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.CONVERT_POINT,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.HORIZONTAL_TYPE,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.VERTICAL_TYPE,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.VERTICAL_TYPE_MASK,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.HORIZONTAL_TYPE_MASK,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.PATH_SELECTION,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.DIRECT_SELECTION,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.RECTANGLE,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.ROUNDED_RECTANGLE,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.ELLIPSE,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.POLYGON,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.LINE,
        selected: false,
        implemented: false,
      },
      {
        option: ToolOption.CUSTOM_SHAPE,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.HAND,
        selected: true,
        implemented: false,
      },
      {
        option: ToolOption.ROTATE_VIEW,
        selected: false,
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.ZOOM,
        selected: true,
        implemented: false,
      },
    ],
  },
];
