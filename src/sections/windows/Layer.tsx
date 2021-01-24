import React, { useState } from "react";
import styled from "styled-components";
import { LayerType } from "../../state/layersSlice";
import eye from "../../assets/svgs/layers/eye.svg";
import lock from "../../assets/svgs/layers/lock.svg";
import { FeatureRequest } from "../../services/AnalyticsService";
import LayerCanvas from "./LayerCanvas";

const StyledLayer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: solid 1px var(--hover-bg);
  background-color: var(--panel);
  align-items: center;
`;

type VisibilityProps = {
  grabbing: boolean;
};

const Visibility = styled.button`
  height: 100%;
  width: 3.3rem;
  border-right: solid 1px var(--hover-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props: VisibilityProps) =>
    props.grabbing ? "grabbing" : "pointer"};
`;

const Eye = styled.img`
  height: 0.9rem;
`;

type ContentProps = {
  grabbing: boolean;
  selected: boolean;
};

const Content = styled.button`
  flex: 1;
  height: 100%;
  padding: 0.1rem;
  display: flex;
  align-items: center;
  cursor: ${(props: ContentProps) => (props.grabbing ? "grabbing" : "pointer")};
  background-color: ${(props: ContentProps) =>
    props.selected ? "var(--context-hover)" : "none"};
`;

const LayerName = styled.div`
  color: var(--layer-text);
  margin-left: 0.7rem;
`;

type LockProps = {
  grabbing: boolean;
  selected: boolean;
};

const Lock = styled.img`
  height: 1.2rem;
  margin-right: 1.5rem;
  transform: translateY(-0.1rem);
  cursor: ${(props: LockProps) => (props.grabbing ? "grabbing" : "pointer")};
  background-color: ${(props: ContentProps) =>
    props.selected ? "var(--context-hover)" : "none"};
`;

type Props = {
  layer: LayerType;
};

const Layer = (props: Props) => {
  const [grabbing, setGrabbing] = useState(false);
  const [moving, setMoving] = useState(false);

  return (
    <StyledLayer
      onMouseDown={() => setGrabbing(true)}
      onMouseUp={() => {
        setGrabbing(false);
        setMoving(false);
      }}
      onMouseMove={() => {
        if (grabbing) {
          setMoving(true);
          FeatureRequest("Windows/Layers/Layer/Move");
        }
      }}
    >
      <Visibility
        onClick={() => FeatureRequest("Windows/Layers/Layer/Visibility")}
        grabbing={grabbing && moving}
      >
        <Eye src={eye} />
      </Visibility>
      <Content
        onClick={() => FeatureRequest("Windows/Layers/Layer/Select")}
        grabbing={grabbing && moving}
        selected={props.layer.selected}
      >
        <LayerCanvas layer={props.layer} />
        <LayerName
          onDoubleClick={() =>
            FeatureRequest("Windows/Layers/Layer/ChangeName")
          }
        >
          {props.layer.name}
        </LayerName>
      </Content>
      {props.layer.locked && (
        <Lock
          onClick={() => FeatureRequest("Windows/Layers/Layer/Lock")}
          src={lock}
          grabbing={grabbing && moving}
          selected={props.layer.selected}
        />
      )}
    </StyledLayer>
  );
};

export default Layer;
