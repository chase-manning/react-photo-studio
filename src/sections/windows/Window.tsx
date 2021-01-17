import React from "react";

type Props = {
  window: string;
};

const Window = (props: Props) => {
  switch (props.window) {
    case "Color":
      return <p>meow</p>;
    default:
      throw new Error("Window Not Found");
  }
};

export default Window;
