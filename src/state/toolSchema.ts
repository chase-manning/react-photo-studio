import BlendingModeOption from "../types/blendingModes";
import { OptionOption, OptionSectionType } from "../types/options";

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
  name: string;
  option: ToolOption;
  selected: boolean;
  implemented: boolean;
  optionSections: OptionSectionType[];
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
        name: "Move Tool",
        option: ToolOption.MOVE,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Artboard Tool",
        option: ToolOption.ARTBOARD,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Rectangular Marquee Tool",
        option: ToolOption.RECTANGULAR_MARQUEE,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Elliptical Marquee Tool",
        option: ToolOption.ELLIPTICAL_MARQUEE,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Single Row Marquee Tool",
        option: ToolOption.SINGLE_ROW_MARQUEE,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Single Column Marquee Tool",
        option: ToolOption.SINGLE_COLUMN_MARQUEE,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Lasso Tool",
        option: ToolOption.LASSO,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Polygonal Lasso Tool",
        option: ToolOption.POYGONAL_LASSO,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Magnetic Lasso Tool",
        option: ToolOption.MAGNETIC_LASSO,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Object Selection Tool",
        option: ToolOption.OBJECT_SELECTION,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Quick Selection Tool",
        option: ToolOption.QUICK_SELECTION,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Magic Wand Tool",
        option: ToolOption.MAGIC_WAND,
        selected: true,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Crop Tool",
        option: ToolOption.CROP,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Perspective Crop Tool",
        option: ToolOption.PERSPECTIVE_CROP,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Slice Tool",
        option: ToolOption.SLICE,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Slice Select Tool",
        option: ToolOption.SLICE_SELECT,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Frame Tool",
        option: ToolOption.FRAME,
        selected: true,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Eyedropper Tool",
        option: ToolOption.EYEDROPPER,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "3D Material Eyedropper Tool",
        option: ToolOption.THREE_D_MATERIAL_EYEDROPPER,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Color Sampler Tool",
        option: ToolOption.COLOR_SAMPLER,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Ruler Tool",
        option: ToolOption.RULER,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Note Tool",
        option: ToolOption.NOTE,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Count Tool",
        option: ToolOption.COUNT,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Spot Healing Brush Tool",
        option: ToolOption.SPOT_HEALING_BRUSH,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Healing Brush Tool",
        option: ToolOption.HEALING_BRUSH,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Patch Tool",
        option: ToolOption.PATCH,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Content Aware Move Tool",
        option: ToolOption.CONTENT_AWARE_MOVE,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Red Eye Tool",
        option: ToolOption.RED_EYE,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: true,
    tools: [
      {
        name: "Brush Tool",
        option: ToolOption.BRUSH,
        selected: true,
        optionSections: [
          {
            options: [
              {
                option: OptionOption.PRESET,
              },
            ],
          },
          {
            options: [
              {
                option: OptionOption.BRUSH,
                value: 40,
                hardness: 100,
              },
              {
                option: OptionOption.SETTINGS,
              },
            ],
          },
          {
            options: [
              {
                option: OptionOption.MODE,
                blendingMode: BlendingModeOption.NORMAL,
              },
              {
                option: OptionOption.OPACITY,
                value: 100,
              },
              {
                option: OptionOption.PRESSURE_FOR_OPACITY,
                enabled: false,
              },
            ],
          },
          {
            options: [
              {
                option: OptionOption.FLOW,
                value: 100,
              },
              {
                option: OptionOption.AIRBRUSH,
                enabled: false,
              },
            ],
          },
          {
            options: [
              {
                option: OptionOption.SMOOTHING,
                value: 16,
              },
              {
                option: OptionOption.SMOOTHING_OPTIONS,
              },
            ],
          },
          {
            options: [
              {
                option: OptionOption.ANGLE,
                value: 0,
              },
            ],
          },
          {
            options: [
              {
                option: OptionOption.PRESSURE_FOR_SIZE,
                enabled: false,
              },
              {
                option: OptionOption.SYMMETRY,
              },
            ],
          },
        ],
        implemented: false,
      },
      {
        name: "Pencil Tool",
        option: ToolOption.PENCIL,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Color Replacement Tool",
        option: ToolOption.COLOR_REPLACEMENT,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Mixer Brush Tool",
        option: ToolOption.MIXER_BRUSH,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Clone Stamp Tool",
        option: ToolOption.CLONE_STAMP,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Pattern Stamp Tool",
        option: ToolOption.PATTERN_STAMP,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "History Brush Tool",
        option: ToolOption.HISTORY_BRUSH,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Art History Brush Tool",
        option: ToolOption.ART_HISTORY_BRUSH,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Eraser Tool",
        option: ToolOption.ERASER,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Background Eraser Tool",
        option: ToolOption.BACKGROUND_ERASER,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Magic Eraser Tool",
        option: ToolOption.MAGIC_ERASER,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Gradient Tool",
        option: ToolOption.GRADIENT,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Paint Bucket Tool",
        option: ToolOption.PAINT_BUCKET,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "3D Material Drop Tool",
        option: ToolOption.THREE_D_MATERIAL_DROP,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Blur Tool",
        option: ToolOption.BLUR,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Sharpen Tool",
        option: ToolOption.SHARPEN,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Smudge Tool",
        option: ToolOption.SMUDGE,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Dodge Tool",
        option: ToolOption.DODGE,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Burn Tool",
        option: ToolOption.BURN,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Smudge Tool",
        option: ToolOption.SMUDGE,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Pen Tool",
        option: ToolOption.PEN,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Freeform Pen Tool",
        option: ToolOption.FREEFORM_PEN,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Curvature Pen Tool",
        option: ToolOption.CURVATURE_PEN,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Add Anchor Point Tool",
        option: ToolOption.ADD_ANCHOR_POINT,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Delete Anchor Point Tool",
        option: ToolOption.DELETE_ANCHOR_POINT,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Convert Point Tool",
        option: ToolOption.CONVERT_POINT,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Horizontal Type Tool",
        option: ToolOption.HORIZONTAL_TYPE,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Vertical Type Tool",
        option: ToolOption.VERTICAL_TYPE,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Vertical Type Mask Tool",
        option: ToolOption.VERTICAL_TYPE_MASK,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Horizontal Type Mask Tool",
        option: ToolOption.HORIZONTAL_TYPE_MASK,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Path Selection Tool",
        option: ToolOption.PATH_SELECTION,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Direct Selection Tool",
        option: ToolOption.DIRECT_SELECTION,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Rectangle Tool",
        option: ToolOption.RECTANGLE,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Rounded Rectangle Tool",
        option: ToolOption.ROUNDED_RECTANGLE,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Ellipse Tool",
        option: ToolOption.ELLIPSE,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Polygon Tool",
        option: ToolOption.POLYGON,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Line Tool",
        option: ToolOption.LINE,
        selected: false,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Custom Shape Tool",
        option: ToolOption.CUSTOM_SHAPE,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Hand Tool",
        option: ToolOption.HAND,
        selected: true,
        optionSections: [],
        implemented: false,
      },
      {
        name: "Rotate View Tool",
        option: ToolOption.ROTATE_VIEW,
        selected: false,
        optionSections: [],
        implemented: false,
      },
    ],
  },
  {
    active: false,
    tools: [
      {
        name: "Zoom Tool",
        option: ToolOption.ZOOM,
        selected: true,
        optionSections: [],
        implemented: false,
      },
    ],
  },
];
