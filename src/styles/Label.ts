import styled from "styled-components";

interface Props {
  scrubCursor?: boolean;
}

const Label = styled.div`
  color: var(--label);
  margin-right: 0.4rem;
  user-select: none;
  cursor: ${(props: Props) =>
    props.scrubCursor ? "url('cursors/scrub.png'), auto" : "auto"};
`;

export default Label;
