import React from "react";

type Props = {
  window: string;
};

const Window = (props: Props) => {
  switch (props.window) {
    case "Color":
      return <p>meow</p>;
    case "Swatches":
      return <p>meow</p>;
    case "Gradients":
      return <p>meow</p>;
    case "Patterns":
      return <p>meow</p>;
    case "Properties":
      return <p>meow</p>;
    case "Adjustments":
      return <p>meow</p>;
    case "Layers":
      return <p>meow</p>;
    case "Channels":
      return <p>meow</p>;
    case "Paths":
      return <p>meow</p>;
    default:
      throw new Error("Window Not Found");
  }
};

export default Window;
