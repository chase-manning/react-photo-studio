import styled from "styled-components";
import ReactGA from "react-ga";

import Documents from "./sections/documents/Documents";
import Menu from "./sections/menu/Menu";
import Options from "./sections/options/Options";
import Tools from "./sections/tools/Tools";
import Windows from "./sections/windows/Windows";
import InDevelopment from "./shared/InDevelopment";
import FileUpload from "./popups/FileUpload";
import Popups from "./popups/Popups";

ReactGA.initialize("UA-186400691-2");
ReactGA.pageview("/");

const StyledApp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--menu-hover-bg);
`;

const Horizontal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const App = () => {
  return (
    <StyledApp>
      <Menu />
      <Options />
      <Horizontal>
        <Tools />
        <Documents />
        <Windows />
      </Horizontal>
      <InDevelopment />
      <FileUpload />
      <Popups />
    </StyledApp>
  );
};

export default App;
