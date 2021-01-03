import { MenuItemType } from "./menu-items";

export const layer: MenuItemType = {
  name: "Layer",
  itemSets: [
    {
      items: [
        {
          name: "New",
          itemSets: [
            {
              items: [
                {
                  name: "Layer...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Layer from Background...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Group...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Group from Layers...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Artboard...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Artboard from Group...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Artboard from Layers...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Frame from Layers...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Convert to Frame",
                  action: () => console.log("meow"),
                },
              ],
            },

            {
              items: [
                {
                  name: "Layer Via Copy",
                  action: () => console.log("meow"),
                },
                {
                  name: "Layer Via Cut",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Copy CSS",
          action: () => console.log("meow"),
        },
        {
          name: "Copy SVG",
          action: () => console.log("meow"),
        },
        {
          name: "Duplicate Layer...",
          action: () => console.log("meow"),
        },
        {
          name: "Delete",
          itemSets: [
            {
              items: [
                {
                  name: "Layer",
                  action: () => console.log("meow"),
                },
                {
                  name: "Hidden Layers",
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
          name: "Quick Export as PNG",
          action: () => console.log("meow"),
        },
        {
          name: "Export As...",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Rename Layer...",
          action: () => console.log("meow"),
        },
        {
          name: "Layer Style",
          itemSets: [
            {
              items: [
                {
                  name: "Blending Options...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Bevel & Emboss...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Stroke...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Inner Shadow...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Inner Glow...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Satin...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Color Overlay..",
                  action: () => console.log("meow"),
                },
                {
                  name: "Gradient Overlay...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Pattern Overlay...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Outer Glow...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Drop Shadow...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Copy Layer Style",
                  action: () => console.log("meow"),
                },
                {
                  name: "Paste Layer Style",
                  action: () => console.log("meow"),
                },
                {
                  name: "Clear Layer Style",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Global Light...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Create Layer",
                  action: () => console.log("meow"),
                },
                {
                  name: "Hide All Effects",
                  action: () => console.log("meow"),
                },
                {
                  name: "Scale Effects...",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Smart Filter",
          itemSets: [],
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "New Fill Layer",
          itemSets: [
            {
              items: [
                {
                  name: "Solid Color...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Gradient...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Pattern..",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "New Adjustment Layer",
          itemSets: [
            {
              items: [
                {
                  name: "Brightness/Contrast...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Levels...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Curves...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Exposure...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Vibrance...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Hue/Saturation...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Color Balance...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Black & White...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Photo Filter...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Channel Mixer...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Color Lookup...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Invert",
                  action: () => console.log("meow"),
                },
                {
                  name: "Posterize...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Threshold...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Gradient Map...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Selective Color...",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Layer Content Options...",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Layer Mask",
          itemSets: [
            {
              items: [
                {
                  name: "Reveal All",
                  action: () => console.log("meow"),
                },
                {
                  name: "Hide All",
                  action: () => console.log("meow"),
                },
                {
                  name: "Reveal Selection",
                  action: () => console.log("meow"),
                },
                {
                  name: "Hide Selection",
                  action: () => console.log("meow"),
                },
                {
                  name: "From Transparency",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Delete",
                  action: () => console.log("meow"),
                },
                {
                  name: "Apply",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Disable",
                  action: () => console.log("meow"),
                },
                {
                  name: "Unlink",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Vector Mask",
          itemSets: [
            {
              items: [
                {
                  name: "Reveal All",
                  action: () => console.log("meow"),
                },
                {
                  name: "Hide All",
                  action: () => console.log("meow"),
                },
                {
                  name: "Current Path",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Delete",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Enable",
                  action: () => console.log("meow"),
                },
                {
                  name: "Link",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Create Clipping Mask",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Smart Objects",
          itemSets: [
            {
              items: [
                {
                  name: "Convert to Smart Object",
                  action: () => console.log("meow"),
                },
                {
                  name: "New Smart Object via Copy",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Reveal in Finder",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Update Modified Content",
                  action: () => console.log("meow"),
                },
                {
                  name: "Update All Modified Content",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Edit Contents",
                  action: () => console.log("meow"),
                },
                {
                  name: "Relink to File...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Relink to Library Graphic...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Replace Contents...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Export Contents...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Embed Linked",
                  action: () => console.log("meow"),
                },
                {
                  name: "Embed All Linked",
                  action: () => console.log("meow"),
                },
                {
                  name: "Convert to Linked...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Convert to Layers",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Stack Mode",
                  itemSets: [],
                },
                {
                  name: "Rasterize",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Video Layers",
          itemSets: [
            {
              items: [
                {
                  name: "New Video Layer from File...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "New Blank Video Layer",
                  action: () => console.log("meow"),
                },
                {
                  name: "Insert Blank Frame",
                  action: () => console.log("meow"),
                },
                {
                  name: "Duplicate Frame",
                  action: () => console.log("meow"),
                },
                {
                  name: "Delete Frame",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Replace Footage...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Interpret Footage...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Show Altered Video",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Restore Frame",
                  action: () => console.log("meow"),
                },
                {
                  name: "Restore All Frames",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Reload Frame",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Rasterize",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Rasterize",
          itemSets: [],
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "New Layer Based Slice",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Group Layers",
          action: () => console.log("meow"),
        },
        {
          name: "Ungroup Layers",
          action: () => console.log("meow"),
        },
        {
          name: "Hide Layers",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Arrange",
          itemSets: [
            {
              items: [
                {
                  name: "Bring to Front",
                  action: () => console.log("meow"),
                },
                {
                  name: "Bring Forward",
                  action: () => console.log("meow"),
                },
                {
                  name: "Send Backward",
                  action: () => console.log("meow"),
                },
                {
                  name: "Send to Back",
                  action: () => console.log("meow"),
                },
                {
                  name: "Reverse",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Combine Shapes",
          itemSets: [],
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Align",
          itemSets: [],
          action: () => console.log("meow"),
        },
        {
          name: "Distribute",
          itemSets: [],
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Lock Layers...",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Link Layers",
          action: () => console.log("meow"),
        },
        {
          name: "Select Linked Layers",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Merge Down",
          action: () => console.log("meow"),
        },
        {
          name: "Merge Visible",
          action: () => console.log("meow"),
        },
        {
          name: "Flatten Image",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Matting",
          itemSets: [
            {
              items: [
                {
                  name: "Color Decontaminate...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Defringe...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Remove Black Matte",
                  action: () => console.log("meow"),
                },
                {
                  name: "Remove White Matte",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
