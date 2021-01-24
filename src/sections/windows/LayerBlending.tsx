import React from "react";
import styled from "styled-components";
import Dropdown from "../../shared/Dropdown";
import PercentSelector from "../../shared/PercentSelector";

const Blending = styled.div`
  width: 100%;
  height: 2.8rem;
  display: flex;
  border-bottom: solid 1px var(--section-line);
  background-color: var(--panel);
  align-items: center;
  padding: 0 0.3rem;

  div:first-child {
    margin-right: 0.4rem;
  }
`;

const LayerBlending = () => {
  return (
    <Blending>
      <Dropdown selected={"Normal"} options={["Meow meow meow meow"]} />
      <PercentSelector label={"Opacity"} value={100} />
    </Blending>
  );
};

export default LayerBlending;
