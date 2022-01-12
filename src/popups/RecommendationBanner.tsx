import { useDispatch } from "react-redux";
import styled from "styled-components";

import close from "../assets/svgs/navigation/cross.svg";
import { requestFeature } from "../state/featureSlice";

const StyledRecommendationBanner = styled.div`
  position: relative;
  width: 100%;
  background: var(--popup-bg);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.4rem 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.1rem;
  right: 0.9rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  :hover {
    filter: brightness(2);
  }
`;

const Close = styled.img`
  width: 1.4rem;
`;

const Header = styled.div`
  font-size: 2.8rem;
  font-weight: 400;
  color: var(--white);
`;

const SubHeader = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--white);
  max-width: 57rem;
  text-align: center;
  margin-top: 0.2rem;
  line-height: 2.5rem;
`;

const Button = styled.button`
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--white);
  max-width: 57rem;
  text-align: center;
  margin-top: 1.4rem;
  line-height: 2.5rem;
  color: var(--link);
  cursor: pointer;

  :hover {
    color: var(--link-hover);
  }
`;

const RecommendationBanner = () => {
  const dispatch = useDispatch();

  return (
    <StyledRecommendationBanner>
      <CloseButton
        onClick={() =>
          dispatch(requestFeature("Menu/File/New/Recent/Recommendation/Close"))
        }
      >
        <Close src={close} alt="close icon" />
      </CloseButton>
      <Header>Let's start something new.</Header>
      <SubHeader>
        Start with your own document settings or from a range of{" "}
        <Button
          onClick={() =>
            dispatch(
              requestFeature(
                "Menu/File/New/Recent/Recommendation/Document Presets"
              )
            )
          }
        >
          document presets
        </Button>{" "}
        to get working quickly.
      </SubHeader>
    </StyledRecommendationBanner>
  );
};

export default RecommendationBanner;
