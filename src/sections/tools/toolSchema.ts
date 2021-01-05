import { ToolOption } from "../../state/toolsSlice";

type ToolType = {
  option: ToolOption;
  active: boolean;
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
        active: false,
      },
    ],
  },
];
