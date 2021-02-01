import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectNewFilePopupOpen } from "../state/actionsSlice";
import NewFileTab, { NewFileTabType } from "./NewFileTab";
import Popup from "./Popup";

let tabs: NewFileTabType[] = [
  {
    label: "Recent",
    active: false,
  },
  {
    label: "Saved",
    active: false,
  },
  {
    label: "Photo",
    active: true,
  },
  {
    label: "Print",
    active: false,
  },
  {
    label: "Art & Illustration",
    active: false,
  },
  {
    label: "Web",
    active: false,
  },
  {
    label: "Mobile",
    active: false,
  },
  {
    label: "Film & Video",
    active: false,
  },
];

const Content = styled.div`
  height: 50vh;
  width: 50vw;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  border-bottom: solid 2px var(--menu-border);
`;

const NewFilePopup = () => {
  const open = useSelector(selectNewFilePopupOpen);

  return (
    <Popup
      open={true}
      header={"New Document"}
      content={
        <Content>
          <Header>
            {tabs.map((tab: NewFileTabType) => (
              <NewFileTab tab={tab} />
            ))}
          </Header>
        </Content>
      }
    />
  );
};

export default NewFilePopup;
