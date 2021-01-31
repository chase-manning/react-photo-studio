import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as PIXI from "pixi.js";
import { useSelector } from "react-redux";
import { selectEvents, Event, EventType } from "../../state/fileSlice";

const StyledCanvas = styled.div`
  width: 900px;
  height: 600px;
`;

const app = new PIXI.Application({
  width: 900,
  height: 600,
  backgroundColor: 0xffffff,
  antialias: true,
  resolution: 1,
});

const Circle = (
  graphics: PIXI.Graphics,
  x: number,
  y: number,
  size: number,
  color?: number
) => {
  graphics.beginFill(color);
  graphics.drawCircle(x, y, size);
  graphics.endFill();
};

const Canvas = () => {
  const canvas = useRef<HTMLDivElement>(null);
  const events = useSelector(selectEvents);

  useEffect(() => {
    if (canvas.current) canvas.current.appendChild(app.view);
    app.start();

    return () => app.destroy(true);
  }, []);

  app.stage.removeChildren();
  const layer = new PIXI.Container();
  app.stage.addChild(layer);
  var graphics = new PIXI.Graphics();
  events.forEach((event: Event) => {
    if (event.type === EventType.CIRCLE)
      Circle(graphics, event.x!, event.y!, event.size!, event.color);
  });
  layer.addChild(graphics);

  return <StyledCanvas ref={canvas} />;
};

export default Canvas;
