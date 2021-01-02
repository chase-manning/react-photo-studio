export type ItemType = {
  name: string;
  items: ItemType[];
  action?: () => void;
};

export type MenuItemType = {
  name: string;
  items: ItemType[];
};

export const menuItems: MenuItemType[] = [
  {
    name: "File",
    items: [
      {
        name: "----",
        items: [],
        action: () => console.log("meow"),
      },
      {
        name: "----",
        items: [],
        action: () => console.log("meow"),
      },
      {
        name: "----",
        items: [
          {
            name: "----",
            items: [],
            action: () => console.log("meow"),
          },
          {
            name: "----",
            items: [],
            action: () => console.log("meow"),
          },
        ],
      },
      {
        name: "----",
        items: [
          {
            name: "----",
            items: [],
            action: () => console.log("meow"),
          },
          {
            name: "----",
            items: [],
            action: () => console.log("meow"),
          },
        ],
      },
    ],
  },
  {
    name: "Edit",
    items: [
      {
        name: "----",
        items: [],
        action: () => console.log("meow"),
      },
      {
        name: "----",
        items: [],
        action: () => console.log("meow"),
      },
      {
        name: "----",
        items: [
          {
            name: "----",
            items: [],
            action: () => console.log("meow"),
          },
          {
            name: "----",
            items: [],
            action: () => console.log("meow"),
          },
        ],
      },
      {
        name: "----",
        items: [
          {
            name: "----",
            items: [],
            action: () => console.log("meow"),
          },
          {
            name: "----",
            items: [],
            action: () => console.log("meow"),
          },
        ],
      },
    ],
  },
];
