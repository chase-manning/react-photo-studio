import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectNewFilePopupOpen } from "../state/actionsSlice";
import NewFileDetails from "./NewFileDetails";
import NewFilePresets from "./NewFilePresets";
import NewFileTab, { NewFileTabType } from "./NewFileTab";
import newFileTabsSchema from "./newFileTabsSchema";
import Popup from "./Popup";

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  border-bottom: solid 2px var(--menu-border);
  padding-left: 1.4rem;
`;

const Main = styled.div`
  display: flex;
`;

const NewFilePopup = () => {
  const open = useSelector(selectNewFilePopupOpen);
  const [tabs, setTabs] = useState(newFileTabsSchema);

  return (
    <Popup
      open={true}
      header={"New Document"}
      content={
        <Content>
          <Header>
            {tabs.map((tab: NewFileTabType) => (
              <NewFileTab
                key={tab.label}
                tab={tab}
                select={() => {
                  let newTabs = [...tabs];
                  newTabs.forEach(
                    (newTab: NewFileTabType) => (newTab.active = false)
                  );
                  newTabs.filter(
                    (newTab: NewFileTabType) => newTab.label === tab.label
                  )[0].active = true;
                  setTabs(newTabs);
                }}
              />
            ))}
          </Header>
          <Main>
            <NewFilePresets />
            <NewFileDetails />
          </Main>
        </Content>
      }
    />
  );
};

export default NewFilePopup;
