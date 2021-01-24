import React, { useState } from "react";
import { FeatureRequest } from "../../services/AnalyticsService";
import styled from "styled-components";
import Dropdown from "../../shared/Dropdown";
import Button from "../../styles/Button";

import picture from "../../assets/pngs/picture.png";
import contrast from "../../assets/pngs/contrast.png";
import type from "../../assets/svgs/tools/type.svg";
import shape from "../../assets/pngs/shape.png";
import smartObject from "../../assets/pngs/smart-object.png";
import layerFiltersOn from "../../assets/pngs/layer-filters-on.png";
import layerFiltersOff from "../../assets/pngs/layer-filters-off.png";
import search from "../../assets/svgs/navigation/search.svg";

const Filters = styled.div`
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

const Toggle = styled.img`
  height: 80%;
  margin-left: 0.5rem;
`;

const LayerFilters = () => {
  const [filtersEnabled] = useState(true);

  return (
    <Filters>
      <Dropdown selected={"Kind"} options={["meow meo"]} icon={search} />
      <Buttons>
        <Button
          onClick={() => FeatureRequest("Windows/Layer/Filters/Pixels")}
          selected={false}
        >
          <ButtonAsset src={picture} />
        </Button>
        <Button
          onClick={() => FeatureRequest("Windows/Layer/Filters/Adjustments")}
          selected={false}
        >
          <ButtonAsset src={contrast} />
        </Button>
        <Button
          onClick={() => FeatureRequest("Windows/Layer/Filters/Type")}
          selected={false}
        >
          <ButtonAsset src={type} />
        </Button>
        <Button
          onClick={() => FeatureRequest("Windows/Layer/Filters/Shape")}
          selected={false}
        >
          <ButtonAsset src={shape} />
        </Button>
        <Button
          onClick={() => FeatureRequest("Windows/Layer/Filters/SmartObjects")}
          selected={false}
        >
          <ButtonAsset src={smartObject} />
        </Button>
      </Buttons>
      <Toggle
        onClick={() => FeatureRequest("Windows/Layer/Filters/EnabledToggle")}
        src={filtersEnabled ? layerFiltersOn : layerFiltersOff}
      />
    </Filters>
  );
};

export default LayerFilters;
