import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Handle from "../../shared/Handle";
import { selectOptionSections } from "../../state/toolsSlice";
import { OptionSectionType, OptionType } from "../../types/options";
import Option from "./Option";

const StyledOptions = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: var(--panel);
  padding: 0.3rem 0.5rem;
  display: flex;
`;

const OptionSection = styled.div`
  display: flex;
  align-items: center;
`;

const SectionLine = styled.div`
  height: 80%;
  border-right: solid 1px var(--section-line);
  margin: 0 0.2rem;
`;

const Options = () => {
  const sections = useSelector(selectOptionSections);

  return (
    <StyledOptions>
      <Handle sideways component="Options" />
      {sections.map((section: OptionSectionType, index: number) => (
        <OptionSection key={index}>
          {section.options.map((option: OptionType, index: number) => (
            <Option key={index} option={option} />
          ))}
          {index !== sections.length - 1 && <SectionLine />}
        </OptionSection>
      ))}
    </StyledOptions>
  );
};

export default Options;
