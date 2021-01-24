import React, { useState } from "react";
import styled from "styled-components";
import { LayerType } from "../../state/layersSlice";
import eye from "../../assets/svgs/layers/eye.svg";
import lock from "../../assets/svgs/layers/lock.svg";
import { FeatureRequest } from "../../services/AnalyticsService";
import { useSelector } from "react-redux";

const StyledLayer = styled.div`
  width: 100%;
  height: 3.8rem;
  display: flex;
  border-bottom: solid 1px var(--hover-bg);
  background-color: var(--panel);
  align-items: center;
`;

type CursorProps = {
  grabbing: boolean;
};

const Visibility = styled.button`
  height: 100%;
  width: 3.3rem;
  border-right: solid 1px var(--hover-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props: CursorProps) => (props.grabbing ? "grabbing" : "pointer")};
`;

const Eye = styled.img`
  height: 0.9rem;
`;

const Content = styled.button`
  flex: 1;
  height: 100%;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  cursor: ${(props: CursorProps) => (props.grabbing ? "grabbing" : "pointer")};
`;

const Canvas = styled.div`
  height: 100%;
  width: 3.8rem;
  background-color: white;
  border: solid 1px var(--layer-border);
`;

const LayerName = styled.div`
  color: var(--layer-text);
  margin-left: 0.7rem;
`;

const Lock = styled.img`
  height: 1.2rem;
  margin-right: 1.5rem;
  transform: translateY(-0.1rem);
  cursor: ${(props: CursorProps) => (props.grabbing ? "grabbing" : "pointer")};
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
      >
        <Canvas />
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
        />
      )}
    </StyledLayer>
  );
};

export default Layer;
