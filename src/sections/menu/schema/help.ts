import { FeatureRequest } from "../../../services/AnalyticsService";
import { ItemType } from "./menu-items";

export const help: ItemType = {
  name: "Help",
  itemSets: [],
  action: () => FeatureRequest("Menu/Help"),
};
