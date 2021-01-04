import { FeatureRequest } from "../../../services/AnalyticsService";
import { ItemType } from "./menu-items";

export const edit: ItemType = {
  name: "Edit",
  itemSets: [
    {
      items: [
        {
          name: "Undo Deselect",
          action: () => FeatureRequest("Menu/Edit/Undo Deselect"),
        },
        {
          name: "Redo",
          action: () => FeatureRequest("Menu/Edit/Redo"),
        },
        {
          name: "Toggle Last State",
          action: () => FeatureRequest("Menu/Edit/Toggle Last State"),
        },
      ],
    },
    {
      items: [
        {
          name: "Fade...",
          action: () => FeatureRequest("Menu/Edit/Fade..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Cut",
          action: () => FeatureRequest("Menu/Edit/Cut"),
        },
        {
          name: "Copy",
          action: () => FeatureRequest("Menu/Edit/Copy"),
        },
        {
          name: "Copy Merged",
          action: () => FeatureRequest("Menu/Edit/Copy Merged"),
        },
        {
          name: "Paste",
          action: () => FeatureRequest("Menu/Edit/Paste"),
        },
        {
          name: "Paste Special",
          itemSets: [
            {
              items: [
                {
                  name: "Paste without Formatting",
                  action: () =>
                    FeatureRequest(
                      "Menu/Edit/Paste Special/Paste without Formatting"
                    ),
                },
                {
                  name: "Paste in Place",
                  action: () =>
                    FeatureRequest("Menu/Edit/Paste Special/Paste in Place"),
                },
                {
                  name: "Paste Into",
                  action: () =>
                    FeatureRequest("Menu/Edit/Paste Special/Paste Into"),
                },
                {
                  name: "Paste Outside",
                  action: () =>
                    FeatureRequest("Menu/Edit/Paste Special/Paste Outside"),
                },
              ],
            },
          ],
        },
        {
          name: "Clear",
          action: () => FeatureRequest("Menu/Edit/Clear"),
        },
      ],
    },
    {
      items: [
        {
          name: "Search",
          action: () => FeatureRequest("Menu/Edit/Search"),
        },
        {
          name: "Check Spelling...",
          action: () => FeatureRequest("Menu/Edit/Check Spelling..."),
        },
        {
          name: "Find and Replace Text...",
          action: () => FeatureRequest("Menu/Edit/Find and Replace Text..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Fill...",
          action: () => FeatureRequest("Menu/Edit/Fill..."),
        },
        {
          name: "Stroke...",
          action: () => FeatureRequest("Menu/Edit/Stroke..."),
        },
        {
          name: "Content-Aware Fill...",
          action: () => FeatureRequest("Menu/Edit/Content-Aware Fill..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Content-Aware Scale",
          action: () => FeatureRequest("Menu/Edit/Content-Aware Scale"),
        },
        {
          name: "Puppet Warp",
          action: () => FeatureRequest("Menu/Edit/Puppet Warp"),
        },
        {
          name: "Perspective Warp",
          action: () => FeatureRequest("Menu/Edit/Perspective Warp"),
        },
        {
          name: "Free Transform",
          action: () => FeatureRequest("Menu/Edit/Free Transform"),
        },
        {
          name: "Transform",
          itemSets: [
            {
              items: [
                {
                  name: "Again",
                  action: () => FeatureRequest("Menu/Edit/Transform/Again"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Scale",
                  action: () => FeatureRequest("Menu/Edit/Transform/Scale"),
                },
                {
                  name: "Rotate",
                  action: () => FeatureRequest("Menu/Edit/Transform/Rotate"),
                },
                {
                  name: "Skew",
                  action: () => FeatureRequest("Menu/Edit/Transform/Skew"),
                },
                {
                  name: "Distort",
                  action: () => FeatureRequest("Menu/Edit/Transform/Distort"),
                },
                {
                  name: "Perspective",
                  action: () =>
                    FeatureRequest("Menu/Edit/Transform/Perspective"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Warp",
                  action: () => FeatureRequest("Menu/Edit/Transform/Warp"),
                },
                {
                  name: "Split Warp Horizontally",
                  action: () =>
                    FeatureRequest(
                      "Menu/Edit/Transform/Split Warp Horizontally"
                    ),
                },
                {
                  name: "Split Warp Vertically",
                  action: () =>
                    FeatureRequest("Menu/Edit/Transform/Split Warp Vertically"),
                },
                {
                  name: "Split Warp Crosswise",
                  action: () =>
                    FeatureRequest("Menu/Edit/Transform/Split Warp Crosswise"),
                },
                {
                  name: "Remote Warp Split",
                  action: () =>
                    FeatureRequest("Menu/Edit/Transform/Remote Warp Split"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Rotate 180°",
                  action: () =>
                    FeatureRequest("Menu/Edit/Transform/Rotate 180"),
                },
                {
                  name: "Rotate 90° Clockwise",
                  action: () =>
                    FeatureRequest("Menu/Edit/Transform/Rotate 90 Clockwise"),
                },
                {
                  name: "Rotate 90° Counter Clockwise",
                  action: () =>
                    FeatureRequest(
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
                    FeatureRequest("Menu/Edit/Transform/Flip Horizontal"),
                },
                {
                  name: "Flip Vertical",
                  action: () =>
                    FeatureRequest("Menu/Edit/Transform/Flip Vertical"),
                },
              ],
            },
          ],
        },
        {
          name: "Auto-Align Layers...",
          action: () => FeatureRequest("Menu/Edit/Auto-Align Layers..."),
        },
        {
          name: "Auto-Blend Layers...",
          action: () => FeatureRequest("Menu/Edit/Auto-Blend Layers..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Define Brush Preset...",
          action: () => FeatureRequest("Menu/Edit/Define Brush Preset..."),
        },
        {
          name: "Define Pattern...",
          action: () => FeatureRequest("Menu/Edit/Define Pattern..."),
        },
        {
          name: "Define Custom Shape...",
          action: () => FeatureRequest("Menu/Edit/Define Custom Shape..."),
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
                  action: () => FeatureRequest("Menu/Edit/Purge/Clipboard"),
                },
                {
                  name: "Histories",
                  action: () => FeatureRequest("Menu/Edit/Purge/Histories"),
                },
                {
                  name: "All",
                  action: () => FeatureRequest("Menu/Edit/Purge/All"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Video Cache",
                  action: () => FeatureRequest("Menu/Edit/Purge/Video Cache"),
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
          action: () => FeatureRequest("Menu/Edit/Adobe PDF Presets..."),
        },
        {
          name: "Presets",
          itemSets: [
            {
              items: [
                {
                  name: "Preset Manager...",
                  action: () =>
                    FeatureRequest("Menu/Edit/Presets/Preset Manager..."),
                },
                {
                  name: "Migrate Presets",
                  action: () =>
                    FeatureRequest("Menu/Edit/Presets/Migrate Presets"),
                },
                {
                  name: "Export/Import Presets...",
                  action: () =>
                    FeatureRequest(
                      "Menu/Edit/Presets/Export/Import Presets..."
                    ),
                },
              ],
            },
          ],
        },
        {
          name: "Remote Connections...",
          action: () => FeatureRequest("Menu/Edit/Remote Connections..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Color Settings...",
          action: () => FeatureRequest("Menu/Edit/Color Settings..."),
        },
        {
          name: "Assign Profile...",
          action: () => FeatureRequest("Menu/Edit/Assign Profile..."),
        },
        {
          name: "Convert to Profile...",
          action: () => FeatureRequest("Menu/Edit/Convert to Profile..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Keyboard Shortcuts...",
          action: () => FeatureRequest("Menu/Edit/Keyboard Shortcuts..."),
        },
        {
          name: "Menus...",
          action: () => FeatureRequest("Menu/Edit/Menus..."),
        },
        {
          name: "Toolbar...",
          action: () => FeatureRequest("Menu/Edit/Toolbar..."),
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
                  action: () => FeatureRequest("Menu/Edit/Preferences/General"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Interface...",
                  action: () =>
                    FeatureRequest("Menu/Edit/Preferences/Interface..."),
                },
                {
                  name: "Workspace...",
                  action: () =>
                    FeatureRequest("Menu/Edit/Preferences/Workspace..."),
                },
                {
                  name: "Tools...",
                  action: () =>
                    FeatureRequest("Menu/Edit/Preferences/Tools..."),
                },
                {
                  name: "History Log...",
                  action: () =>
                    FeatureRequest("Menu/Edit/Preferences/History Log..."),
                },
                {
                  name: "File Handling...",
                  action: () =>
                    FeatureRequest("Menu/Edit/Preferences/File Handling..."),
                },
                {
                  name: "Export...",
                  action: () =>
                    FeatureRequest("Menu/Edit/Preferences/Export..."),
                },
                {
                  name: "Performance...",
                  action: () =>
                    FeatureRequest("Menu/Edit/Preferences/Performance..."),
                },
                {
                  name: "Scratch Disks...",
                  action: () =>
                    FeatureRequest("Menu/Edit/Preferences/Scratch Disks..."),
                },
                {
                  name: "Cursors...",
                  action: () =>
                    FeatureRequest("Menu/Edit/Preferences/Cursors..."),
                },
                {
                  name: "Transparency & Gamut...",
                  action: () =>
                    FeatureRequest(
                      "Menu/Edit/Preferences/Transparency & Gamut..."
                    ),
                },
                {
                  name: "Units & Rulers...",
                  action: () =>
                    FeatureRequest("Menu/Edit/Preferences/Units & Rulers..."),
                },
                {
                  name: "Guides, Grid & Slices...",
                  action: () =>
                    FeatureRequest(
                      "Menu/Edit/Preferences/Guides, Grid & Slices..."
                    ),
                },
                {
                  name: "Plug-ins...",
                  action: () =>
                    FeatureRequest("Menu/Edit/Preferences/Plug-ins..."),
                },
                {
                  name: "Type...",
                  action: () => FeatureRequest("Menu/Edit/Preferences/Type..."),
                },
                {
                  name: "3D...",
                  action: () => FeatureRequest("Menu/Edit/Preferences/3D..."),
                },
                {
                  name: "Enhanced Controls...",
                  action: () =>
                    FeatureRequest(
                      "Menu/Edit/Preferences/Enhanced Controls..."
                    ),
                },
                {
                  name: "Technology Previews...",
                  action: () =>
                    FeatureRequest(
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
                    FeatureRequest("Menu/Edit/Preferences/Camera Raw..."),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
