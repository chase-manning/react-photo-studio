import { select } from "./select";
import { edit } from "./edit";
import { file } from "./file";
import { image } from "./image";
import { layer } from "./layer";
import { type } from "./type";
import { filter } from "./filter";
import { threeD } from "./three-d";
import { view } from "./view";
import { window } from "./window";
import { help } from "./help";

export type ItemSetType = {
  items: ItemType[];
};

export type ItemType = {
  name: string;
  itemSets?: ItemSetType[];
  action?: () => void;
  macShortcut?: string;
  windowsShortcut?: string;
};

export const menuItems: ItemType[] = [
  file,
  edit,
  image,
  layer,
  type,
  select,
  filter,
  threeD,
  view,
  window,
  help,
];
