import React from "react";
import styled from "styled-components";
import { LayerType } from "../../state/layersSlice";
import eye from "../../assets/svgs/layers/eye.svg";
import lock from "../../assets/svgs/layers/lock.svg";
import { FeatureRequest } from "../../services/AnalyticsService";

const StyledLayer = styled.div`
  width: 100%;
  height: 3.8rem;
  display: flex;
  border-bottom: solid 1px var(--hover-bg);
  background-color: var(--panel);
  align-items: center;
`;

const Visibility = styled.button`
  height: 100%;
  width: 3.3rem;
  border-right: solid 1px var(--hover-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Eye = styled.img`
  height: 0.9rem;
`;

const Canvas = styled.div`
  height: 100%;
  width: 3.8rem;
  background-color: white;
  border: solid 1px var(--layer-border);
`;

const Content = styled.button`
  flex: 1;
  height: 100%;
  padding: 0.4rem;
  display: flex;
  align-items: center;
`;

const LayerName = styled.div`
  color: var(--layer-text);
  margin-left: 0.7rem;
`;

const Lock = styled.img`
  height: 1.2rem;
  margin-right: 1.5rem;
  transform: translateY(-0.1rem);
`;

type Props = {
  layer: LayerType;
};

const Layer = (props: Props) => {
  return (
    <StyledLayer>
      <Visibility
        onClick={() => FeatureRequest("Windows/Layers/Layer/Visibility")}
      >
        <Eye src={eye} />
      </Visibility>
      <Content onClick={() => FeatureRequest("Windows/Layers/Layer/Select")}>
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
        />
      )}
    </StyledLayer>
  );
};

export default Layer;
