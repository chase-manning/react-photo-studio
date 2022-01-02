import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectPrimaryColor,
  selectSecondaryColor,
  setDefaultColors,
  swapColors,
} from "../state/toolsSlice";
import defaultColors from "../assets/svgs/tools/default-colors.svg";
import swapColorsSvg from "../assets/svgs/tools/swap-colors.svg";
import { requestFeature } from "../state/featureSlice";

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
  width: 38%;
  padding: 0.2rem 0;
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

type SelectionProps = {
  primary: boolean;
};

const Selection = styled.div`
  position: absolute;
  width: 2.3rem;
  height: 2.3rem;
  background-color: var(--color-selection-border);
  left: ${(props: SelectionProps) => (props.primary ? "-2px" : "auto")};
  top: ${(props: SelectionProps) => (props.primary ? "-2px" : "auto")};
  right: ${(props: SelectionProps) => (props.primary ? "auto" : "-2px")};
  bottom: ${(props: SelectionProps) => (props.primary ? "auto" : "-2px")};
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

type Props = {
  parent: string;
  showButtons: boolean;
};

const Colors = (props: Props) => {
  const dispatch = useDispatch();
  const primaryColor = useSelector(selectPrimaryColor);
  const secondaryColor = useSelector(selectSecondaryColor);

  return (
    <StyledColors>
      {props.showButtons && (
        <Buttons>
          <Button onClick={() => dispatch(setDefaultColors())}>
            <RotatedButtonIcon src={defaultColors} alt="default colors" />
          </Button>
          <Button onClick={() => dispatch(swapColors())}>
            <ButtonIcon src={swapColorsSvg} alt="swap colors" />
          </Button>
        </Buttons>
      )}

      <Squares>
        {!props.showButtons && <Selection primary />}
        <SecondarySquare
          onClick={() =>
            dispatch(requestFeature(`${props.parent}/Set Secondary Color`))
          }
          color={secondaryColor}
        />
        <PrimarySqaure
          onClick={() =>
            dispatch(requestFeature(`${props.parent}/Set Primary Color`))
          }
          color={primaryColor}
        />
      </Squares>
    </StyledColors>
  );
};

export default Colors;
