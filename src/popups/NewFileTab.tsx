import styled from "styled-components";

interface TabProps {
  active: boolean;
}

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

export interface NewFileTabType {
  label: string;
  active: boolean;
}

interface Props {
  tab: NewFileTabType;
  select: () => void;
}

const NewFileTab = ({ tab, select }: Props) => {
  return (
    <Tab onClick={() => select()} active={tab.active}>
      {tab.label}
      {tab.active && <Underline />}
    </Tab>
  );
};

export default NewFileTab;
