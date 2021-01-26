import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Application } from "pixi.js";

const StyledCanvas = styled.div``;

const app = new Application({
  width: 800,
  height: 600,
  backgroundColor: 0x5bba6f,
});

const Canvas = () => {
  const canvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvas.current) canvas.current.appendChild(app.view);
    app.start();
    return () => app.destroy(true);
  }, []);

  return <StyledCanvas ref={canvas} />;
};

export default Canvas;
