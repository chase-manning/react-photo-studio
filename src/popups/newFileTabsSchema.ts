import { NewFileTabType } from "./NewFileTab";

const newFileTabsSchema: NewFileTabType[] = [
  {
    label: "Recent",
    active: true,
  },
  {
    label: "Saved",
    active: false,
  },
  {
    label: "Photo",
    active: false,
  },
  {
    label: "Print",
    active: false,
  },
  {
    label: "Art & Illustration",
    active: false,
  },
  {
    label: "Web",
    active: false,
  },
  {
    label: "Mobile",
    active: false,
  },
  {
    label: "Film & Video",
    active: false,
  },
];

export default newFileTabsSchema;
