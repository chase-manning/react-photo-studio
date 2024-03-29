import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { requestFeature } from "../state/featureSlice";

interface TabsProps {
  height: string;
  bottom: boolean;
}

const StyledTabs = styled.div`
  position: relative;
  width: 100%;
  height: ${(props: TabsProps) => props.height};
  display: flex;
  flex-direction: column;
  border: solid 1px var(--border);
  margin-bottom: ${(props: TabsProps) => (props.bottom ? "0" : "0.1rem")};
  background-color: var(--panel);
  min-height: 3.2rem;
`;

const Header = styled.div`
  width: 100%;
  height: 2.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--expandable);
`;

interface ItemProps {
  active?: boolean;
}

const HeaderItem = styled.button`
  height: 100%;
  padding: 0 1.1rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  color: ${(props: ItemProps) =>
    props.active ? "var(--tab-text)" : "var(--tab-text-inactive)"};
  background-color: ${(props: ItemProps) =>
    props.active ? "var(--panel)" : "var(--expandable)"};
  border-right: solid 1px var(--border);
  border-bottom: solid 1px var(--border);
  border-bottom: ${(props: ItemProps) =>
    props.active ? "solid 1px var(--panel)" : "solid 1px var(--border)"};

  :hover {
    background-color: ${(props: ItemProps) =>
      props.active ? "var(--panel)" : "var(--tab-hover)"};
  }
`;

const MenuContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px var(--border);
`;

const Menu = styled.button`
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
  width: 1.76rem;
  margin-right: 0.3rem;
  border-radius: 0.1rem;

  border: solid 1px var(--expandable);
  :hover {
    background-color: var(--menu-hover-bg);
    border: solid 1px var(--close-hover);
  }
`;

const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: var(--menu-lines);
  margin-bottom: 0.1rem;
`;

const WindowResize = styled.div`
  position: absolute;
  height: 0.4rem;
  width: 100%;
  bottom: -0.2rem;
  left: 0;
  cursor: ns-resize;
`;

export interface TabType {
  label: string;
  content: JSX.Element;
  implemented: boolean;
}

interface Props {
  tabs: TabType[];
  height: string;
  bottom: boolean;
}

const Tabs = ({ tabs, height, bottom }: Props) => {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <StyledTabs height={height} bottom={bottom}>
      <Header>
        {tabs.map((tab: TabType, index: number) => (
          <HeaderItem
            key={tab.label}
            onClick={() => {
              if (tab.implemented) setActiveIndex(index);
              else dispatch(requestFeature(`Windows/${tabs[index].label}`));
            }}
            active={index === activeIndex}
            onDoubleClick={() =>
              dispatch(requestFeature("Windows/Tabs/Header/Hide"))
            }
          >
            {tab.label}
          </HeaderItem>
        ))}
        <MenuContainer>
          <div />
          <Menu onClick={() => dispatch(requestFeature("Windows/Menu"))}>
            <Line />
            <Line />
            <Line />
            <Line />
          </Menu>
        </MenuContainer>
      </Header>
      {tabs[activeIndex].content}
      {!bottom && (
        <WindowResize
          onClick={() => dispatch(requestFeature("Windows/Tabs/Resize"))}
        />
      )}
    </StyledTabs>
  );
};

export default Tabs;
