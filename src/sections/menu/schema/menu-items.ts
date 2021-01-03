export type ItemType = {
  name: string;
  itemSets?: ItemSetType[];
  action?: () => void;
};

export type ItemSetType = {
  items: ItemType[];
};

export type MenuItemType = {
  name: string;
  itemSets: ItemSetType[];
};

export const menuItems: MenuItemType[] = [
  {
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
  },
  {
    name: "Edit",
    itemSets: [
      {
        items: [
          {
            name: "Undo Deselect",
            action: () => console.log("meow"),
          },
          {
            name: "Redo",
            action: () => console.log("meow"),
          },
          {
            name: "Toggle Last State",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Fade..",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Cut",
            action: () => console.log("meow"),
          },
          {
            name: "Copy",
            action: () => console.log("meow"),
          },
          {
            name: "Copy Merged",
            action: () => console.log("meow"),
          },
          {
            name: "Paste",
            action: () => console.log("meow"),
          },
          {
            name: "Paste Special",
            itemSets: [
              {
                items: [
                  {
                    name: "Paste without Formatting",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Paste in Place",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Paste Into",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Paste Outside",
                    action: () => console.log("meow"),
                  },
                ],
              },
            ],
          },
          {
            name: "Clear",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Search",
            action: () => console.log("meow"),
          },
          {
            name: "Check Spelling...",
            action: () => console.log("meow"),
          },
          {
            name: "Find and Replace Text...",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Fill...",
            action: () => console.log("meow"),
          },
          {
            name: "Stroke...",
            action: () => console.log("meow"),
          },
          {
            name: "Content-Aware Fill...",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Content-Aware Scale",
            action: () => console.log("meow"),
          },
          {
            name: "Puppet Warp",
            action: () => console.log("meow"),
          },
          {
            name: "Perspective Warp",
            action: () => console.log("meow"),
          },
          {
            name: "Free Transform",
            action: () => console.log("meow"),
          },
          {
            name: "Transform",
            itemSets: [
              {
                items: [
                  {
                    name: "Again",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Scale",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Rotate",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Skew",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Distort",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Perspectiv",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Warp",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Split Warp Horizontally",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Split Warp Vertically",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Split Warp Crosswise",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Remote Warp Split",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Rotate 180°",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Rotate 90° Clockwise",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Rotate 90° Counter Clockwise",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Flip Horizontal",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Flip Vertical",
                    action: () => console.log("meow"),
                  },
                ],
              },
            ],
          },
          {
            name: "Auto-Align Layers...",
            action: () => console.log("meow"),
          },
          {
            name: "Auto-Blend Layers...",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Define Brush Preset...",
            action: () => console.log("meow"),
          },
          {
            name: "Define Pattern...",
            action: () => console.log("meow"),
          },
          {
            name: "Define Custom Shape...",
            action: () => console.log("meow"),
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
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Histories",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "All",
                    action: () => console.log("meow"),
                  },
                ],
              },
              {
                items: [
                  {
                    name: "Video Cache",
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
            name: "Adobe PDF Presets...",
            action: () => console.log("meow"),
          },
          {
            name: "Presets",
            itemSets: [
              {
                items: [
                  {
                    name: "Preset Manager...",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Migrate Presets",
                    action: () => console.log("meow"),
                  },
                  {
                    name: "Export/Import Presets...",
                    action: () => console.log("meow"),
                  },
                ],
              },
            ],
          },
          {
            name: "Remote Connections...",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Color Settings...",
            action: () => console.log("meow"),
          },
          {
            name: "Assign Profile...",
            action: () => console.log("meow"),
          },
          {
            name: "Convert to Profile...",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Keyboard Shortcuts...",
            action: () => console.log("meow"),
          },
          {
            name: "Menus...",
            action: () => console.log("meow"),
          },
          {
            name: "Toolbar...",
            action: () => console.log("meow"),
          },
        ],
      },
      {
        items: [
          {
            name: "Start Dictation...",
            action: () => console.log("meow"),
          },
        ],
      },
    ],
  },
  {
    name: "Image",
    itemSets: [
      {
        items: [
          {
            name: "Mode",
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
  },
  {
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
            itemSets: [],
          },
          {
            name: "Vector Mask",
            itemSets: [],
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
            itemSets: [],
          },
          {
            name: "Video Layers",
            itemSets: [],
          },
          {
            name: "Rasterize",
            itemSets: [],
          },
        ],
      },
      {
        items: [
          {
            name: "New Layer Based Slice",
            itemSets: [],
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
            itemSets: [],
          },
          {
            name: "Combine Shapes",
            itemSets: [],
          },
        ],
      },
      {
        items: [
          {
            name: "Align Layers to Selection",
            itemSets: [],
          },
          {
            name: "Distribute",
            itemSets: [],
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
            itemSets: [],
          },
        ],
      },
    ],
  },
];
