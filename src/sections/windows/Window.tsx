import ColorWindow from "./ColorWindow";
import LayersWindow from "./LayersWindow";

interface Props {
  window: string;
}

const Window = (props: Props) => {
  switch (props.window) {
    case "Color":
      return <ColorWindow />;
    case "Swatches":
      return null;
    case "Gradients":
      return null;
    case "Patterns":
      return null;
    case "Properties":
      return null;
    case "Adjustments":
      return null;
    case "Layers":
      return <LayersWindow />;
    case "Channels":
      return null;
    case "Paths":
      return null;
    default:
      throw new Error("Window Not Found");
  }
};

export default Window;
