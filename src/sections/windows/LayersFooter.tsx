import React from "react";
import styled from "styled-components";
import Button from "../../styles/Button";
import ContextIndicator from "../../styles/ContextIndicator";

import contrast from "../../assets/pngs/contrast.png";
import link from "../../assets/pngs/link.png";
import style from "../../assets/pngs/style.png";
import mask from "../../assets/pngs/mask.png";
import folder from "../../assets/svgs/layers/folder.svg";
import newLayer from "../../assets/pngs/new.png";
import trash from "../../assets/svgs/layers/trash.svg";
import { FeatureRequest } from "../../services/AnalyticsService";
import { useSelector } from "react-redux";
import {
  selectActiveLayer,
  selectLayers,
  selectSelectedLayers,
} from "../../state/layersSlice";

const Footer = styled.div`
  width: 100%;
  background-color: var(--panel);
  height: 2.4rem;
  border-top: solid 1px var(--section-line);
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  height: 100%;
  display: flex;
  width: 18rem;
  margin-right: 2rem;
`;

const Asset = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const LayersFooter = () => {
  const activeLayer = useSelector(selectActiveLayer);
  const selectedLayers = useSelector(selectSelectedLayers);
  const linkEnabled = selectedLayers.length >= 2;

  return (
    <Footer>
      <div />
      <Buttons>
        <Button
          onClick={() => FeatureRequest("Windows/Layers/Footer/Link")}
          square
          disabled={!linkEnabled}
        >
          <Asset src={link} />
        </Button>
        <Button
          onClick={() => FeatureRequest("Windows/Layers/Footer/Style")}
          square
          disabled={!activeLayer || !activeLayer.locked}
        >
          <Asset src={style} />
          <ContextIndicator />
        </Button>
        <Button
          onClick={() => FeatureRequest("Windows/Layers/Footer/Mask")}
          square
        >
          <Asset src={mask} />
        </Button>
        <Button
          onClick={() => FeatureRequest("Windows/Layers/Footer/Adjustment")}
          square
        >
          <Asset src={contrast} />
          <ContextIndicator />
        </Button>
        <Button
          onClick={() => FeatureRequest("Windows/Layers/Footer/Group")}
          square
        >
          <Asset src={folder} />
        </Button>
        <Button
          onClick={() => FeatureRequest("Windows/Layers/Footer/New")}
          square
        >
          <Asset src={newLayer} />
        </Button>
        <Button
          onClick={() => FeatureRequest("Windows/Layers/Footer/Delete")}
          square
        >
          <Asset src={trash} />
        </Button>
      </Buttons>
    </Footer>
  );
};

export default LayersFooter;
