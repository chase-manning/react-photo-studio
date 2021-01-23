import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../assets/svgs/navigation/triangle-right.svg";

const ContextIndicator = styled(ArrowIcon)`
  position: absolute;
  right: 0.1rem;
  bottom: 0.3rem;
  height: 0.4rem;
  fill: var(--white);
  transform: rotate(90deg);
`;

export default ContextIndicator;
