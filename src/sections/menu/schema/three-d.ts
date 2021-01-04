import { FeatureRequest } from "../../../services/AnalyticsService";
import { ItemType } from "./menu-items";

export const threeD: ItemType = {
  name: "3D",
  itemSets: [],
  action: () => FeatureRequest("Menu/3D"),
};
