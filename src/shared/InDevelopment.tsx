import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectedFeatureRequesting } from "../state/featureSlice";

type Props = {
  show: boolean;
};

const StyledInDevelopment = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: ${(props: Props) =>
    props.show ? "translate(-50%, 0)" : "translate(-50%, 110%)"};
  width: 30%;
  height: 20rem;
  background-color: red;
  transition: all 3s;
`;

const InDevelopment = () => {
  const requesting = useSelector(selectedFeatureRequesting);

  return <StyledInDevelopment show={!!requesting}>meow</StyledInDevelopment>;
};

export default InDevelopment;
