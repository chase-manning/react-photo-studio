import { requestFeature } from "../../../state/featureSlice";
import { ItemType } from "./menu-items";

export const filter: ItemType = {
  name: "Filter",
  itemSets: [],
  action: () => requestFeature("Menu/Filter"),
};
