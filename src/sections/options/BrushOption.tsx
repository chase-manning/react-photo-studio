import { useDispatch } from "react-redux";
import styled from "styled-components";

import { requestFeature } from "../../state/featureSlice";
import { OptionType } from "../../types/options";

const StyledBrushOption = styled.button`
  display: flex;
  height: 100%;
`;

const BrushContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.6rem;
`;

interface BrushProps {
  size: number;
}

const Brush = styled.div`
  height: ${(props: BrushProps) => `${props.size}rem`};
  width: ${(props: BrushProps) => `${props.size}rem`};
  border-radius: 50%;
  background-color: var(--white);
`;

const Label = styled.div`
  width: 100%;
  font-size: 1rem;
  color: var(--label);
  text-align: center;
  user-select: none;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.4rem;
`;

const Arrow = styled.div`
  transform: rotate(90deg);
  color: var(--icon);
`;

interface Props {
  option: OptionType;
}

const BrushOption = (props: Props) => {
  const dispatch = useDispatch();
  const brushSize = Math.max(1.6 * ((props.option.value || 0) / 40), 1);

  return (
    <StyledBrushOption
      onClick={() => dispatch(requestFeature("Options/Brush"))}
    >
      <BrushContainer>
        <Brush size={brushSize} />
        <Label>{props.option.value}</Label>
      </BrushContainer>
      <Button>
        <Arrow>{">"}</Arrow>
      </Button>
    </StyledBrushOption>
  );
};

export default BrushOption;
