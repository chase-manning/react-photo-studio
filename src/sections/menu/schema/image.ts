import { requestFeature } from "../../../state/featureSlice";
import { ItemType } from "./menu-items";

export const image: ItemType = {
  name: "Image",
  itemSets: [
    {
      items: [
        {
          name: "Mode",
          itemSets: [],
          action: () => requestFeature("Menu/Image/Mode"),
        },
      ],
    },
    {
      items: [
        {
          name: "Adjustments",
          itemSets: [
            {
              items: [
                {
                  name: "Brightness/Contrast...",
                  action: () =>
                    requestFeature(
                      "Menu/Image/Adjustments/Brightness/Contrast..."
                    ),
                },
                {
                  name: "Levels...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Levels..."),
                },
                {
                  name: "Curves...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Curves..."),
                },
                {
                  name: "Exposure...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Exposure..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Vibrance...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Vibrance..."),
                },
                {
                  name: "Hue/Saturation...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Hue/Saturation..."),
                },
                {
                  name: "Color Balance...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Color Balance..."),
                },
                {
                  name: "Black & White...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Black & White..."),
                },
                {
                  name: "Photo Filter...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Photo Filter..."),
                },
                {
                  name: "Channel Mixer...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Channel Mixer..."),
                },
                {
                  name: "Color Lookup...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Color Lookup..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Invert",
                  action: () => requestFeature("Menu/Image/Adjustments/Invert"),
                },
                {
                  name: "Posterize...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Posterize..."),
                },
                {
                  name: "Threshold...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Threshold..."),
                },
                {
                  name: "Gradient Map...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Gradient Map..."),
                },
                {
                  name: "Selective Color...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Selective Color..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Shadows/Highlights...",
                  action: () =>
                    requestFeature(
                      "Menu/Image/Adjustments/Shadows/Highlights..."
                    ),
                },
                {
                  name: "HDR Toning...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/HDR Toning..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Desaturate",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Desaturate"),
                },
                {
                  name: "Match Color...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Match Color..."),
                },
                {
                  name: "Replace Color...",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Replace Color..."),
                },
                {
                  name: "Equalize",
                  action: () =>
                    requestFeature("Menu/Image/Adjustments/Equalize"),
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
          name: "Auto Tone",
          action: () => requestFeature("Menu/Image/Auto Tone"),
        },
        {
          name: "Auto Contrast",
          action: () => requestFeature("Menu/Image/Auto Contrast"),
        },
        {
          name: "Auto Color",
          action: () => requestFeature("Menu/Image/Auto Color"),
        },
      ],
    },
    {
      items: [
        {
          name: "Image Size...",
          action: () => requestFeature("Menu/Image/Image Size..."),
        },
        {
          name: "Canvas Size...",
          action: () => requestFeature("Menu/Image/Canvas Size..."),
        },
        {
          name: "Image Rotation",
          itemSets: [
            {
              items: [
                {
                  name: "180°",
                  action: () => requestFeature("Menu/Image/Image Rotation/180"),
                },
                {
                  name: "90° Clockwise",
                  action: () =>
                    requestFeature("Menu/Image/Image Rotation/90 Clockwise"),
                },
                {
                  name: "90° Counter Clockwise",
                  action: () =>
                    requestFeature(
                      "Menu/Image/Image Rotation/90 Counter Clockwise"
                    ),
                },
              ],
            },
            {
              items: [
                {
                  name: "Flip Canvas Horizontal",
                  action: () =>
                    requestFeature(
                      "Menu/Image/Image Rotation/Flip Canvas Horizontal"
                    ),
                },
                {
                  name: "Flip Canvas Vertical",
                  action: () =>
                    requestFeature(
                      "Menu/Image/Image Rotation/Flip Canvas Vertical"
                    ),
                },
              ],
            },
          ],
        },
        {
          name: "Crop",
          action: () => requestFeature("Menu/Image/Crop"),
        },
        {
          name: "Trim...",
          action: () => requestFeature("Menu/Image/Trim..."),
        },
        {
          name: "Reveal All",
          action: () => requestFeature("Menu/Image/Reveal All"),
        },
      ],
    },
    {
      items: [
        {
          name: "Duplicate...",
          action: () => requestFeature("Menu/Image/Duplicate..."),
        },
        {
          name: "Apply Image...",
          action: () => requestFeature("Menu/Image/Apply Image..."),
        },
        {
          name: "Calculations...",
          action: () => requestFeature("Menu/Image/Calculations..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Variables",
          itemSets: [
            {
              items: [
                {
                  name: "Define...",
                  action: () =>
                    requestFeature("Menu/Image/Variables/Define..."),
                },
                {
                  name: "Data Sets...",
                  action: () =>
                    requestFeature("Menu/Image/Variables/Data Sets..."),
                },
              ],
            },
          ],
        },
        {
          name: "Apply Data Set...",
          action: () => requestFeature("Menu/Image/Apply Data Set..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Trap...",
          action: () => requestFeature("Menu/Image/Trap..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Analysis",
          itemSets: [
            {
              items: [
                {
                  name: "Set Measurement Scale",
                  action: () =>
                    requestFeature("Menu/Image/Analysis/Set Measurement Scale"),
                },
                {
                  name: "Select Data Points",
                  action: () =>
                    requestFeature("Menu/Image/Analysis/Select Data Points"),
                },
                {
                  name: "Record Measurements",
                  action: () =>
                    requestFeature("Menu/Image/Analysis/Record Measurements"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Ruler Tool",
                  action: () =>
                    requestFeature("Menu/Image/Analysis/Ruler Tool"),
                },
                {
                  name: "Count Tool",
                  action: () =>
                    requestFeature("Menu/Image/Analysis/Count Tool"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Place Scale Marker...",
                  action: () =>
                    requestFeature("Menu/Image/Analysis/Place Scale Marker..."),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
