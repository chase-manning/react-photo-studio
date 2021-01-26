import { requestFeature } from "../../../state/featureSlice";
import { ItemType } from "./menu-items";

export const view: ItemType = {
  name: "View",
  itemSets: [],
  action: () => requestFeature("Menu/View"),
};
