import { useDispatch } from "react-redux";
import styled from "styled-components";
import { requestFeature } from "../state/featureSlice";
import hueIndicator from "../assets/pngs/hue-indicator.png";

const StyledHuePicker = styled.div`
  position: relative;
  height: 100%;
`;

const Colors = styled.div`
  height: 100%;
  width: 2rem;
  background: linear-gradient(
    #ff0000,
    #ff00ff,
    #0000ff,
    #00ffff,
    #00ff00,
    #ffff00,
    #ff0000
  );
  margin-left: 1.8rem;
`;

const HueIndicator = styled.img`
  width: 1rem;
  position: absolute;
  left: 0.8rem;
  top: 100%;
  transform: translateY(-50%);
`;

const HuePicker = () => {
  const dispatch = useDispatch();
  return (
    <StyledHuePicker
      onClick={() => dispatch(requestFeature("Windows/Color/Hue"))}
    >
      <Colors />
      <HueIndicator src={hueIndicator} alt="Hue Indicator" />
    </StyledHuePicker>
  );
};

export default HuePicker;
