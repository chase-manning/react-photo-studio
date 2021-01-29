import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as PIXI from "pixi.js";

const StyledCanvas = styled.div`
  width: 900px;
  height: 800px;
`;

const app = new PIXI.Application({
  width: 900,
  height: 600,
  backgroundColor: 0xffffff,
  antialias: true,
  resolution: 1,
});

const Canvas = () => {
  const canvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvas.current) canvas.current.appendChild(app.view);
    app.start();

    const container = new PIXI.Container();
    app.stage.addChild(container);
    var graphics = new PIXI.Graphics();
    graphics.beginFill(0xe74c3c);
    graphics.drawCircle(60, 185, 40);
    graphics.endFill();
    container.addChild(graphics);

    return () => app.destroy(true);
  }, []);

  return <StyledCanvas ref={canvas} />;
};

export default Canvas;
