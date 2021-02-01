import React from "react";
import styled from "styled-components";
import NewFilePopup from "./NewFilePopup";

const StyledPopups = styled.div``;

const Popups = () => {
  return (
    <StyledPopups>
      <NewFilePopup />
    </StyledPopups>
  );
};

export default Popups;
