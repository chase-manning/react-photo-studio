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

const Layers = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--layer-bg);
`;

const LayersWindow = () => {
  const layers = useSelector(selectLayers);

  return (
    <StyledLayersWindow>
      <LayerFilters />
      <LayerBlending />
      <LayerLock />
      <Layers>
        {layers.map((layer: LayerType) => (
          <Layer layer={layer} />
        ))}
      </Layers>
      <LayersFooter />
    </StyledLayersWindow>
  );
};

export default LayersWindow;
