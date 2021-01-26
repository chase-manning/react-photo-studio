import { requestFeature } from "../../../state/featureSlice";
import { ItemType } from "./menu-items";

export const edit: ItemType = {
  name: "Edit",
  itemSets: [
    {
      items: [
        {
          name: "Undo Deselect",
          action: () => requestFeature("Menu/Edit/Undo Deselect"),
        },
        {
          name: "Redo",
          action: () => requestFeature("Menu/Edit/Redo"),
        },
        {
          name: "Toggle Last State",
          action: () => requestFeature("Menu/Edit/Toggle Last State"),
        },
      ],
    },
    {
      items: [
        {
          name: "Fade...",
          action: () => requestFeature("Menu/Edit/Fade..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Cut",
          action: () => requestFeature("Menu/Edit/Cut"),
        },
        {
          name: "Copy",
          action: () => requestFeature("Menu/Edit/Copy"),
        },
        {
          name: "Copy Merged",
          action: () => requestFeature("Menu/Edit/Copy Merged"),
        },
        {
          name: "Paste",
          action: () => requestFeature("Menu/Edit/Paste"),
        },
        {
          name: "Paste Special",
          itemSets: [
            {
              items: [
                {
                  name: "Paste without Formatting",
                  action: () =>
                    requestFeature(
                      "Menu/Edit/Paste Special/Paste without Formatting"
                    ),
                },
                {
                  name: "Paste in Place",
                  action: () =>
                    requestFeature("Menu/Edit/Paste Special/Paste in Place"),
                },
                {
                  name: "Paste Into",
                  action: () =>
                    requestFeature("Menu/Edit/Paste Special/Paste Into"),
                },
                {
                  name: "Paste Outside",
                  action: () =>
                    requestFeature("Menu/Edit/Paste Special/Paste Outside"),
                },
              ],
            },
          ],
        },
        {
          name: "Clear",
          action: () => requestFeature("Menu/Edit/Clear"),
        },
      ],
    },
    {
      items: [
        {
          name: "Search",
          action: () => requestFeature("Menu/Edit/Search"),
        },
        {
          name: "Check Spelling...",
          action: () => requestFeature("Menu/Edit/Check Spelling..."),
        },
        {
          name: "Find and Replace Text...",
          action: () => requestFeature("Menu/Edit/Find and Replace Text..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Fill...",
          action: () => requestFeature("Menu/Edit/Fill..."),
        },
        {
          name: "Stroke...",
          action: () => requestFeature("Menu/Edit/Stroke..."),
        },
        {
          name: "Content-Aware Fill...",
          action: () => requestFeature("Menu/Edit/Content-Aware Fill..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Content-Aware Scale",
          action: () => requestFeature("Menu/Edit/Content-Aware Scale"),
        },
        {
          name: "Puppet Warp",
          action: () => requestFeature("Menu/Edit/Puppet Warp"),
        },
        {
          name: "Perspective Warp",
          action: () => requestFeature("Menu/Edit/Perspective Warp"),
        },
        {
          name: "Free Transform",
          action: () => requestFeature("Menu/Edit/Free Transform"),
        },
        {
          name: "Transform",
          itemSets: [
            {
              items: [
                {
                  name: "Again",
                  action: () => requestFeature("Menu/Edit/Transform/Again"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Scale",
                  action: () => requestFeature("Menu/Edit/Transform/Scale"),
                },
                {
                  name: "Rotate",
                  action: () => requestFeature("Menu/Edit/Transform/Rotate"),
                },
                {
                  name: "Skew",
                  action: () => requestFeature("Menu/Edit/Transform/Skew"),
                },
                {
                  name: "Distort",
                  action: () => requestFeature("Menu/Edit/Transform/Distort"),
                },
                {
                  name: "Perspective",
                  action: () =>
                    requestFeature("Menu/Edit/Transform/Perspective"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Warp",
                  action: () => requestFeature("Menu/Edit/Transform/Warp"),
                },
                {
                  name: "Split Warp Horizontally",
                  action: () =>
                    requestFeature(
                      "Menu/Edit/Transform/Split Warp Horizontally"
                    ),
                },
                {
                  name: "Split Warp Vertically",
                  action: () =>
                    requestFeature("Menu/Edit/Transform/Split Warp Vertically"),
                },
                {
                  name: "Split Warp Crosswise",
                  action: () =>
                    requestFeature("Menu/Edit/Transform/Split Warp Crosswise"),
                },
                {
                  name: "Remote Warp Split",
                  action: () =>
                    requestFeature("Menu/Edit/Transform/Remote Warp Split"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Rotate 180°",
                  action: () =>
                    requestFeature("Menu/Edit/Transform/Rotate 180"),
                },
                {
                  name: "Rotate 90° Clockwise",
                  action: () =>
                    requestFeature("Menu/Edit/Transform/Rotate 90 Clockwise"),
                },
                {
                  name: "Rotate 90° Counter Clockwise",
                  action: () =>
                    requestFeature(
                      "Menu/Edit/Transform/Rotate 90 Counter Clockwise"
                    ),
                },
              ],
            },
            {
              items: [
                {
                  name: "Flip Horizontal",
                  action: () =>
                    requestFeature("Menu/Edit/Transform/Flip Horizontal"),
                },
                {
                  name: "Flip Vertical",
                  action: () =>
                    requestFeature("Menu/Edit/Transform/Flip Vertical"),
                },
              ],
            },
          ],
        },
        {
          name: "Auto-Align Layers...",
          action: () => requestFeature("Menu/Edit/Auto-Align Layers..."),
        },
        {
          name: "Auto-Blend Layers...",
          action: () => requestFeature("Menu/Edit/Auto-Blend Layers..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Define Brush Preset...",
          action: () => requestFeature("Menu/Edit/Define Brush Preset..."),
        },
        {
          name: "Define Pattern...",
          action: () => requestFeature("Menu/Edit/Define Pattern..."),
        },
        {
          name: "Define Custom Shape...",
          action: () => requestFeature("Menu/Edit/Define Custom Shape..."),
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
                  action: () => requestFeature("Menu/Edit/Purge/Clipboard"),
                },
                {
                  name: "Histories",
                  action: () => requestFeature("Menu/Edit/Purge/Histories"),
                },
                {
                  name: "All",
                  action: () => requestFeature("Menu/Edit/Purge/All"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Video Cache",
                  action: () => requestFeature("Menu/Edit/Purge/Video Cache"),
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
          action: () => requestFeature("Menu/Edit/Adobe PDF Presets..."),
        },
        {
          name: "Presets",
          itemSets: [
            {
              items: [
                {
                  name: "Preset Manager...",
                  action: () =>
                    requestFeature("Menu/Edit/Presets/Preset Manager..."),
                },
                {
                  name: "Migrate Presets",
                  action: () =>
                    requestFeature("Menu/Edit/Presets/Migrate Presets"),
                },
                {
                  name: "Export/Import Presets...",
                  action: () =>
                    requestFeature(
                      "Menu/Edit/Presets/Export/Import Presets..."
                    ),
                },
              ],
            },
          ],
        },
        {
          name: "Remote Connections...",
          action: () => requestFeature("Menu/Edit/Remote Connections..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Color Settings...",
          action: () => requestFeature("Menu/Edit/Color Settings..."),
        },
        {
          name: "Assign Profile...",
          action: () => requestFeature("Menu/Edit/Assign Profile..."),
        },
        {
          name: "Convert to Profile...",
          action: () => requestFeature("Menu/Edit/Convert to Profile..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Keyboard Shortcuts...",
          action: () => requestFeature("Menu/Edit/Keyboard Shortcuts..."),
        },
        {
          name: "Menus...",
          action: () => requestFeature("Menu/Edit/Menus..."),
        },
        {
          name: "Toolbar...",
          action: () => requestFeature("Menu/Edit/Toolbar..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Preferences",
          itemSets: [
            {
              items: [
                {
                  name: "General",
                  action: () => requestFeature("Menu/Edit/Preferences/General"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Interface...",
                  action: () =>
                    requestFeature("Menu/Edit/Preferences/Interface..."),
                },
                {
                  name: "Workspace...",
                  action: () =>
                    requestFeature("Menu/Edit/Preferences/Workspace..."),
                },
                {
                  name: "Tools...",
                  action: () =>
                    requestFeature("Menu/Edit/Preferences/Tools..."),
                },
                {
                  name: "History Log...",
                  action: () =>
                    requestFeature("Menu/Edit/Preferences/History Log..."),
                },
                {
                  name: "File Handling...",
                  action: () =>
                    requestFeature("Menu/Edit/Preferences/File Handling..."),
                },
                {
                  name: "Export...",
                  action: () =>
                    requestFeature("Menu/Edit/Preferences/Export..."),
                },
                {
                  name: "Performance...",
                  action: () =>
                    requestFeature("Menu/Edit/Preferences/Performance..."),
                },
                {
                  name: "Scratch Disks...",
                  action: () =>
                    requestFeature("Menu/Edit/Preferences/Scratch Disks..."),
                },
                {
                  name: "Cursors...",
                  action: () =>
                    requestFeature("Menu/Edit/Preferences/Cursors..."),
                },
                {
                  name: "Transparency & Gamut...",
                  action: () =>
                    requestFeature(
                      "Menu/Edit/Preferences/Transparency & Gamut..."
                    ),
                },
                {
                  name: "Units & Rulers...",
                  action: () =>
                    requestFeature("Menu/Edit/Preferences/Units & Rulers..."),
                },
                {
                  name: "Guides, Grid & Slices...",
                  action: () =>
                    requestFeature(
                      "Menu/Edit/Preferences/Guides, Grid & Slices..."
                    ),
                },
                {
                  name: "Plug-ins...",
                  action: () =>
                    requestFeature("Menu/Edit/Preferences/Plug-ins..."),
                },
                {
                  name: "Type...",
                  action: () => requestFeature("Menu/Edit/Preferences/Type..."),
                },
                {
                  name: "3D...",
                  action: () => requestFeature("Menu/Edit/Preferences/3D..."),
                },
                {
                  name: "Enhanced Controls...",
                  action: () =>
                    requestFeature(
                      "Menu/Edit/Preferences/Enhanced Controls..."
                    ),
                },
                {
                  name: "Technology Previews...",
                  action: () =>
                    requestFeature(
                      "Menu/Edit/Preferences/Technology Previews..."
                    ),
                },
              ],
            },
            {
              items: [
                {
                  name: "Camera Raw...",
                  action: () =>
                    requestFeature("Menu/Edit/Preferences/Camera Raw..."),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
