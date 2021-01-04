import { FeatureRequest } from "../../../services/AnalyticsService";
import { ItemType } from "./menu-items";

export const view: ItemType = {
  name: "View",
  itemSets: [],
  action: () => FeatureRequest("Menu/View"),
};
