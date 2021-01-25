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

const Text = styled.div`
  color: var(--tab-text);
  font-size: 1rem;
`;

const Link = styled.a`
  color: var(--tab-text);
`;

const InDevelopment = () => {
  const requesting = useSelector(selectedFeatureRequesting);

  return (
    <StyledInDevelopment show={true}>
      <Header>Feature Under Development</Header>
      <Text>
        Photoshop Online is still in Beta and some features are still under
        development. Check back soon, or view{" "}
        <Link
          href="https://github.com/chase-manning/photoshop-online"
          target="_blank"
        >
          our GitHub
        </Link>{" "}
        to follow along or contribute.
      </Text>
    </StyledInDevelopment>
  );
};

export default InDevelopment;
