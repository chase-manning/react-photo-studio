import { FeatureRequest } from "../../../services/AnalyticsService";
import { ItemType } from "./menu-items";

export const select: ItemType = {
  name: "Select",
  itemSets: [],
  action: () => FeatureRequest("Menu/Select"),
};
