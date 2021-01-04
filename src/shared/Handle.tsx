import React from "react";
import styled from "styled-components";

const StyledHandle = styled.div`
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Lines = styled.div`
  height: 50%;
  display: flex;
`;

const Line = styled.div`
  height: 100%;
  width: 0.1rem;
  margin-right: 0.1rem;
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

export default Handle;
