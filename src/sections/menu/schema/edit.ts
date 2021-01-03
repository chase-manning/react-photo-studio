import { MenuItemType } from "./menu-items";

export const edit: MenuItemType = {
  name: "Edit",
  itemSets: [
    {
      items: [
        {
          name: "Undo Deselect",
          action: () => console.log("meow"),
        },
        {
          name: "Redo",
          action: () => console.log("meow"),
        },
        {
          name: "Toggle Last State",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Fade..",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Cut",
          action: () => console.log("meow"),
        },
        {
          name: "Copy",
          action: () => console.log("meow"),
        },
        {
          name: "Copy Merged",
          action: () => console.log("meow"),
        },
        {
          name: "Paste",
          action: () => console.log("meow"),
        },
        {
          name: "Paste Special",
          itemSets: [
            {
              items: [
                {
                  name: "Paste without Formatting",
                  action: () => console.log("meow"),
                },
                {
                  name: "Paste in Place",
                  action: () => console.log("meow"),
                },
                {
                  name: "Paste Into",
                  action: () => console.log("meow"),
                },
                {
                  name: "Paste Outside",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Clear",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Search",
          action: () => console.log("meow"),
        },
        {
          name: "Check Spelling...",
          action: () => console.log("meow"),
        },
        {
          name: "Find and Replace Text...",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Fill...",
          action: () => console.log("meow"),
        },
        {
          name: "Stroke...",
          action: () => console.log("meow"),
        },
        {
          name: "Content-Aware Fill...",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Content-Aware Scale",
          action: () => console.log("meow"),
        },
        {
          name: "Puppet Warp",
          action: () => console.log("meow"),
        },
        {
          name: "Perspective Warp",
          action: () => console.log("meow"),
        },
        {
          name: "Free Transform",
          action: () => console.log("meow"),
        },
        {
          name: "Transform",
          itemSets: [
            {
              items: [
                {
                  name: "Again",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Scale",
                  action: () => console.log("meow"),
                },
                {
                  name: "Rotate",
                  action: () => console.log("meow"),
                },
                {
                  name: "Skew",
                  action: () => console.log("meow"),
                },
                {
                  name: "Distort",
                  action: () => console.log("meow"),
                },
                {
                  name: "Perspectiv",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Warp",
                  action: () => console.log("meow"),
                },
                {
                  name: "Split Warp Horizontally",
                  action: () => console.log("meow"),
                },
                {
                  name: "Split Warp Vertically",
                  action: () => console.log("meow"),
                },
                {
                  name: "Split Warp Crosswise",
                  action: () => console.log("meow"),
                },
                {
                  name: "Remote Warp Split",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Rotate 180°",
                  action: () => console.log("meow"),
                },
                {
                  name: "Rotate 90° Clockwise",
                  action: () => console.log("meow"),
                },
                {
                  name: "Rotate 90° Counter Clockwise",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Flip Horizontal",
                  action: () => console.log("meow"),
                },
                {
                  name: "Flip Vertical",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Auto-Align Layers...",
          action: () => console.log("meow"),
        },
        {
          name: "Auto-Blend Layers...",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Define Brush Preset...",
          action: () => console.log("meow"),
        },
        {
          name: "Define Pattern...",
          action: () => console.log("meow"),
        },
        {
          name: "Define Custom Shape...",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Purge",
          itemSets: [
            {
              items: [
                {
                  name: "Clipboard",
                  action: () => console.log("meow"),
                },
                {
                  name: "Histories",
                  action: () => console.log("meow"),
                },
                {
                  name: "All",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Video Cache",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      items: [
        {
          name: "Adobe PDF Presets...",
          action: () => console.log("meow"),
        },
        {
          name: "Presets",
          itemSets: [
            {
              items: [
                {
                  name: "Preset Manager...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Migrate Presets",
                  action: () => console.log("meow"),
                },
                {
                  name: "Export/Import Presets...",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Remote Connections...",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Color Settings...",
          action: () => console.log("meow"),
        },
        {
          name: "Assign Profile...",
          action: () => console.log("meow"),
        },
        {
          name: "Convert to Profile...",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Keyboard Shortcuts...",
          action: () => console.log("meow"),
        },
        {
          name: "Menus...",
          action: () => console.log("meow"),
        },
        {
          name: "Toolbar...",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Start Dictation...",
          action: () => console.log("meow"),
        },
      ],
    },
  ],
};
