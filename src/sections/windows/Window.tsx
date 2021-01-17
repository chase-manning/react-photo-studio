import React from "react";
import styled from "styled-components";

const Unimplemented = styled.div`
  width: 100%;
  height: 1px;
`;

type Props = {
  window: string;
};

const Window = (props: Props) => {
  switch (props.window) {
    case "Color":
      return <Unimplemented />;
    case "Swatches":
      return <Unimplemented />;
    case "Gradients":
      return <Unimplemented />;
    case "Patterns":
      return <Unimplemented />;
    case "Properties":
      return <Unimplemented />;
    case "Adjustments":
      return <Unimplemented />;
    case "Layers":
      return <Unimplemented />;
    case "Channels":
      return <Unimplemented />;
    case "Paths":
      return <Unimplemented />;
    default:
      throw new Error("Window Not Found");
  }
};

export default Window;
