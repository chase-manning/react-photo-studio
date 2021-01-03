export type ItemType = {
  name: string;
  itemSets?: ItemSetType[];
  action?: () => void;
};

export type ItemSetType = {
  items: ItemType[];
};

export type MenuItemType = {
  name: string;
  itemSets: ItemSetType[];
};

export const menuItems: MenuItemType[] = [
  {
    name: "File",
    itemSets: [
      {
        items: [
          {
            name: "New...",
            action: () => console.log("meow"),
          },
        ],
      },
    ],
  },
];
