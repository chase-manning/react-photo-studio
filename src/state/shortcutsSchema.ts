export type ShortcutType = {
  shortcut: string;
  action: () => void;
};

export const shortcutSchema: ShortcutType[] = [
  {
    shortcut: "command+r",
    action: () => alert("meow"),
  },
  {
    shortcut: "command+t",
    action: () => alert("meow2"),
  },
];
