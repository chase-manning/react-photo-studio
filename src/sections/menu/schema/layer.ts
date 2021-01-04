import { FeatureRequest } from "../../../services/AnalyticsService";
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
                  action: () => FeatureRequest("Menu/Layer/New/Layer..."),
                },
                {
                  name: "Layer from Background...",
                  action: () =>
                    FeatureRequest("Menu/Layer/New/Layer from Background..."),
                },
                {
                  name: "Group...",
                  action: () => FeatureRequest("Menu/Layer/New/Group..."),
                },
                {
                  name: "Group from Layers...",
                  action: () =>
                    FeatureRequest("Menu/Layer/New/Group from Layers..."),
                },
                {
                  name: "Artboard...",
                  action: () => FeatureRequest("Menu/Layer/New/Artboard..."),
                },
                {
                  name: "Artboard from Group...",
                  action: () =>
                    FeatureRequest("Menu/Layer/New/Artboard from Group..."),
                },
                {
                  name: "Artboard from Layers...",
                  action: () =>
                    FeatureRequest("Menu/Layer/New/Artboard from Layers..."),
                },
                {
                  name: "Frame from Layers...",
                  action: () =>
                    FeatureRequest("Menu/Layer/New/Frame from Layers..."),
                },
                {
                  name: "Convert to Frame",
                  action: () =>
                    FeatureRequest("Menu/Layer/New/Convert to Frame"),
                },
              ],
            },

            {
              items: [
                {
                  name: "Layer Via Copy",
                  action: () => FeatureRequest("Menu/Layer/New/Layer Via Copy"),
                },
                {
                  name: "Layer Via Cut",
                  action: () => FeatureRequest("Menu/Layer/New/Layer Via Cut"),
                },
              ],
            },
          ],
        },
        {
          name: "Copy CSS",
          action: () => FeatureRequest("Menu/Layer/Copy CSS"),
        },
        {
          name: "Copy SVG",
          action: () => FeatureRequest("Menu/Layer/Copy SVG"),
        },
        {
          name: "Duplicate Layer...",
          action: () => FeatureRequest("Menu/Layer/Duplicate Layer..."),
        },
        {
          name: "Delete",
          itemSets: [
            {
              items: [
                {
                  name: "Layer",
                  action: () => FeatureRequest("Menu/Layer/Delete/Layer"),
                },
                {
                  name: "Hidden Layers",
                  action: () =>
                    FeatureRequest("Menu/Layer/Delete/Hidden Layers"),
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
          action: () => FeatureRequest("Menu/Layer/Quick Export as PNG"),
        },
        {
          name: "Export As...",
          action: () => FeatureRequest("Menu/Layer/Export As..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Rename Layer...",
          action: () => FeatureRequest("Menu/Layer/Rename Layer..."),
        },
        {
          name: "Layer Style",
          itemSets: [
            {
              items: [
                {
                  name: "Blending Options...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Blending Options"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Bevel & Emboss...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Bevel & Emboss..."),
                },
                {
                  name: "Stroke...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Stroke..."),
                },
                {
                  name: "Inner Shadow...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Inner Shadow..."),
                },
                {
                  name: "Inner Glow...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Inner Glow..."),
                },
                {
                  name: "Satin...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Satin..."),
                },
                {
                  name: "Color Overlay..",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Color Overlay..."),
                },
                {
                  name: "Gradient Overlay...",
                  action: () =>
                    FeatureRequest(
                      "Menu/Layer/Layer Style/Gradient Overlay..."
                    ),
                },
                {
                  name: "Pattern Overlay...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Pattern Overlay..."),
                },
                {
                  name: "Outer Glow...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Outer Glow..."),
                },
                {
                  name: "Drop Shadow...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Drop Shadow..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Copy Layer Style",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Copy Layer Style"),
                },
                {
                  name: "Paste Layer Style",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Paste Layer Style"),
                },
                {
                  name: "Clear Layer Style",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Clear Layer Style"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Global Light...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Global Light..."),
                },
                {
                  name: "Create Layer",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Create Layer"),
                },
                {
                  name: "Hide All Effects",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Hide All Effects"),
                },
                {
                  name: "Scale Effects...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Style/Scale Effects..."),
                },
              ],
            },
          ],
        },
        {
          name: "Smart Filter",
          itemSets: [],
          action: () => FeatureRequest("Menu/Layer/Smart Filter"),
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
                    FeatureRequest("Menu/Layer/New Fill Layer/Solid Color..."),
                },
                {
                  name: "Gradient...",
                  action: () =>
                    FeatureRequest("Menu/Layer/New Fill Layer/Gradient..."),
                },
                {
                  name: "Pattern..",
                  action: () =>
                    FeatureRequest("Menu/Layer/New Fill Layer/Pattern..."),
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
                    FeatureRequest(
                      "Menu/Layer/Adjustments/Brightness/Contrast..."
                    ),
                },
                {
                  name: "Levels...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Adjustments/Levels..."),
                },
                {
                  name: "Curves...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Adjustments/Curves..."),
                },
                {
                  name: "Exposure...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Adjustments/Exposure..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Vibrance...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Adjustments/Vibrance..."),
                },
                {
                  name: "Hue/Saturation...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Adjustments/Hue/Saturation..."),
                },
                {
                  name: "Color Balance...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Adjustments/Color Balance..."),
                },
                {
                  name: "Black & White...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Adjustments/Black & White..."),
                },
                {
                  name: "Photo Filter...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Adjustments/Photo Filter..."),
                },
                {
                  name: "Channel Mixer...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Adjustments/Channel Mixer..."),
                },
                {
                  name: "Color Lookup...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Adjustments/Color Lookup..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Invert",
                  action: () => FeatureRequest("Menu/Layer/Adjustments/Invert"),
                },
                {
                  name: "Posterize...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Adjustments/Posterize..."),
                },
                {
                  name: "Threshold...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Adjustments/Threshold..."),
                },
                {
                  name: "Gradient Map...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Adjustments/Gradient Map..."),
                },
                {
                  name: "Selective Color...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Adjustments/Selective Color..."),
                },
              ],
            },
          ],
        },
        {
          name: "Layer Content Options...",
          action: () => FeatureRequest("Menu/Layer/Layer Content Options..."),
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
                    FeatureRequest("Menu/Layer/Layer Mask/Reveal All"),
                },
                {
                  name: "Hide All",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Mask/Hide All"),
                },
                {
                  name: "Reveal Selection",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Mask/Reveal Selection"),
                },
                {
                  name: "Hide Selection",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Mask/Hide Selection"),
                },
                {
                  name: "From Transparency",
                  action: () =>
                    FeatureRequest("Menu/Layer/Layer Mask/From Transparency"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Delete",
                  action: () => FeatureRequest("Menu/Layer/Layer Mask/Delete"),
                },
                {
                  name: "Apply",
                  action: () => FeatureRequest("Menu/Layer/Layer Mask/Apply"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Disable",
                  action: () => FeatureRequest("Menu/Layer/Layer Mask/Disable"),
                },
                {
                  name: "Unlink",
                  action: () => FeatureRequest("Menu/Layer/Layer Mask/Unlink"),
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
                    FeatureRequest("Menu/Layer/Vector Mask/Reveal All"),
                },
                {
                  name: "Hide All",
                  action: () =>
                    FeatureRequest("Menu/Layer/Vector Mask/Hide All"),
                },
                {
                  name: "Current Path",
                  action: () =>
                    FeatureRequest("Menu/Layer/Vector Mask/Current Path"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Delete",
                  action: () => FeatureRequest("Menu/Layer/Vector Mask/Delete"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Enable",
                  action: () => FeatureRequest("Menu/Layer/Vector Mask/Enable"),
                },
                {
                  name: "Link",
                  action: () => FeatureRequest("Menu/Layer/Vector Mask/Link"),
                },
              ],
            },
          ],
        },
        {
          name: "Create Clipping Mask",
          action: () => FeatureRequest("Menu/Layer/Create Clipping Mask"),
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
                    FeatureRequest(
                      "Menu/Layer/Smart Objects/Conver to Smart Object"
                    ),
                },
                {
                  name: "New Smart Object via Copy",
                  action: () =>
                    FeatureRequest(
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
                    FeatureRequest("Menu/Layer/Smart Objects/Reveal in Finder"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Update Modified Content",
                  action: () =>
                    FeatureRequest(
                      "Menu/Layer/Smart Objects/Update Modified Content"
                    ),
                },
                {
                  name: "Update All Modified Content",
                  action: () =>
                    FeatureRequest(
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
                    FeatureRequest("Menu/Layer/Smart Objects/Edit Contents"),
                },
                {
                  name: "Relink to File...",
                  action: () =>
                    FeatureRequest(
                      "Menu/Layer/Smart Objects/Relink to File..."
                    ),
                },
                {
                  name: "Relink to Library Graphic...",
                  action: () =>
                    FeatureRequest(
                      "Menu/Layer/Smart Objects/Relink to Library Graphic..."
                    ),
                },
                {
                  name: "Replace Contents...",
                  action: () =>
                    FeatureRequest(
                      "Menu/Layer/Smart Objects/Replace Contents..."
                    ),
                },
                {
                  name: "Export Contents...",
                  action: () =>
                    FeatureRequest(
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
                    FeatureRequest("Menu/Layer/Smart Objects/Embed Linked"),
                },
                {
                  name: "Embed All Linked",
                  action: () =>
                    FeatureRequest("Menu/Layer/Smart Objects/Embed All Linked"),
                },
                {
                  name: "Convert to Linked...",
                  action: () =>
                    FeatureRequest(
                      "Menu/Layer/Smart Objects/Convert to Linked..."
                    ),
                },
                {
                  name: "Convert to Layers",
                  action: () =>
                    FeatureRequest("Menu/Layer/Smart Objects/Conver to Layers"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Stack Mode",
                  itemSets: [],
                  action: () =>
                    FeatureRequest("Menu/Layer/Smart Objects/Stack Mode"),
                },
                {
                  name: "Rasterize",
                  action: () =>
                    FeatureRequest("Menu/Layer/Smart Objects/Rasterize"),
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
                    FeatureRequest(
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
                    FeatureRequest(
                      "Menu/Layer/Video Layers/New Blank Video Layer"
                    ),
                },
                {
                  name: "Insert Blank Frame",
                  action: () =>
                    FeatureRequest("Menu/Layer/Video Layers/Inset Blank Frame"),
                },
                {
                  name: "Duplicate Frame",
                  action: () =>
                    FeatureRequest("Menu/Layer/Video Layers/Duplicate Frame"),
                },
                {
                  name: "Delete Frame",
                  action: () =>
                    FeatureRequest("Menu/Layer/Video Layers/Delete Frame"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Replace Footage...",
                  action: () =>
                    FeatureRequest(
                      "Menu/Layer/Video Layers/Replace Footage..."
                    ),
                },
                {
                  name: "Interpret Footage...",
                  action: () =>
                    FeatureRequest(
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
                    FeatureRequest(
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
                    FeatureRequest("Menu/Layer/Video Layers/Restore Frame"),
                },
                {
                  name: "Restore All Frames",
                  action: () =>
                    FeatureRequest(
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
                    FeatureRequest("Menu/Layer/Video Layers/Reload Frame"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Rasterize",
                  action: () =>
                    FeatureRequest("Menu/Layer/Video Layers/Rasterize"),
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
                  action: () => FeatureRequest("Menu/Layer/Rasterize/Type"),
                },
                {
                  name: "Shape",
                  action: () => FeatureRequest("Menu/Layer/Rasterize/Shape"),
                },
                {
                  name: "Fill Content",
                  action: () =>
                    FeatureRequest("Menu/Layer/Rasterize/Fill Content"),
                },
                {
                  name: "Vector Mask",
                  action: () =>
                    FeatureRequest("Menu/Layer/Rasterize/Vector Mask"),
                },
                {
                  name: "Smart Object",
                  action: () =>
                    FeatureRequest("Menu/Layer/Rasterize/Smart Object"),
                },
                {
                  name: "Video",
                  action: () => FeatureRequest("Menu/Layer/Rasterize/Video"),
                },
                {
                  name: "3D",
                  action: () => FeatureRequest("Menu/Layer/Rasterize/3D"),
                },
                {
                  name: "Layer Style",
                  action: () =>
                    FeatureRequest("Menu/Layer/Rasterize/Layer Style"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Layer",
                  action: () => FeatureRequest("Menu/Layer/Rasterize/Layer"),
                },
                {
                  name: "All Layers",
                  action: () =>
                    FeatureRequest("Menu/Layer/Rasterize/All Layers"),
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
          action: () => FeatureRequest("Menu/Layer/New Layer Based Slice"),
        },
      ],
    },
    {
      items: [
        {
          name: "Group Layers",
          action: () => FeatureRequest("Menu/Layer/Group Layers"),
        },
        {
          name: "Ungroup Layers",
          action: () => FeatureRequest("Menu/Layer/Ungroup Layers"),
        },
        {
          name: "Hide Layers",
          action: () => FeatureRequest("Menu/Layer/Hide Layers"),
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
                    FeatureRequest("Menu/Layer/Arrange/Bring to Front"),
                },
                {
                  name: "Bring Forward",
                  action: () =>
                    FeatureRequest("Menu/Layer/Arrange/Bring Forward"),
                },
                {
                  name: "Send Backward",
                  action: () =>
                    FeatureRequest("Menu/Layer/Arrange/Send Backward"),
                },
                {
                  name: "Send to Back",
                  action: () =>
                    FeatureRequest("Menu/Layer/Arrange/Send to Back"),
                },
                {
                  name: "Reverse",
                  action: () => FeatureRequest("Menu/Layer/Arrange/Reverse"),
                },
              ],
            },
          ],
        },
        {
          name: "Combine Shapes",
          itemSets: [],
          action: () => FeatureRequest("Menu/Layer/Combine Shapes"),
        },
      ],
    },
    {
      items: [
        {
          name: "Align",
          itemSets: [],
          action: () => FeatureRequest("Menu/Layer/Align"),
        },
        {
          name: "Distribute",
          itemSets: [],
          action: () => FeatureRequest("Menu/Layer/Distribute"),
        },
      ],
    },
    {
      items: [
        {
          name: "Lock Layers...",
          action: () => FeatureRequest("Menu/Layer/Lock Layers..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Link Layers",
          action: () => FeatureRequest("Menu/Layer/Link Layers"),
        },
        {
          name: "Select Linked Layers",
          action: () => FeatureRequest("Menu/Layer/Select Linked Layers"),
        },
      ],
    },
    {
      items: [
        {
          name: "Merge Down",
          action: () => FeatureRequest("Menu/Layer/Merge Down"),
        },
        {
          name: "Merge Visible",
          action: () => FeatureRequest("Menu/Layer/Merge Visible"),
        },
        {
          name: "Flatten Image",
          action: () => FeatureRequest("Menu/Layer/Flatten Image"),
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
                    FeatureRequest("Menu/Layer/Matting/Color Decontaminate..."),
                },
                {
                  name: "Defringe...",
                  action: () =>
                    FeatureRequest("Menu/Layer/Matting/Defringe..."),
                },
                {
                  name: "Remove Black Matte",
                  action: () =>
                    FeatureRequest("Menu/Layer/Matting/Remove Black Matte"),
                },
                {
                  name: "Remove White Matte",
                  action: () =>
                    FeatureRequest("Menu/Layer/Matting/Remove White Matte"),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
