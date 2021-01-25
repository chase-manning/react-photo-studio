import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import cross from "../../assets/svgs/navigation/cross.svg";
import { requestFeature } from "../../state/featureSlice";

const StyledTab = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-right: solid 1px var(--border);
  background-color: var(--panel);
  padding: 0.5rem;
`;

const CloseButton = styled.button`
  width: 1.4rem;
  height: 1.2rem;
  border-radius: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: var(--close-hover);
  }
`;

const Cross = styled.img`
  height: 0.6rem;
`;

const Label = styled.div`
  color: var(--tab-text);
  font-size: 1.2rem;
  padding: 0 0.5rem;
  font-weight: 500;
  user-select: none;
`;

const DocumentTab = () => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(0);

  return (
    <StyledTab
      onMouseEnter={() =>
        setTimer(
          window.setTimeout(
            () => dispatch(requestFeature("Documents/Tabs/Tab/Hover Menu")),
            1000
          )
        )
      }
      onMouseLeave={() => window.clearTimeout(timer)}
    >
      <CloseButton
        onClick={() => dispatch(requestFeature("Documents/Tabs/Tab/Close"))}
      >
        <Cross src={cross} />
      </CloseButton>
      <Label>Untitled-1 @ 100% (RGB/8)</Label>
    </StyledTab>
  );
};

export default DocumentTab;
