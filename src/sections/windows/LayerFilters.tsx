import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

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
import { requestFeature } from "../../state/featureSlice";

const Filters = styled.div`
  position: relative;
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
  const dispatch = useDispatch();
  const [filtersEnabled] = useState(true);

  return (
    <Filters>
      <Dropdown selected="Kind" options={["meow meo"]} icon={search} />
      <Buttons>
        <Button
          onClick={() =>
            dispatch(requestFeature("Windows/Layer/Filters/Pixels"))
          }
          selected={false}
        >
          <ButtonAsset src={picture} alt="picture" />
        </Button>
        <Button
          onClick={() =>
            dispatch(requestFeature("Windows/Layer/Filters/Adjustments"))
          }
          selected={false}
        >
          <ButtonAsset src={contrast} alt="contrast" />
        </Button>
        <Button
          onClick={() => dispatch(requestFeature("Windows/Layer/Filters/Type"))}
          selected={false}
        >
          <ButtonAsset src={type} alt="type" />
        </Button>
        <Button
          onClick={() =>
            dispatch(requestFeature("Windows/Layer/Filters/Shape"))
          }
          selected={false}
        >
          <ButtonAsset src={shape} alt="shape" />
        </Button>
        <Button
          onClick={() =>
            dispatch(requestFeature("Windows/Layer/Filters/SmartObjects"))
          }
          selected={false}
        >
          <ButtonAsset src={smartObject} alt="smart object" />
        </Button>
      </Buttons>
      <Toggle
        onClick={() =>
          dispatch(requestFeature("Windows/Layer/Filters/EnabledToggle"))
        }
        src={filtersEnabled ? layerFiltersOn : layerFiltersOff}
        alt="toggle"
      />
    </Filters>
  );
};

export default LayerFilters;
