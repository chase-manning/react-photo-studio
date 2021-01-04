import { FeatureRequest } from "../../../services/AnalyticsService";
import { ItemType } from "./menu-items";

export const type: ItemType = {
  name: "Type",
  itemSets: [],
  action: () => FeatureRequest("Menu/Type"),
};
