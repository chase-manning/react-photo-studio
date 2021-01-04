import React from "react";
import styled from "styled-components";

const StyledHandle = styled.div`
  width: 100%;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Lines = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;

const Line = styled.div`
  height: 100%;
  width: 0.1rem;
  background-color: var(--expandable);
`;

const Handle = () => {
  return (
    <StyledHandle>
      <Lines>
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
      </Lines>
    </StyledHandle>
  );
};
