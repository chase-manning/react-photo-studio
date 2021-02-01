import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectNewFilePopupOpen } from "../state/actionsSlice";
import Popup from "./Popup";

const Content = styled.div`
  height: 50vh;
  width: 50vw;
`;

const NewFilePopup = () => {
  const open = useSelector(selectNewFilePopupOpen);

  return (
    <Popup
      open={true}
      header={"New Document"}
      content={<Content>meow</Content>}
    />
  );
};

export default NewFilePopup;
