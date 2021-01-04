import { FeatureRequest } from "../../../services/AnalyticsService";
import { ItemType } from "./menu-items";

export const window: ItemType = {
  name: "Window",
  itemSets: [],
  action: () => FeatureRequest("Menu/Window"),
};
