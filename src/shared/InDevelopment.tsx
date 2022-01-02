import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectedFeatureRequesting } from "../state/featureSlice";

interface Props {
  show: boolean;
}

const StyledInDevelopment = styled.div`
  position: fixed;
  left: 50%;
  bottom: 3rem;
  transform: ${(props: Props) =>
    props.show ? "translate(-50%, 0)" : "translate(-50%, 130%)"};
  width: 40%;
  padding: 2.6rem;
  background-color: var(--layer-bg);
  border: solid 1px var(--toast-border);
  border-radius: 0.5rem;
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.5);
  transition: transform 1s;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  color: var(--white);
  text-transform: uppercase;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
`;

const Text = styled.div`
  color: var(--label);
  font-size: 1.1rem;
  line-height: 1.6rem;
`;

const Link = styled.a`
  color: var(--label);
  font-size: 1.1rem;
  line-height: 1.6rem;
`;

const InDevelopment = () => {
  const requesting = useSelector(selectedFeatureRequesting);

  return (
    <StyledInDevelopment show={!!requesting}>
      <Header>Feature In Development</Header>
      <Text>
        Photoshop Online is in Beta and some features are still in development.
        Check back soon, or view{" "}
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
