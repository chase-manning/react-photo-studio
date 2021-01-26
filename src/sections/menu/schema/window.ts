import { requestFeature } from "../../../state/featureSlice";
import { ItemType } from "./menu-items";

export const window: ItemType = {
  name: "Window",
  itemSets: [],
  action: () => requestFeature("Menu/Window"),
};
