import { requestFeature } from "../../../state/featureSlice";
import { ItemType } from "./menu-items";

export const layer: ItemType = {
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
                  action: () => requestFeature("Menu/Layer/New/Layer..."),
                },
                {
                  name: "Layer from Background...",
                  action: () =>
                    requestFeature("Menu/Layer/New/Layer from Background..."),
                },
                {
                  name: "Group...",
                  action: () => requestFeature("Menu/Layer/New/Group..."),
                },
                {
                  name: "Group from Layers...",
                  action: () =>
                    requestFeature("Menu/Layer/New/Group from Layers..."),
                },
                {
                  name: "Artboard...",
                  action: () => requestFeature("Menu/Layer/New/Artboard..."),
                },
                {
                  name: "Artboard from Group...",
                  action: () =>
                    requestFeature("Menu/Layer/New/Artboard from Group..."),
                },
                {
                  name: "Artboard from Layers...",
                  action: () =>
                    requestFeature("Menu/Layer/New/Artboard from Layers..."),
                },
                {
                  name: "Frame from Layers...",
                  action: () =>
                    requestFeature("Menu/Layer/New/Frame from Layers..."),
                },
                {
                  name: "Convert to Frame",
                  action: () =>
                    requestFeature("Menu/Layer/New/Convert to Frame"),
                },
              ],
            },

            {
              items: [
                {
                  name: "Layer Via Copy",
                  action: () => requestFeature("Menu/Layer/New/Layer Via Copy"),
                },
                {
                  name: "Layer Via Cut",
                  action: () => requestFeature("Menu/Layer/New/Layer Via Cut"),
                },
              ],
            },
          ],
        },
        {
          name: "Copy CSS",
          action: () => requestFeature("Menu/Layer/Copy CSS"),
        },
        {
          name: "Copy SVG",
          action: () => requestFeature("Menu/Layer/Copy SVG"),
        },
        {
          name: "Duplicate Layer...",
          action: () => requestFeature("Menu/Layer/Duplicate Layer..."),
        },
        {
          name: "Delete",
          itemSets: [
            {
              items: [
                {
                  name: "Layer",
                  action: () => requestFeature("Menu/Layer/Delete/Layer"),
                },
                {
                  name: "Hidden Layers",
                  action: () =>
                    requestFeature("Menu/Layer/Delete/Hidden Layers"),
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
          action: () => requestFeature("Menu/Layer/Quick Export as PNG"),
        },
        {
          name: "Export As...",
          action: () => requestFeature("Menu/Layer/Export As..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Rename Layer...",
          action: () => requestFeature("Menu/Layer/Rename Layer..."),
        },
        {
          name: "Layer Style",
          itemSets: [
            {
              items: [
                {
                  name: "Blending Options...",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Blending Options"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Bevel & Emboss...",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Bevel & Emboss..."),
                },
                {
                  name: "Stroke...",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Stroke..."),
                },
                {
                  name: "Inner Shadow...",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Inner Shadow..."),
                },
                {
                  name: "Inner Glow...",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Inner Glow..."),
                },
                {
                  name: "Satin...",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Satin..."),
                },
                {
                  name: "Color Overlay..",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Color Overlay..."),
                },
                {
                  name: "Gradient Overlay...",
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Layer Style/Gradient Overlay..."
                    ),
                },
                {
                  name: "Pattern Overlay...",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Pattern Overlay..."),
                },
                {
                  name: "Outer Glow...",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Outer Glow..."),
                },
                {
                  name: "Drop Shadow...",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Drop Shadow..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Copy Layer Style",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Copy Layer Style"),
                },
                {
                  name: "Paste Layer Style",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Paste Layer Style"),
                },
                {
                  name: "Clear Layer Style",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Clear Layer Style"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Global Light...",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Global Light..."),
                },
                {
                  name: "Create Layer",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Create Layer"),
                },
                {
                  name: "Hide All Effects",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Hide All Effects"),
                },
                {
                  name: "Scale Effects...",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Style/Scale Effects..."),
                },
              ],
            },
          ],
        },
        {
          name: "Smart Filter",
          itemSets: [],
          action: () => requestFeature("Menu/Layer/Smart Filter"),
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
                  action: () =>
                    requestFeature("Menu/Layer/New Fill Layer/Solid Color..."),
                },
                {
                  name: "Gradient...",
                  action: () =>
                    requestFeature("Menu/Layer/New Fill Layer/Gradient..."),
                },
                {
                  name: "Pattern..",
                  action: () =>
                    requestFeature("Menu/Layer/New Fill Layer/Pattern..."),
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
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Adjustments/Brightness/Contrast..."
                    ),
                },
                {
                  name: "Levels...",
                  action: () =>
                    requestFeature("Menu/Layer/Adjustments/Levels..."),
                },
                {
                  name: "Curves...",
                  action: () =>
                    requestFeature("Menu/Layer/Adjustments/Curves..."),
                },
                {
                  name: "Exposure...",
                  action: () =>
                    requestFeature("Menu/Layer/Adjustments/Exposure..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Vibrance...",
                  action: () =>
                    requestFeature("Menu/Layer/Adjustments/Vibrance..."),
                },
                {
                  name: "Hue/Saturation...",
                  action: () =>
                    requestFeature("Menu/Layer/Adjustments/Hue/Saturation..."),
                },
                {
                  name: "Color Balance...",
                  action: () =>
                    requestFeature("Menu/Layer/Adjustments/Color Balance..."),
                },
                {
                  name: "Black & White...",
                  action: () =>
                    requestFeature("Menu/Layer/Adjustments/Black & White..."),
                },
                {
                  name: "Photo Filter...",
                  action: () =>
                    requestFeature("Menu/Layer/Adjustments/Photo Filter..."),
                },
                {
                  name: "Channel Mixer...",
                  action: () =>
                    requestFeature("Menu/Layer/Adjustments/Channel Mixer..."),
                },
                {
                  name: "Color Lookup...",
                  action: () =>
                    requestFeature("Menu/Layer/Adjustments/Color Lookup..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Invert",
                  action: () => requestFeature("Menu/Layer/Adjustments/Invert"),
                },
                {
                  name: "Posterize...",
                  action: () =>
                    requestFeature("Menu/Layer/Adjustments/Posterize..."),
                },
                {
                  name: "Threshold...",
                  action: () =>
                    requestFeature("Menu/Layer/Adjustments/Threshold..."),
                },
                {
                  name: "Gradient Map...",
                  action: () =>
                    requestFeature("Menu/Layer/Adjustments/Gradient Map..."),
                },
                {
                  name: "Selective Color...",
                  action: () =>
                    requestFeature("Menu/Layer/Adjustments/Selective Color..."),
                },
              ],
            },
          ],
        },
        {
          name: "Layer Content Options...",
          action: () => requestFeature("Menu/Layer/Layer Content Options..."),
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
                  action: () =>
                    requestFeature("Menu/Layer/Layer Mask/Reveal All"),
                },
                {
                  name: "Hide All",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Mask/Hide All"),
                },
                {
                  name: "Reveal Selection",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Mask/Reveal Selection"),
                },
                {
                  name: "Hide Selection",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Mask/Hide Selection"),
                },
                {
                  name: "From Transparency",
                  action: () =>
                    requestFeature("Menu/Layer/Layer Mask/From Transparency"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Delete",
                  action: () => requestFeature("Menu/Layer/Layer Mask/Delete"),
                },
                {
                  name: "Apply",
                  action: () => requestFeature("Menu/Layer/Layer Mask/Apply"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Disable",
                  action: () => requestFeature("Menu/Layer/Layer Mask/Disable"),
                },
                {
                  name: "Unlink",
                  action: () => requestFeature("Menu/Layer/Layer Mask/Unlink"),
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
                  action: () =>
                    requestFeature("Menu/Layer/Vector Mask/Reveal All"),
                },
                {
                  name: "Hide All",
                  action: () =>
                    requestFeature("Menu/Layer/Vector Mask/Hide All"),
                },
                {
                  name: "Current Path",
                  action: () =>
                    requestFeature("Menu/Layer/Vector Mask/Current Path"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Delete",
                  action: () => requestFeature("Menu/Layer/Vector Mask/Delete"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Enable",
                  action: () => requestFeature("Menu/Layer/Vector Mask/Enable"),
                },
                {
                  name: "Link",
                  action: () => requestFeature("Menu/Layer/Vector Mask/Link"),
                },
              ],
            },
          ],
        },
        {
          name: "Create Clipping Mask",
          action: () => requestFeature("Menu/Layer/Create Clipping Mask"),
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
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Smart Objects/Conver to Smart Object"
                    ),
                },
                {
                  name: "New Smart Object via Copy",
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Smart Objects/New Smart Object via Copy"
                    ),
                },
              ],
            },
            {
              items: [
                {
                  name: "Reveal in Finder",
                  action: () =>
                    requestFeature("Menu/Layer/Smart Objects/Reveal in Finder"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Update Modified Content",
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Smart Objects/Update Modified Content"
                    ),
                },
                {
                  name: "Update All Modified Content",
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Smart Objects/Update All Modified Content"
                    ),
                },
              ],
            },
            {
              items: [
                {
                  name: "Edit Contents",
                  action: () =>
                    requestFeature("Menu/Layer/Smart Objects/Edit Contents"),
                },
                {
                  name: "Relink to File...",
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Smart Objects/Relink to File..."
                    ),
                },
                {
                  name: "Relink to Library Graphic...",
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Smart Objects/Relink to Library Graphic..."
                    ),
                },
                {
                  name: "Replace Contents...",
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Smart Objects/Replace Contents..."
                    ),
                },
                {
                  name: "Export Contents...",
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Smart Objects/Export Contents..."
                    ),
                },
              ],
            },
            {
              items: [
                {
                  name: "Embed Linked",
                  action: () =>
                    requestFeature("Menu/Layer/Smart Objects/Embed Linked"),
                },
                {
                  name: "Embed All Linked",
                  action: () =>
                    requestFeature("Menu/Layer/Smart Objects/Embed All Linked"),
                },
                {
                  name: "Convert to Linked...",
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Smart Objects/Convert to Linked..."
                    ),
                },
                {
                  name: "Convert to Layers",
                  action: () =>
                    requestFeature("Menu/Layer/Smart Objects/Conver to Layers"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Stack Mode",
                  itemSets: [],
                  action: () =>
                    requestFeature("Menu/Layer/Smart Objects/Stack Mode"),
                },
                {
                  name: "Rasterize",
                  action: () =>
                    requestFeature("Menu/Layer/Smart Objects/Rasterize"),
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
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Video Layers/New Video Layer from File..."
                    ),
                },
              ],
            },
            {
              items: [
                {
                  name: "New Blank Video Layer",
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Video Layers/New Blank Video Layer"
                    ),
                },
                {
                  name: "Insert Blank Frame",
                  action: () =>
                    requestFeature("Menu/Layer/Video Layers/Inset Blank Frame"),
                },
                {
                  name: "Duplicate Frame",
                  action: () =>
                    requestFeature("Menu/Layer/Video Layers/Duplicate Frame"),
                },
                {
                  name: "Delete Frame",
                  action: () =>
                    requestFeature("Menu/Layer/Video Layers/Delete Frame"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Replace Footage...",
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Video Layers/Replace Footage..."
                    ),
                },
                {
                  name: "Interpret Footage...",
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Video Layers/Interpret Footage..."
                    ),
                },
              ],
            },
            {
              items: [
                {
                  name: "Show Altered Video",
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Video Layers/Show Altered Video"
                    ),
                },
              ],
            },
            {
              items: [
                {
                  name: "Restore Frame",
                  action: () =>
                    requestFeature("Menu/Layer/Video Layers/Restore Frame"),
                },
                {
                  name: "Restore All Frames",
                  action: () =>
                    requestFeature(
                      "Menu/Layer/Video Layers/Restore All Frames"
                    ),
                },
              ],
            },
            {
              items: [
                {
                  name: "Reload Frame",
                  action: () =>
                    requestFeature("Menu/Layer/Video Layers/Reload Frame"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Rasterize",
                  action: () =>
                    requestFeature("Menu/Layer/Video Layers/Rasterize"),
                },
              ],
            },
          ],
        },
        {
          name: "Rasterize",
          itemSets: [
            {
              items: [
                {
                  name: "Type",
                  action: () => requestFeature("Menu/Layer/Rasterize/Type"),
                },
                {
                  name: "Shape",
                  action: () => requestFeature("Menu/Layer/Rasterize/Shape"),
                },
                {
                  name: "Fill Content",
                  action: () =>
                    requestFeature("Menu/Layer/Rasterize/Fill Content"),
                },
                {
                  name: "Vector Mask",
                  action: () =>
                    requestFeature("Menu/Layer/Rasterize/Vector Mask"),
                },
                {
                  name: "Smart Object",
                  action: () =>
                    requestFeature("Menu/Layer/Rasterize/Smart Object"),
                },
                {
                  name: "Video",
                  action: () => requestFeature("Menu/Layer/Rasterize/Video"),
                },
                {
                  name: "3D",
                  action: () => requestFeature("Menu/Layer/Rasterize/3D"),
                },
                {
                  name: "Layer Style",
                  action: () =>
                    requestFeature("Menu/Layer/Rasterize/Layer Style"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Layer",
                  action: () => requestFeature("Menu/Layer/Rasterize/Layer"),
                },
                {
                  name: "All Layers",
                  action: () =>
                    requestFeature("Menu/Layer/Rasterize/All Layers"),
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
          name: "New Layer Based Slice",
          action: () => requestFeature("Menu/Layer/New Layer Based Slice"),
        },
      ],
    },
    {
      items: [
        {
          name: "Group Layers",
          action: () => requestFeature("Menu/Layer/Group Layers"),
        },
        {
          name: "Ungroup Layers",
          action: () => requestFeature("Menu/Layer/Ungroup Layers"),
        },
        {
          name: "Hide Layers",
          action: () => requestFeature("Menu/Layer/Hide Layers"),
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
                  action: () =>
                    requestFeature("Menu/Layer/Arrange/Bring to Front"),
                },
                {
                  name: "Bring Forward",
                  action: () =>
                    requestFeature("Menu/Layer/Arrange/Bring Forward"),
                },
                {
                  name: "Send Backward",
                  action: () =>
                    requestFeature("Menu/Layer/Arrange/Send Backward"),
                },
                {
                  name: "Send to Back",
                  action: () =>
                    requestFeature("Menu/Layer/Arrange/Send to Back"),
                },
                {
                  name: "Reverse",
                  action: () => requestFeature("Menu/Layer/Arrange/Reverse"),
                },
              ],
            },
          ],
        },
        {
          name: "Combine Shapes",
          itemSets: [],
          action: () => requestFeature("Menu/Layer/Combine Shapes"),
        },
      ],
    },
    {
      items: [
        {
          name: "Align",
          itemSets: [],
          action: () => requestFeature("Menu/Layer/Align"),
        },
        {
          name: "Distribute",
          itemSets: [],
          action: () => requestFeature("Menu/Layer/Distribute"),
        },
      ],
    },
    {
      items: [
        {
          name: "Lock Layers...",
          action: () => requestFeature("Menu/Layer/Lock Layers..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Link Layers",
          action: () => requestFeature("Menu/Layer/Link Layers"),
        },
        {
          name: "Select Linked Layers",
          action: () => requestFeature("Menu/Layer/Select Linked Layers"),
        },
      ],
    },
    {
      items: [
        {
          name: "Merge Down",
          action: () => requestFeature("Menu/Layer/Merge Down"),
        },
        {
          name: "Merge Visible",
          action: () => requestFeature("Menu/Layer/Merge Visible"),
        },
        {
          name: "Flatten Image",
          action: () => requestFeature("Menu/Layer/Flatten Image"),
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
                  action: () =>
                    requestFeature("Menu/Layer/Matting/Color Decontaminate..."),
                },
                {
                  name: "Defringe...",
                  action: () =>
                    requestFeature("Menu/Layer/Matting/Defringe..."),
                },
                {
                  name: "Remove Black Matte",
                  action: () =>
                    requestFeature("Menu/Layer/Matting/Remove Black Matte"),
                },
                {
                  name: "Remove White Matte",
                  action: () =>
                    requestFeature("Menu/Layer/Matting/Remove White Matte"),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
