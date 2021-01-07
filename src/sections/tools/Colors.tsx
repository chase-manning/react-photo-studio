import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectPrimaryColor,
  selectSecondaryColor,
} from "../../state/toolsSlice";

const StyledColors = styled.div`
  width: 100%;
  margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  width: 50%;
  padding: 0.2rem;
`;

const Squares = styled.div`
  width: 100%;
  position: relative;
`;

type SquareProps = {
  color: string;
};

const Square = styled.div`
  width: 3rem;
  height: 3rem;
  border: solid 2px white;
  box-shadow: 0 0 0 0.1rem black;
  background-color: ${(props: SquareProps) => props.color};
`;

const PrimarySqaure = styled(Square)`
  margin-bottom: 1.5rem;
  left: 0;
  top: 0;
`;

const SecondarySquare = styled(Square)`
  margin-top: 1.5rem;
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
        <PrimarySqaure color={primaryColor} />
        <SecondarySquare color={secondaryColor} />
      </Squares>
    </StyledColors>
  );
};

export default Colors;
