import { requestFeature } from "../../../state/featureSlice";
import { ItemType } from "./menu-items";

export const threeD: ItemType = {
  name: "3D",
  itemSets: [],
  action: () => requestFeature("Menu/3D"),
};
