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

const Circle = (layer: PIXI.Container, x: number, y: number, size: number) => {
  var graphics = new PIXI.Graphics();
  graphics.beginFill(0xe74c3c);
  graphics.drawCircle(x, y, size);
  graphics.endFill();
  layer.addChild(graphics);
};

const Canvas = () => {
  const canvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvas.current) canvas.current.appendChild(app.view);
    app.start();
    const layer = new PIXI.Container();
    app.stage.addChild(layer);

    Circle(layer, 100, 100, 80);

    return () => app.destroy(true);
  }, []);

  return <StyledCanvas ref={canvas} />;
};

export default Canvas;
