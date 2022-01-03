import { useSelector } from "react-redux";
import styled from "styled-components";

import Dropdown from "../../shared/Dropdown";
import PercentSelector from "../../shared/PercentSelector";
import { selectActiveLayer } from "../../state/layersSlice";
import Disable from "../../styles/Disabled";

const Blending = styled.div`
  position: relative;
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
  const activeLayer = useSelector(selectActiveLayer);
  const enabled = activeLayer && activeLayer.visible && !activeLayer.locked;

  return (
    <Blending>
      <Dropdown selected="Normal" options={["Meow meow meow meow"]} />
      <PercentSelector label="Opacity" value={100} />
      {!enabled && <Disable />}
    </Blending>
  );
};

export default LayerBlending;
