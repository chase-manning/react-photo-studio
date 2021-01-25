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
  bottom: 3rem;
  transform: ${(props: Props) =>
    props.show ? "translate(-50%, 0)" : "translate(-50%, 110%)"};
  width: 40%;
  padding: 3rem;
  background-color: var(--layer-bg);
  border: solid 1px var(--toast-border);
  border-radius: 0.5rem;
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.5);
  transition: transform 3s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  color: var(--white);
  text-transform: uppercase;
  font-size: 1.6rem;
`;

const InDevelopment = () => {
  const requesting = useSelector(selectedFeatureRequesting);

  return (
    <StyledInDevelopment show={true}>
      <Header>Feature Under Development</Header>
    </StyledInDevelopment>
  );
};

export default InDevelopment;
