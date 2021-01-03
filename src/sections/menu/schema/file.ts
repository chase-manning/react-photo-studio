import { MenuItemType } from "./menu-items";

export const file: MenuItemType = {
  name: "File",
  itemSets: [
    {
      items: [
        {
          name: "New...",
          action: () => console.log("meow"),
        },
        {
          name: "Open...",
          action: () => console.log("meow"),
        },
        {
          name: "Browse in Bridge...",
          action: () => console.log("meow"),
        },
        {
          name: "Open as Smart Object...",
          action: () => console.log("meow"),
        },
        {
          name: "Open Recent",
          itemSets: [],
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Close",
          action: () => console.log("meow"),
        },
        {
          name: "Close All",
          action: () => console.log("meow"),
        },
        {
          name: "Close Others",
          action: () => console.log("meow"),
        },
        {
          name: "Save",
          action: () => console.log("meow"),
        },
        {
          name: "Save As...",
          action: () => console.log("meow"),
        },
        {
          name: "Revert",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Export",
          itemSets: [
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
                  name: "Export Preferences...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Save for Web (Legacy)...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Artboards to Files...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Artboards to PDF...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Export For Aero...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Layer Comps to Files...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Layer Comps to PDF...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Layers to Files...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Color Lookup Tables...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Data Sets as Files...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Paths to Illustrator...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Render Video...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Zoomify...",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Generate",
          itemSets: [
            {
              items: [
                {
                  name: "Image Assets",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Share...",
          action: () => console.log("meow"),
        },
        {
          name: "Share on Behance...",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Search Adobe Stock...",
          action: () => console.log("meow"),
        },
        {
          name: "Place Embedded...",
          action: () => console.log("meow"),
        },
        {
          name: "Place Linked...",
          action: () => console.log("meow"),
        },
        {
          name: "Package...",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Automate",
          itemSets: [
            {
              items: [
                {
                  name: "Batch...",
                  action: () => console.log("meow"),
                },
                {
                  name: "PDF Presentation...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Create Droplet...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Crop and Straighten Photos",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Contact Sheet II...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Conditional Mode Change...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Fit Image...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Lens Correction...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Merge to HDR Pro...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Photomerge...",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Scripts",
          itemSets: [
            {
              items: [
                {
                  name: "Image Processor...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Delete All Emptry Layers",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Flatten All Layer Effects",
                  action: () => console.log("meow"),
                },
                {
                  name: "Flatten All Masks",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Script Events Manager...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Load Files into Stack...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Load Multiple DICOM Files...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Statistics...",
                  action: () => console.log("meow"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Browse...",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Import",
          itemSets: [
            {
              items: [
                {
                  name: "Variable Data Sets...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Video Frames to Layers...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Images from Device...",
                  action: () => console.log("meow"),
                },
                {
                  name: "Notes...",
                  action: () => console.log("meow"),
                },
              ],
            },
          ],
        },
        {
          name: "Import from iPhone or iPad",
          itemSets: [
            {
              items: [
                {
                  name: "Take Photo",
                  action: () => console.log("meow"),
                },
                {
                  name: "Scan Documents",
                  action: () => console.log("meow"),
                },
                {
                  name: "Add Sketch",
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
          name: "File Info...",
          action: () => console.log("meow"),
        },
      ],
    },
    {
      items: [
        {
          name: "Print...",
          action: () => console.log("meow"),
        },
        {
          name: "Print One Copy",
          action: () => console.log("meow"),
        },
      ],
    },
  ],
};
