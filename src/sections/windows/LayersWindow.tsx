import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LayerType, selectLayers } from "../../state/layersSlice";

const StyledLayersWindow = styled.div`
  width: 100%;
  height: 100%;
`;

const Layer = styled.div`
  width: 100%;
  display: flex;
`;

const LayersWindow = () => {
  const layers = useSelector(selectLayers);

  return (
    <StyledLayersWindow>
      {layers.map((layer: LayerType) => (
        <Layer>{layer.name}</Layer>
      ))}
    </StyledLayersWindow>
  );
};

export default LayersWindow;
