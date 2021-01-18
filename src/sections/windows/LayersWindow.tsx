import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LayerType, selectLayers } from "../../state/layersSlice";
import eye from "../../assets/svgs/layers/eye.svg";
import lock from "../../assets/svgs/layers/lock.svg";

const StyledLayersWindow = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--layer-bg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Layers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Layer = styled.div`
  width: 100%;
  height: 3.8rem;
  display: flex;
  border-bottom: solid 1px var(--hover-bg);
  background-color: var(--panel);
  align-items: center;
`;

const Visibility = styled.div`
  height: 100%;
  width: 3.5rem;
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

const Content = styled.div`
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

const Footer = styled.div`
  width: 100%;
  background-color: var(--panel);
  height: 2rem;
  border-top: solid 1px var(--section-line);
`;

const LayersWindow = () => {
  const layers = useSelector(selectLayers);

  return (
    <StyledLayersWindow>
      <Layers>
        {layers.map((layer: LayerType) => (
          <Layer>
            <Visibility>
              <Eye src={eye} />
            </Visibility>
            <Content>
              <Canvas />
              <LayerName>{layer.name}</LayerName>
            </Content>
            {layer.locked && <Lock src={lock} />}
          </Layer>
        ))}
      </Layers>
      <Footer></Footer>
    </StyledLayersWindow>
  );
};

export default LayersWindow;
