import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LayerType, selectLayers } from "../../state/layersSlice";
import eye from "../../assets/svgs/layers/eye.svg";

const StyledLayersWindow = styled.div`
  width: 100%;
  height: 100%;
`;

const Layer = styled.div`
  width: 100%;
  display: flex;
`;

const Eye = styled.img`
  height: 1rem;
`;

const LayersWindow = () => {
  const layers = useSelector(selectLayers);

  return (
    <StyledLayersWindow>
      {layers.map((layer: LayerType) => (
        <Layer>
          <Eye src={eye} />
          {layer.name}
        </Layer>
      ))}
    </StyledLayersWindow>
  );
};

export default LayersWindow;
