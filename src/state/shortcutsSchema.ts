export type ShortcutType = {
  shortcut: string;
  action: () => void;
};

export const shortcutSchema: ShortcutType[] = [
  {
    shortcut: "meow",
    action: () => alert("meow"),
  },
  {
    shortcut: "meow2",
    action: () => alert("meow2"),
  },
];
