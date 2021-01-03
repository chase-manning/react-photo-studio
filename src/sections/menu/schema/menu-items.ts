import { edit } from "./edit";
import { file } from "./file";
import { image } from "./image";
import { layer } from "./layer";

export type ItemType = {
  name: string;
  itemSets?: ItemSetType[];
  action?: () => void;
};

export type ItemSetType = {
  items: ItemType[];
};

export const menuItems: ItemType[] = [file, edit, image, layer];
