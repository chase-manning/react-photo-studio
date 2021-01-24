import React from "react";
import styled from "styled-components";
import lock from "../../assets/svgs/layers/lock.svg";
import PercentSelector from "../../shared/PercentSelector";
import Button from "../../styles/Button";
import Label from "../../styles/Label";

import transparent from "../../assets/pngs/transparent.png";
import brush from "../../assets/svgs/tools/brush.svg";
import move from "../../assets/svgs/tools/move.svg";
import artboardNesting from "../../assets/pngs/artboard-nesting.png";

const Lock = styled.div`
  width: 100%;
  height: 2.8rem;
  display: flex;
  border-bottom: solid 1px var(--section-line);
  background-color: var(--panel);
  align-items: center;
  padding: 0 0.3rem;
`;

const ButtonAsset = styled.img`
  height: 80%;
`;

const Buttons = styled.div`
  height: 95%;
  display: flex;
  margin-right: 0.9rem;
`;

const SpacingSmall = styled.div`
  height: 100%;
  width: 0.2rem;
`;

const LayerLock = () => {
  return (
    <Lock>
      <SpacingSmall />
      <Label>Lock:</Label>
      <Buttons>
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
      </Buttons>
      <PercentSelector label={"Fill"} value={100}></PercentSelector>
    </Lock>
  );
};

export default LayerLock;
