import React from "react";
import styled from "styled-components";

type TabProps = {
  active: boolean;
};

const Tab = styled.button`
  position: relative;
  font-size: 1.4rem;
  margin: 2rem 1rem;
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
  bottom: -2rem;
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
};

const NewFileTab = (props: Props) => {
  return (
    <Tab active={props.tab.active}>
      {props.tab.label}
      {props.tab.active && <Underline />}
    </Tab>
  );
};

export default NewFileTab;
