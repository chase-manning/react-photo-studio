import styled from "styled-components";
import ColorPicker from "../../shared/ColorPicker";
import Colors from "../../shared/Colors";
import HuePicker from "../../shared/HuePicker";

const StyledColorWindow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.8rem 1.6rem 1.9rem 0.6rem;
`;

const ColorContainer = styled.div`
  width: 4.2rem;
`;

const ColorWindow = () => {
  return (
    <StyledColorWindow>
      <ColorContainer>
        <Colors parent="Windows/Color" showButtons={false} />
      </ColorContainer>
      <ColorPicker />
      <HuePicker />
    </StyledColorWindow>
  );
};

export default ColorWindow;
