import { useDispatch } from "react-redux";
import styled from "styled-components";
import { requestFeature } from "../state/featureSlice";
import Label from "../styles/Label";

const StyledPercentSelector = styled.div`
  display: flex;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  background-color: var(--hover-bg);
  border: solid 1px var(--input-border);
  border-radius: 0.3rem;
`;

const Input = styled.div`
  flex: 1;
  color: var(--input-text);
  padding: 0.2rem 0.3rem;
  width: 3.3rem;
`;

const Button = styled.button`
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: solid 1px var(--input-border);
`;

const Icon = styled.div`
  transform: rotate(90deg);
  color: var(--icon);
`;

interface Props {
  label: string;
  value: number;
}

const PercentSelector = ({ label, value }: Props) => {
  const dispatch = useDispatch();

  return (
    <StyledPercentSelector>
      <Label
        scrubCursor
        onClick={() => dispatch(requestFeature("Percent Selector/Label Scrub"))}
      >
        {`${label}:`}
      </Label>
      <InputContainer>
        <Input
          onClick={() => dispatch(requestFeature("Percent Selector/Text Edit"))}
        >
          {`${value}%`}
        </Input>
        <Button
          onClick={() => dispatch(requestFeature("Percent Selector/Dropdown"))}
        >
          <Icon>{">"}</Icon>
        </Button>
      </InputContainer>
    </StyledPercentSelector>
  );
};

export default PercentSelector;
