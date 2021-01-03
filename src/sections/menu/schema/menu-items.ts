import { select } from "./select";
import { edit } from "./edit";
import { file } from "./file";
import { image } from "./image";
import { layer } from "./layer";
import { type } from "./type";
import { filter } from "./filter";
import { threeD } from "./three-d";

export type ItemType = {
  name: string;
  itemSets?: ItemSetType[];
  action?: () => void;
};

export type ItemSetType = {
  items: ItemType[];
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
];
