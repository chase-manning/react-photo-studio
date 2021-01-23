import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LayerType, selectLayers } from "../../state/layersSlice";
import eye from "../../assets/svgs/layers/eye.svg";
import lock from "../../assets/svgs/layers/lock.svg";
import Dropdown from "../../shared/Dropdown";
import PercentSelector from "../../shared/PercentSelector";
import Button from "../../styles/Button";
import Label from "../../styles/Label";
import ContextIndicator from "../../styles/ContextIndicator";

import picture from "../../assets/pngs/picture.png";
import contrast from "../../assets/pngs/contrast.png";
import type from "../../assets/svgs/tools/type.svg";
import shape from "../../assets/pngs/shape.png";
import smartObject from "../../assets/pngs/smart-object.png";
import layerFiltersOn from "../../assets/pngs/layer-filters-on.png";
import layerFiltersOff from "../../assets/pngs/layer-filters-off.png";
import transparent from "../../assets/pngs/transparent.png";
import brush from "../../assets/svgs/tools/brush.svg";
import move from "../../assets/svgs/tools/move.svg";
import artboardNesting from "../../assets/pngs/artboard-nesting.png";
import link from "../../assets/pngs/link.png";
import style from "../../assets/pngs/style.png";
import mask from "../../assets/pngs/mask.png";
import folder from "../../assets/svgs/layers/folder.svg";

const StyledLayersWindow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 0.5rem;
`;

const Setting = styled.div`
  width: 100%;
  height: 2.8rem;
  display: flex;
  border-bottom: solid 1px var(--section-line);
  background-color: var(--panel);
  align-items: center;
  padding: 0 0.3rem;
`;

const Buttons = styled.div`
  height: 95%;
  display: flex;
  margin-left: 0.7rem;
  width: 12.6rem;
`;

const ButtonAsset = styled.img`
  height: 80%;
`;

const FiltersToggle = styled.img`
  height: 80%;
  margin-left: 0.5rem;
`;

const Spacing = styled.div`
  height: 100%;
  width: 0.4rem;
`;

const LockButtons = styled.div`
  height: 95%;
  display: flex;
  margin-right: 0.9rem;
`;

const SpacingSmall = styled.div`
  height: 100%;
  width: 0.2rem;
`;

const Layers = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--layer-bg);
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
  height: 2.4rem;
  border-top: solid 1px var(--section-line);
  display: flex;
  justify-content: space-between;
`;

const FooterButtons = styled.div`
  height: 100%;
  display: flex;
  margin-right: 3rem;
`;

const LayersWindow = () => {
  const layers = useSelector(selectLayers);
  const [filtersEnabled] = useState(true);

  return (
    <StyledLayersWindow>
      <Setting>
        <Dropdown selected={"Kind"} options={["meow meow "]} />
        <Buttons>
          <Button selected={false}>
            <ButtonAsset src={picture} />
          </Button>
          <Button selected={false}>
            <ButtonAsset src={contrast} />
          </Button>
          <Button selected={false}>
            <ButtonAsset src={type} />
          </Button>
          <Button selected={false}>
            <ButtonAsset src={shape} />
          </Button>
          <Button selected={false}>
            <ButtonAsset src={smartObject} />
          </Button>
        </Buttons>
        <FiltersToggle
          src={filtersEnabled ? layerFiltersOn : layerFiltersOff}
        />
      </Setting>
      <Setting>
        <Dropdown selected={"Normal"} options={["Meow meow meow meow"]} />
        <Spacing />
        <PercentSelector label={"Opacity"} value={100} />
      </Setting>
      <Setting>
        <SpacingSmall />
        <Label>Lock:</Label>
        <LockButtons>
          <Button selected={false}>
            <ButtonAsset src={transparent} />
          </Button>
          <Button selected={false}>
            <ButtonAsset src={brush} />
          </Button>
          <Button selected={false}>
            <ButtonAsset src={move} />
          </Button>
          <Button selected={false}>
            <ButtonAsset src={artboardNesting} />
          </Button>
          <Button selected={false}>
            <ButtonAsset src={lock} />
          </Button>
        </LockButtons>
        <PercentSelector label={"Fill"} value={100}></PercentSelector>
      </Setting>
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
      <Footer>
        <div />
        <FooterButtons>
          <Button square>
            <ButtonAsset src={link} />
          </Button>
          <Button square>
            <ButtonAsset src={style} />
            <ContextIndicator />
          </Button>
          <Button square>
            <ButtonAsset src={mask} />
          </Button>
          <Button square>
            <ButtonAsset src={contrast} />
            <ContextIndicator />
          </Button>
          <Button square>
            <ButtonAsset src={folder} />
          </Button>
          <Button square>h</Button>
          <Button square>h</Button>
        </FooterButtons>
      </Footer>
    </StyledLayersWindow>
  );
};

export default LayersWindow;
