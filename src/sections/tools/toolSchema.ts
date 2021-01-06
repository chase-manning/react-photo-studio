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
  EDIT_TOOLBAR,
}

export type ToolType = {
  option: ToolOption;
  selected: boolean;
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
      },
      {
        option: ToolOption.ARTBOARD,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.RECTANGULAR_MARQUEE,
        selected: true,
      },
      {
        option: ToolOption.ELLIPTICAL_MARQUEE,
        selected: false,
      },
      {
        option: ToolOption.SINGLE_ROW_MARQUEE,
        selected: false,
      },
      {
        option: ToolOption.SINGLE_COLUMN_MARQUEE,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.LASSO,
        selected: true,
      },
      {
        option: ToolOption.POYGONAL_LASSO,
        selected: false,
      },
      {
        option: ToolOption.MAGNETIC_LASSO,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.OBJECT_SELECTION,
        selected: false,
      },
      {
        option: ToolOption.QUICK_SELECTION,
        selected: false,
      },
      {
        option: ToolOption.MAGIC_WAND,
        selected: true,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.CROP,
        selected: true,
      },
      {
        option: ToolOption.PERSPECTIVE_CROP,
        selected: false,
      },
      {
        option: ToolOption.SLICE,
        selected: false,
      },
      {
        option: ToolOption.SLICE_SELECT,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.FRAME,
        selected: true,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.EYEDROPPER,
        selected: true,
      },
      {
        option: ToolOption.THREE_D_MATERIAL_EYEDROPPER,
        selected: false,
      },
      {
        option: ToolOption.COLOR_SAMPLER,
        selected: false,
      },
      {
        option: ToolOption.RULER,
        selected: false,
      },
      {
        option: ToolOption.NOTE,
        selected: false,
      },
      {
        option: ToolOption.COUNT,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.SPOT_HEALING_BRUSH,
        selected: true,
      },
      {
        option: ToolOption.HEALING_BRUSH,
        selected: false,
      },
      {
        option: ToolOption.PATCH,
        selected: false,
      },
      {
        option: ToolOption.CONTENT_AWARE_MOVE,
        selected: false,
      },
      {
        option: ToolOption.RED_EYE,
        selected: false,
      },
    ],
  },
  {
    active: true,
    tools: [
      {
        option: ToolOption.BRUSH,
        selected: true,
      },
      {
        option: ToolOption.PENCIL,
        selected: false,
      },
      {
        option: ToolOption.COLOR_REPLACEMENT,
        selected: false,
      },
      {
        option: ToolOption.MIXER_BRUSH,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.CLONE_STAMP,
        selected: true,
      },
      {
        option: ToolOption.PATTERN_STAMP,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.HISTORY_BRUSH,
        selected: true,
      },
      {
        option: ToolOption.ART_HISTORY_BRUSH,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.ERASER,
        selected: true,
      },
      {
        option: ToolOption.BACKGROUND_ERASER,
        selected: false,
      },
      {
        option: ToolOption.MAGIC_ERASER,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.GRADIENT,
        selected: true,
      },
      {
        option: ToolOption.PAINT_BUCKET,
        selected: false,
      },
      {
        option: ToolOption.THREE_D_MATERIAL_DROP,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.BLUR,
        selected: true,
      },
      {
        option: ToolOption.SHARPEN,
        selected: false,
      },
      {
        option: ToolOption.SMUDGE,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.DODGE,
        selected: true,
      },
      {
        option: ToolOption.BURN,
        selected: false,
      },
      {
        option: ToolOption.SMUDGE,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.PEN,
        selected: true,
      },
      {
        option: ToolOption.FREEFORM_PEN,
        selected: false,
      },
      {
        option: ToolOption.CURVATURE_PEN,
        selected: false,
      },
      {
        option: ToolOption.ADD_ANCHOR_POINT,
        selected: false,
      },
      {
        option: ToolOption.DELETE_ANCHOR_POINT,
        selected: false,
      },
      {
        option: ToolOption.CONVERT_POINT,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.HORIZONTAL_TYPE,
        selected: true,
      },
      {
        option: ToolOption.VERTICAL_TYPE,
        selected: false,
      },
      {
        option: ToolOption.VERTICAL_TYPE_MASK,
        selected: false,
      },
      {
        option: ToolOption.HORIZONTAL_TYPE_MASK,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.PATH_SELECTION,
        selected: true,
      },
      {
        option: ToolOption.DIRECT_SELECTION,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.RECTANGLE,
        selected: true,
      },
      {
        option: ToolOption.ROUNDED_RECTANGLE,
        selected: false,
      },
      {
        option: ToolOption.ELLIPSE,
        selected: false,
      },
      {
        option: ToolOption.POLYGON,
        selected: false,
      },
      {
        option: ToolOption.LINE,
        selected: false,
      },
      {
        option: ToolOption.CUSTOM_SHAPE,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.HAND,
        selected: true,
      },
      {
        option: ToolOption.ROTATE_VIEW,
        selected: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.ZOOM,
        selected: true,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        option: ToolOption.EDIT_TOOLBAR,
        selected: true,
      },
    ],
  },
];
