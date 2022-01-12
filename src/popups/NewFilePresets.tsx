import styled from "styled-components";
import RecommendationBanner from "./RecommendationBanner";

const Presets = styled.div`
  width: 80rem;
  background-color: var(--popup-inner-bg);
  padding: 1.2rem 1.3rem;
`;

const NewFilePresets = () => {
  return (
    <Presets>
      <RecommendationBanner />
    </Presets>
  );
};

export default NewFilePresets;
