import { requestFeature } from "../../../state/featureSlice";
import { ItemType } from "./menu-items";

export const type: ItemType = {
  name: "Type",
  itemSets: [],
  action: () => requestFeature("Menu/Type"),
};
