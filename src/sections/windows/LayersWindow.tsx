import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LayerType, selectLayers } from "../../state/layersSlice";
import eye from "../../assets/svgs/layers/eye.svg";

const StyledLayersWindow = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--layer-bg);
`;

const Layer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  border-bottom: solid 1px var(--hover-bg);
  background-color: var(--panel);
`;

const Visibility = styled.div`
  height: 100%;
  width: 4rem;
  border-right: solid 1px var(--hover-bg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Eye = styled.img`
  height: 1rem;
`;

const Canvas = styled.div`
  width: 3rem;
  height: 2.5rem;
  background-color: white;
  border: solid 1px var(--layer-border);
`;

const Content = styled.div`
  flex: 1;
  height: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
`;

const LayerName = styled.div`
  color: var(--layer-text);
  margin-left: 0.7rem;
`;

const LayersWindow = () => {
  const layers = useSelector(selectLayers);

  return (
    <StyledLayersWindow>
      {layers.map((layer: LayerType) => (
        <Layer>
          <Visibility>
            <Eye src={eye} />
          </Visibility>
          <Content>
            <Canvas />
            <LayerName>{layer.name}</LayerName>
          </Content>
        </Layer>
      ))}
    </StyledLayersWindow>
  );
};

export default LayersWindow;
