import { ItemType } from "./schema/menu-items";

export const select: ItemType = {
  name: "Select",
  itemSets: [],
  action: () => console.log("meow"),
};
