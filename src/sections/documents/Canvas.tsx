import React, { useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import * as PIXI from "pixi.js";
import { useDispatch, useSelector } from "react-redux";
import { selectEvents, Event } from "../../state/fileSlice";
import { Position, setCanvasPosition } from "../../state/cursorSlice";

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
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  const canvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvas.current) canvas.current.appendChild(app.view);
    app.start();

    return () => app.destroy(true);
  }, []);

  useLayoutEffect(() => {
    dispatch(
      setCanvasPosition({
        x: canvas.current?.getBoundingClientRect().x || 0,
        y: canvas.current?.getBoundingClientRect().y || 0,
      })
    ); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  app.stage.removeChildren();
  const layer = new PIXI.Container();
  app.stage.addChild(layer);

  // Drawing Circle
  var graphics = new PIXI.Graphics();
  events.forEach((event: Event) => {
    if (event.type === "circle")
      Circle(graphics, event.x!, event.y!, event.size!, event.color);
  });
  layer.addChild(graphics);

  // Drawing Line
  events.forEach((event: Event) => {
    if (event.type === "line" && event.points && event.points.length >= 2) {
      var line = new PIXI.Graphics();
      line.lineTextureStyle({
        width: (event.size || 40) * 2,
        color: event.color,
        alignment: 0.5,
        alpha: 1,
        join: PIXI.LINE_JOIN.ROUND,
        cap: PIXI.LINE_CAP.ROUND,
        miterLimit: 198,
      });
      line.moveTo(event.points[0].x, event.points[0].y);
      event.points.forEach((point: Position) => line.lineTo(point.x, point.y));
      layer.addChild(line);
    }
  });

  return <StyledCanvas ref={canvas} />;
};

export default Canvas;
