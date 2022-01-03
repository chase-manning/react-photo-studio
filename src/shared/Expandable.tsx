import styled from "styled-components";

const StyledExpandable = styled.div`
  width: 100%;
  height: 1.2rem;
  background-color: var(--expandable);
  display: flex;
  justify-content: space-between;
  border-top: solid 0.1rem var(--border);
  border-left: solid 0.1rem var(--border);
  border-right: solid 0.1rem var(--border);
`;

const ToggleButton = styled.button`
  height: 100%;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text);
  font-size: 0.9rem;

  border: solid 0.1rem var(--expandable);
  :hover {
    background-color: #474747;
    border: solid 0.1rem var(--border);
  }
`;

interface Props {
  open: boolean;
  right?: boolean;
  toggle: () => void;
}

const Expandable = ({ open, right, toggle }: Props) => {
  const arrows = () => {
    if (right) return open ? ">>" : "<<";
    return open ? "<<" : ">>";
  };

  return (
    <StyledExpandable>
      {right && <div />}
      <ToggleButton onClick={() => toggle()}>{arrows()}</ToggleButton>
    </StyledExpandable>
  );
};

export default Expandable;
