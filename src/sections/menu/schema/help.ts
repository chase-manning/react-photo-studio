import { requestFeature } from "../../../state/featureSlice";
import { ItemType } from "./menu-items";

export const help: ItemType = {
  name: "Help",
  itemSets: [],
  action: () => requestFeature("Menu/Help"),
};
