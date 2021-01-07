import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectPrimaryColor,
  selectSecondaryColor,
} from "../../state/toolsSlice";

const StyledColors = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0.3rem;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
`;

const Button = styled.div`
  width: 50%;
  padding: 0.2rem;
  color: var(--icon);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Squares = styled.div`
  position: relative;
  width: 3.2rem;
  height: 3.1rem;
`;

type SquareProps = {
  color: string;
};

const Square = styled.div`
  position: absolute;
  width: 2.1rem;
  height: 2.1rem;
  border: solid 0.1rem white;
  box-shadow: 0 0 0 0.1rem black;
  background-color: ${(props: SquareProps) => props.color};
`;

const PrimarySqaure = styled(Square)`
  margin-bottom: 1rem;
  left: 0;
  top: 0;
`;

const SecondarySquare = styled(Square)`
  margin-top: 1rem;
  right: 0;
  bottom: 0;
`;

const Colors = () => {
  const primaryColor = useSelector(selectPrimaryColor);
  const secondaryColor = useSelector(selectSecondaryColor);

  return (
    <StyledColors>
      <Buttons>
        <Button>H</Button>
        <Button>H</Button>
      </Buttons>

      <Squares>
        <SecondarySquare color={secondaryColor} />
        <PrimarySqaure color={primaryColor} />
      </Squares>
    </StyledColors>
  );
};

export default Colors;
