import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectNewFilePopupOpen } from "../state/actionsSlice";
import Popup from "./Popup";

const Content = styled.div``;

const NewFilePopup = () => {
  const open = useSelector(selectNewFilePopupOpen);

  return (
    <Popup open={true} header={"New Document"} content={<div>meow</div>} />
  );
};

export default NewFilePopup;
