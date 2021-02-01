import { Action } from "../../../state/actionSchema";
import { openFile } from "../../../state/actionsSlice";
import { requestFeature } from "../../../state/featureSlice";
import { ItemType } from "./menu-items";

export const file: ItemType = {
  name: "File",
  itemSets: [
    {
      items: [
        {
          type: Action.NEW_FILE,
          name: "New...",
          action: () => requestFeature("Menu/File/New..."),
        },
        {
          type: Action.OPEN_FILE,
          name: "Open...",
          action: () => openFile(),
        },
        {
          name: "Open as Smart Object...",
          action: () => requestFeature("Menu/File/Open as Smart Object..."),
        },
        {
          name: "Open Recent",
          itemSets: [],
          action: () => requestFeature("Menu/File/Open Recent"),
          disabled: true,
        },
      ],
    },
    {
      items: [
        {
          name: "Close",
          action: () => requestFeature("Menu/File/Close"),
        },
        {
          name: "Close All",
          action: () => requestFeature("Menu/File/Close All"),
        },
        {
          name: "Close Others",
          action: () => requestFeature("Menu/File/Close Others"),
        },
        {
          name: "Save",
          action: () => requestFeature("Menu/File/Save"),
        },
        {
          name: "Save As...",
          action: () => requestFeature("Menu/File/Save As..."),
        },
        {
          name: "Revert",
          action: () => requestFeature("Menu/File/Revert"),
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
                    requestFeature("Menu/File/Export/Quick Export as PNG"),
                },
                {
                  name: "Export As...",
                  action: () => requestFeature("Menu/File/Export/Export As..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Export Preferences...",
                  action: () =>
                    requestFeature("Menu/File/Export/Export Preferences..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Save for Web (Legacy)...",
                  action: () =>
                    requestFeature("Menu/File/Export/Save for Web (Legacy)..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Artboards to Files...",
                  action: () =>
                    requestFeature("Menu/File/Export/Artboards to Files..."),
                },
                {
                  name: "Artboards to PDF...",
                  action: () =>
                    requestFeature("Menu/File/Export/Artboards to PDF..."),
                },
                {
                  name: "Export For Aero...",
                  action: () =>
                    requestFeature("Menu/File/Export/Export for Aero..."),
                },
                {
                  name: "Layer Comps to Files...",
                  action: () =>
                    requestFeature("Menu/File/Export/Layer Comps to Files..."),
                },
                {
                  name: "Layer Comps to PDF...",
                  action: () =>
                    requestFeature("Menu/File/Export/Layer Comps to PDF..."),
                },
                {
                  name: "Layers to Files...",
                  action: () =>
                    requestFeature("Menu/File/Export/Layers to Files..."),
                },
                {
                  name: "Color Lookup Tables...",
                  action: () =>
                    requestFeature("Menu/File/Export/Color Lookup Tables..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Data Sets as Files...",
                  action: () =>
                    requestFeature("Menu/File/Export/Data Sets as Files..."),
                },
                {
                  name: "Paths to Illustrator...",
                  action: () =>
                    requestFeature("Menu/File/Export/Paths to Illustrator..."),
                },
                {
                  name: "Render Video...",
                  action: () =>
                    requestFeature("Menu/File/Export/Render Video..."),
                },
                {
                  name: "Zoomify...",
                  action: () => requestFeature("Menu/File/Export/Zoomify..."),
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
                    requestFeature("Menu/File/Generate/Image Assets"),
                },
              ],
            },
          ],
        },
        {
          name: "Share...",
          action: () => requestFeature("Menu/File/Share..."),
        },
        {
          name: "Share on Behance...",
          action: () => requestFeature("Menu/File/Share on Behance..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Search Adobe Stock...",
          action: () => requestFeature("Menu/File/Search Adobe Stock..."),
        },
        {
          name: "Place Embedded...",
          action: () => requestFeature("Menu/File/Place Embedded..."),
        },
        {
          name: "Place Linked...",
          action: () => requestFeature("Menu/File/Place Linked..."),
        },
        {
          name: "Package...",
          action: () => requestFeature("Menu/File/Package..."),
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
                  action: () => requestFeature("Menu/File/Automate/Batch..."),
                },
                {
                  name: "PDF Presentation...",
                  action: () =>
                    requestFeature("Menu/File/Automate/PDF Presentation..."),
                },
                {
                  name: "Create Droplet...",
                  action: () =>
                    requestFeature("Menu/File/Automate/Create Droplet..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Crop and Straighten Photos",
                  action: () =>
                    requestFeature(
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
                    requestFeature("Menu/File/Automate/Contact Sheet II..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Conditional Mode Change...",
                  action: () =>
                    requestFeature(
                      "Menu/File/Automate/Conditional Mode Change..."
                    ),
                },
                {
                  name: "Fit Image...",
                  action: () =>
                    requestFeature("Menu/File/Automate/Fit Image..."),
                },
                {
                  name: "Lens Correction...",
                  action: () =>
                    requestFeature("Menu/File/Automate/Lens Correction..."),
                },
                {
                  name: "Merge to HDR Pro...",
                  action: () =>
                    requestFeature("Menu/File/Automate/Merge to HDR Pro..."),
                },
                {
                  name: "Photomerge...",
                  action: () =>
                    requestFeature("Menu/File/Automate/Photomerge..."),
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
                    requestFeature("Menu/File/Scripts/Image Processor..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Delete All Empty Layers",
                  action: () =>
                    requestFeature("Menu/File/Scripts/Delete All Empty Layers"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Flatten All Layer Effects",
                  action: () =>
                    requestFeature(
                      "Menu/File/Scripts/Flatten All Layers Effects"
                    ),
                },
                {
                  name: "Flatten All Masks",
                  action: () =>
                    requestFeature("Menu/File/Scripts/Flatten All Masks"),
                },
              ],
            },
            {
              items: [
                {
                  name: "Script Events Manager...",
                  action: () =>
                    requestFeature(
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
                    requestFeature(
                      "Menu/File/Scripts/Load Files into Stack..."
                    ),
                },
                {
                  name: "Load Multiple DICOM Files...",
                  action: () =>
                    requestFeature(
                      "Menu/File/Scripts/Load Multiple DICOM Files..."
                    ),
                },
                {
                  name: "Statistics...",
                  action: () =>
                    requestFeature("Menu/File/Scripts/Statistics..."),
                },
              ],
            },
            {
              items: [
                {
                  name: "Browse...",
                  action: () => requestFeature("Menu/File/Scripts/Browse..."),
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
                    requestFeature("Menu/File/Import/Variable Data Sets..."),
                },
                {
                  name: "Video Frames to Layers...",
                  action: () =>
                    requestFeature(
                      "Menu/File/Import/Video Frames to Layers..."
                    ),
                },
                {
                  name: "Images from Device...",
                  action: () =>
                    requestFeature("Menu/File/Import/Images from Device..."),
                },
                {
                  name: "Notes...",
                  action: () => requestFeature("Menu/File/Import/Notes..."),
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
                    requestFeature(
                      "Menu/File/Import from iPhone or iPad/Take Photo"
                    ),
                },
                {
                  name: "Scan Documents",
                  action: () =>
                    requestFeature(
                      "Menu/File/Import from iPhone or iPad/Scan Documents"
                    ),
                },
                {
                  name: "Add Sketch",
                  action: () =>
                    requestFeature(
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
          action: () => requestFeature("Menu/File/File Info..."),
        },
      ],
    },
    {
      items: [
        {
          name: "Print...",
          action: () => requestFeature("Menu/File/Print..."),
        },
        {
          name: "Print One Copy",
          action: () => requestFeature("Menu/File/Print One Copy"),
        },
      ],
    },
  ],
};
