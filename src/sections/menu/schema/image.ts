import { ItemType } from "./menu-items";

export const image: ItemType = {
  name: "Image",
  itemSets: [
    {
      items: [
        {
          name: "Mode",
          itemSets: [],
          action: () => console.log("meow"),
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
            {
              items: [
                {
                  name: "Shadows/Highlights...",
                  action: () => console.log("meow"),
                },
                {
                  name: "HDR Toning...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Desaturate",
                  action: () => console.log("meow"),
                },
                {
                  name: "Match Color...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Replace Color...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Equalize",
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
          name: "Auto Tone",
          action: () => console.log("meow"),
        },
        {
          name: "Auto Contrast",
          action: () => console.log("meow"),
        },
        {
          name: "Auto Color",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Image Size...",
          action: () => console.log("meow"),
        },
        {
          name: "Canvas Size...",
          action: () => console.log("meow"),
        },
        {
          name: "Image Rotation",
          itemSets: [
            {
              items: [
                {
                  name: "180°",
                  action: () => console.log("meow"),
                },
                {
                  name: "90° Clockwise",
                  action: () => console.log("meow"),
                },
                {
                  name: "90° Counter Clockwise",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Flip Canvas Horizontal",
                  action: () => console.log("meow"),
                },
                {
                  name: "Flip Canvas Vertical",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Crop",
          action: () => console.log("meow"),
        },
        {
          name: "Trim...",
          action: () => console.log("meow"),
        },
        {
          name: "Reveal All",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Duplicate...",
          action: () => console.log("meow"),
        },
        {
          name: "Apply Image...",
          action: () => console.log("meow"),
        },
        {
          name: "Calculations...",
          action: () => console.log("meow"),
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
                  action: () => console.log("meow"),
                },
                {
                  name: "Data Sets...",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Apply Data Set...",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Trap...",
          action: () => console.log("meow"),
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
                  action: () => console.log("meow"),
                },
                {
                  name: "Select Data Points",
                  action: () => console.log("meow"),
                },
                {
                  name: "Record Measurements",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Ruler Tool",
                  action: () => console.log("meow"),
                },
                {
                  name: "Count Tool",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Place Scale Marker...",
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
