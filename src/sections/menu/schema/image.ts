import { FeatureRequest } from "../../../services/AnalyticsService";
import { ItemType } from "./menu-items";

export const image: ItemType = {
  name: "Image",
  itemSets: [
    {
      items: [
        {
          name: "Mode",
          itemSets: [],
          action: () => FeatureRequest("Menu/Image/Mode"),
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
                    FeatureRequest(
                      "Menu/Image/Adjustments/Brightness/Contrast..."
                    ),
                },
                {
                  name: "Levels...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Levels..."),
                },
                {
                  name: "Curves...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Curves..."),
                },
                {
                  name: "Exposure...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Exposure..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Vibrance...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Vibrance..."),
                },
                {
                  name: "Hue/Saturation...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Hue/Saturation..."),
                },
                {
                  name: "Color Balance...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Color Balance..."),
                },
                {
                  name: "Black & White...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Black & White..."),
                },
                {
                  name: "Photo Filter...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Photo Filter..."),
                },
                {
                  name: "Channel Mixer...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Channel Mixer..."),
                },
                {
                  name: "Color Lookup...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Color Lookup..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Invert",
                  action: () => FeatureRequest("Menu/Image/Adjustments/Invert"),
                },
                {
                  name: "Posterize...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Posterize..."),
                },
                {
                  name: "Threshold...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Threshold..."),
                },
                {
                  name: "Gradient Map...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Gradient Map..."),
                },
                {
                  name: "Selective Color...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Selective Color..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Shadows/Highlights...",
                  action: () =>
                    FeatureRequest(
                      "Menu/Image/Adjustments/Shadows/Highlights..."
                    ),
                },
                {
                  name: "HDR Toning...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/HDR Toning..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Desaturate",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Desaturate"),
                },
                {
                  name: "Match Color...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Match Color..."),
                },
                {
                  name: "Replace Color...",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Replace Color..."),
                },
                {
                  name: "Equalize",
                  action: () =>
                    FeatureRequest("Menu/Image/Adjustments/Equalize"),
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
          action: () => FeatureRequest("Menu/Image/Auto Tone"),
        },
        {
          name: "Auto Contrast",
          action: () => FeatureRequest("Menu/Image/Auto Contrast"),
        },
        {
          name: "Auto Color",
          action: () => FeatureRequest("Menu/Image/Auto Color"),
        },
      ],
    },
    {
      items: [
        {
          name: "Image Size...",
          action: () => FeatureRequest("Menu/Image/Image Size..."),
        },
        {
          name: "Canvas Size...",
          action: () => FeatureRequest("Menu/Image/Canvas Size..."),
        },
        {
          name: "Image Rotation",
          itemSets: [
            {
              items: [
                {
                  name: "180°",
                  action: () => FeatureRequest("Menu/Image/Image Rotation/180"),
                },
                {
                  name: "90° Clockwise",
                  action: () =>
                    FeatureRequest("Menu/Image/Image Rotation/90 Clockwise"),
                },
                {
                  name: "90° Counter Clockwise",
                  action: () =>
                    FeatureRequest(
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
                    FeatureRequest(
                      "Menu/Image/Image Rotation/Flip Canvas Horizontal"
                    ),
                },
                {
                  name: "Flip Canvas Vertical",
                  action: () =>
                    FeatureRequest(
                      "Menu/Image/Image Rotation/Flip Canvas Vertical"
                    ),
                },
              ],
            },
          ],
        },
        {
          name: "Crop",
          action: () => FeatureRequest("Menu/Image/Crop"),
        },
        {
          name: "Trim...",
          action: () => FeatureRequest("Menu/Image/Trim..."),
        },
        {
          name: "Reveal All",
          action: () => FeatureRequest("Menu/Image/Reveal All"),
        },
      ],
    },
    {
      items: [
        {
          name: "Duplicate...",
          action: () => FeatureRequest("Menu/Image/Duplicate..."),
        },
        {
          name: "Apply Image...",
          action: () => FeatureRequest("Menu/Image/Apply Image..."),
        },
        {
          name: "Calculations...",
          action: () => FeatureRequest("Menu/Image/Calculations..."),
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
                    FeatureRequest("Menu/Image/Variables/Define..."),
                },
                {
                  name: "Data Sets...",
                  action: () =>
                    FeatureRequest("Menu/Image/Variables/Data Sets..."),
                },
              ],
            },
          ],
        },
        {
          name: "Apply Data Set...",
          action: () => FeatureRequest("Menu/Image/Apply Data Set..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Trap...",
          action: () => FeatureRequest("Menu/Image/Trap..."),
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
                    FeatureRequest("Menu/Image/Analysis/Set Measurement Scale"),
                },
                {
                  name: "Select Data Points",
                  action: () =>
                    FeatureRequest("Menu/Image/Analysis/Select Data Points"),
                },
                {
                  name: "Record Measurements",
                  action: () =>
                    FeatureRequest("Menu/Image/Analysis/Record Measurements"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Ruler Tool",
                  action: () =>
                    FeatureRequest("Menu/Image/Analysis/Ruler Tool"),
                },
                {
                  name: "Count Tool",
                  action: () =>
                    FeatureRequest("Menu/Image/Analysis/Count Tool"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Place Scale Marker...",
                  action: () =>
                    FeatureRequest("Menu/Image/Analysis/Place Scale Marker..."),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
