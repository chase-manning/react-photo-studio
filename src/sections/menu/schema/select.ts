import { requestFeature } from "../../../state/featureSlice";
import { ItemType } from "./menu-items";

export const select: ItemType = {
  name: "Select",
  itemSets: [],
  action: () => requestFeature("Menu/Select"),
};
