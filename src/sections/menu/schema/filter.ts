import { FeatureRequest } from "../../../services/AnalyticsService";
import { ItemType } from "./menu-items";

export const filter: ItemType = {
  name: "Filter",
  itemSets: [],
  action: () => FeatureRequest("Menu/Filter"),
};
