import { FeatureRequest } from "../../../services/AnalyticsService";
import { ItemType } from "./menu-items";

export const file: ItemType = {
  name: "File",
  itemSets: [
    {
      items: [
        {
          name: "New...",
          action: () => FeatureRequest("Menu/File/New..."),
        },
        {
          name: "Open...",
          action: () => FeatureRequest("Menu/File/Open..."),
        },
        {
          name: "Browse in Bridge...",
          action: () => FeatureRequest("Menu/File/Browse in Bridge..."),
        },
        {
          name: "Open as Smart Object...",
          action: () => FeatureRequest("Menu/File/Open as Smart Object..."),
        },
        {
          name: "Open Recent",
          itemSets: [],
          action: () => FeatureRequest("Menu/File/Open Recent"),
        },
      ],
    },
    {
      items: [
        {
          name: "Close",
          action: () => FeatureRequest("Menu/File/Close"),
        },
        {
          name: "Close All",
          action: () => FeatureRequest("Menu/File/Close All"),
        },
        {
          name: "Close Others",
          action: () => FeatureRequest("Menu/File/Close Others"),
        },
        {
          name: "Save",
          action: () => FeatureRequest("Menu/File/Save"),
        },
        {
          name: "Save As...",
          action: () => FeatureRequest("Menu/File/Save As..."),
        },
        {
          name: "Revert",
          action: () => FeatureRequest("Menu/File/Revert"),
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
                  action: () =>
                    FeatureRequest("Menu/File/Export/Quick Export as PNG"),
                },
                {
                  name: "Export As...",
                  action: () => FeatureRequest("Menu/File/Export/Export As..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Export Preferences...",
                  action: () =>
                    FeatureRequest("Menu/File/Export/Export Preferences..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Save for Web (Legacy)...",
                  action: () =>
                    FeatureRequest("Menu/File/Export/Save for Web (Legacy)..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Artboards to Files...",
                  action: () =>
                    FeatureRequest("Menu/File/Export/Artboards to Files..."),
                },
                {
                  name: "Artboards to PDF...",
                  action: () =>
                    FeatureRequest("Menu/File/Export/Artboards to PDF..."),
                },
                {
                  name: "Export For Aero...",
                  action: () =>
                    FeatureRequest("Menu/File/Export/Export for Aero..."),
                },
                {
                  name: "Layer Comps to Files...",
                  action: () =>
                    FeatureRequest("Menu/File/Export/Layer Comps to Files..."),
                },
                {
                  name: "Layer Comps to PDF...",
                  action: () =>
                    FeatureRequest("Menu/File/Export/Layer Comps to PDF..."),
                },
                {
                  name: "Layers to Files...",
                  action: () =>
                    FeatureRequest("Menu/File/Export/Layers to Files..."),
                },
                {
                  name: "Color Lookup Tables...",
                  action: () =>
                    FeatureRequest("Menu/File/Export/Color Lookup Tables..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Data Sets as Files...",
                  action: () =>
                    FeatureRequest("Menu/File/Export/Data Sets as Files..."),
                },
                {
                  name: "Paths to Illustrator...",
                  action: () =>
                    FeatureRequest("Menu/File/Export/Paths to Illustrator..."),
                },
                {
                  name: "Render Video...",
                  action: () =>
                    FeatureRequest("Menu/File/Export/Render Video..."),
                },
                {
                  name: "Zoomify...",
                  action: () => FeatureRequest("Menu/File/Export/Zoomify..."),
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
                  action: () =>
                    FeatureRequest("Menu/File/Generate/Image Assets"),
                },
              ],
            },
          ],
        },
        {
          name: "Share...",
          action: () => FeatureRequest("Menu/File/Share..."),
        },
        {
          name: "Share on Behance...",
          action: () => FeatureRequest("Menu/File/Share on Behance..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Search Adobe Stock...",
          action: () => FeatureRequest("Menu/File/Search Adobe Stock..."),
        },
        {
          name: "Place Embedded...",
          action: () => FeatureRequest("Menu/File/Place Embedded..."),
        },
        {
          name: "Place Linked...",
          action: () => FeatureRequest("Menu/File/Place Linked..."),
        },
        {
          name: "Package...",
          action: () => FeatureRequest("Menu/File/Package..."),
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
                  action: () => FeatureRequest("Menu/File/Automate/Batch..."),
                },
                {
                  name: "PDF Presentation...",
                  action: () =>
                    FeatureRequest("Menu/File/Automate/PDF Presentation..."),
                },
                {
                  name: "Create Droplet...",
                  action: () =>
                    FeatureRequest("Menu/File/Automate/Create Droplet..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Crop and Straighten Photos",
                  action: () =>
                    FeatureRequest(
                      "Menu/File/Automate/Croop and Straighten Photos"
                    ),
                },
              ],
            },
            {
              items: [
                {
                  name: "Contact Sheet II...",
                  action: () =>
                    FeatureRequest("Menu/File/Automate/Contact Sheet II..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Conditional Mode Change...",
                  action: () =>
                    FeatureRequest(
                      "Menu/File/Automate/Conditional Mode Change..."
                    ),
                },
                {
                  name: "Fit Image...",
                  action: () =>
                    FeatureRequest("Menu/File/Automate/Fit Image..."),
                },
                {
                  name: "Lens Correction...",
                  action: () =>
                    FeatureRequest("Menu/File/Automate/Lens Correction..."),
                },
                {
                  name: "Merge to HDR Pro...",
                  action: () =>
                    FeatureRequest("Menu/File/Automate/Merge to HDR Pro..."),
                },
                {
                  name: "Photomerge...",
                  action: () =>
                    FeatureRequest("Menu/File/Automate/Photomerge..."),
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
                  action: () =>
                    FeatureRequest("Menu/File/Scripts/Image Processor..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Delete All Empty Layers",
                  action: () =>
                    FeatureRequest("Menu/File/Scripts/Delete All Empty Layers"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Flatten All Layer Effects",
                  action: () =>
                    FeatureRequest(
                      "Menu/File/Scripts/Flatten All Layers Effects"
                    ),
                },
                {
                  name: "Flatten All Masks",
                  action: () =>
                    FeatureRequest("Menu/File/Scripts/Flatten All Masks"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Script Events Manager...",
                  action: () =>
                    FeatureRequest(
                      "Menu/File/Scripts/Script Events Manager..."
                    ),
                },
              ],
            },
            {
              items: [
                {
                  name: "Load Files into Stack...",
                  action: () =>
                    FeatureRequest(
                      "Menu/File/Scripts/Load Files into Stack..."
                    ),
                },
                {
                  name: "Load Multiple DICOM Files...",
                  action: () =>
                    FeatureRequest(
                      "Menu/File/Scripts/Load Multiple DICOM Files..."
                    ),
                },
                {
                  name: "Statistics...",
                  action: () =>
                    FeatureRequest("Menu/File/Scripts/Statistics..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Browse...",
                  action: () => FeatureRequest("Menu/File/Scripts/Browse..."),
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
                  action: () =>
                    FeatureRequest("Menu/File/Import/Variable Data Sets..."),
                },
                {
                  name: "Video Frames to Layers...",
                  action: () =>
                    FeatureRequest(
                      "Menu/File/Import/Video Frames to Layers..."
                    ),
                },
                {
                  name: "Images from Device...",
                  action: () =>
                    FeatureRequest("Menu/File/Import/Images from Device..."),
                },
                {
                  name: "Notes...",
                  action: () => FeatureRequest("Menu/File/Import/Notes..."),
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
                  action: () =>
                    FeatureRequest(
                      "Menu/File/Import from iPhone or iPad/Take Photo"
                    ),
                },
                {
                  name: "Scan Documents",
                  action: () =>
                    FeatureRequest(
                      "Menu/File/Import from iPhone or iPad/Scan Documents"
                    ),
                },
                {
                  name: "Add Sketch",
                  action: () =>
                    FeatureRequest(
                      "Menu/File/Import from iPhone or iPad/Add Sketch"
                    ),
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
          action: () => FeatureRequest("Menu/File/File Info..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Print...",
          action: () => FeatureRequest("Menu/File/Print..."),
        },
        {
          name: "Print One Copy",
          action: () => FeatureRequest("Menu/File/Print One Copy"),
        },
      ],
    },
  ],
};
