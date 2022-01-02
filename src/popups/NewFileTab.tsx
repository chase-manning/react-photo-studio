import styled from "styled-components";

type TabProps = {
  active: boolean;
};

const Tab = styled.button`
  position: relative;
  font-size: 1.3rem;
  margin: 1.7rem 1rem 1.6rem 1rem;
  cursor: pointer;

  color: ${(props: TabProps) =>
    props.active ? "var(--white)" : "var(--new-file-tab-text)"};
  :hover {
    color: var(--white);
  }
`;

const Underline = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  bottom: -1.8rem;
  height: 2px;
  background-color: var(--white);
  border-radius: 1px;
`;

export type NewFileTabType = {
  label: string;
  active: boolean;
};

type Props = {
  tab: NewFileTabType;
  select: () => void;
};

const NewFileTab = (props: Props) => {
  return (
    <Tab onClick={() => props.select()} active={props.tab.active}>
      {props.tab.label}
      {props.tab.active && <Underline />}
    </Tab>
  );
};

export default NewFileTab;
