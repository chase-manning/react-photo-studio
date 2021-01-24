import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LayerType, selectLayers } from "../../state/layersSlice";
import LayersFooter from "./LayersFooter";
import LayerFilters from "./LayerFilters";
import LayerBlending from "./LayerBlending";
import LayerLock from "./LayerLock";
import Layer from "./Layer";

const StyledLayersWindow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 0.5rem;
`;

const LayersContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Layers = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--layer-bg);
`;

const ScrollBar = styled.div`
  height: 100%;
  width: 3rem;
  background-color: var(--sidebar);
`;

const LayersWindow = () => {
  const layers = useSelector(selectLayers);

  return (
    <StyledLayersWindow>
      <LayerFilters />
      <LayerBlending />
      <LayerLock />
      <LayersContainer>
        <Layers>
          {layers.map((layer: LayerType) => (
            <Layer layer={layer} />
          ))}
        </Layers>
        <ScrollBar />
      </LayersContainer>
      <LayersFooter />
    </StyledLayersWindow>
  );
};

export default LayersWindow;
