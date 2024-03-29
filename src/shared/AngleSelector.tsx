import { useDispatch } from "react-redux";
import styled from "styled-components";
import angle from "../assets/options/angle.svg";
import { requestFeature } from "../state/featureSlice";

const StyledAngleSelector = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  color: var(--label);
  margin-right: 0.4rem;
  cursor: url("cursors/scrub.png"), auto;
  user-select: none;
`;

const Input = styled.div`
  background-color: var(--hover-bg);
  border: solid 1px var(--input-border);
  color: var(--input-text);
  padding: 0.2rem 0.3rem;
  width: 4rem;
  cursor: text;
`;

const Icon = styled.img`
  height: 1rem;
`;

interface Props {
  value: number;
}

const AngleSelector = ({ value }: Props) => {
  const dispatch = useDispatch();

  return (
    <StyledAngleSelector>
      <Label
        onClick={() => dispatch(requestFeature("Angle Selector/Label Scrub"))}
      >
        <Icon src={angle} alt="angle" />
      </Label>
      <Input
        onClick={() => dispatch(requestFeature("Angle Selector/Text Edit"))}
      >
        {`${value}°`}
      </Input>
    </StyledAngleSelector>
  );
};

export default AngleSelector;
