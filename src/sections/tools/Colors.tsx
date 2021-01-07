import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FeatureRequest } from "../../services/AnalyticsService";
import {
  selectPrimaryColor,
  selectSecondaryColor,
  setDefaultColors,
  swapColors,
} from "../../state/toolsSlice";
import defaultColors from "../../assets/svgs/tools/default-colors.svg";
import swapColorsSvg from "../../assets/svgs/tools/swap-colors.svg";

const StyledColors = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
`;

const Button = styled.button`
  width: 50%;
  padding: 0.2rem;
  color: var(--icon);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonIcon = styled.img`
  width: 100%;
`;

const RotatedButtonIcon = styled(ButtonIcon)`
  transform: rotate(180deg);
`;

const Squares = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
`;

type SquareProps = {
  color: string;
};

const Square = styled.button`
  position: absolute;
  width: 1.9rem;
  height: 1.9rem;
  border: solid 0.1rem white;
  box-shadow: 0 0 0 0.1rem var(--color-border);
  background-color: ${(props: SquareProps) => props.color};
`;

const PrimarySqaure = styled(Square)`
  margin-bottom: 1.1rem;
  left: 0;
  top: 0;
`;

const SecondarySquare = styled(Square)`
  margin-top: 1.1rem;
  right: 0;
  bottom: 0;
`;

const Colors = () => {
  const dispatch = useDispatch();
  const primaryColor = useSelector(selectPrimaryColor);
  const secondaryColor = useSelector(selectSecondaryColor);

  return (
    <StyledColors>
      <Buttons>
        <Button onClick={() => dispatch(setDefaultColors)}>
          <RotatedButtonIcon src={defaultColors} />
        </Button>
        <Button onClick={() => dispatch(swapColors)}>
          <ButtonIcon src={swapColorsSvg} />
        </Button>
      </Buttons>

      <Squares>
        <SecondarySquare
          onClick={() => FeatureRequest("Tools/Set Primary Color")}
          color={secondaryColor}
        />
        <PrimarySqaure
          onClick={() => FeatureRequest("Tools/Set Secondary Color")}
          color={primaryColor}
        />
      </Squares>
    </StyledColors>
  );
};

export default Colors;
