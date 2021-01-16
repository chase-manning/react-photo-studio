import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Handle from "../../shared/Handle";
import { OptionSectionType, OptionType } from "../../state/toolSchema";
import { selectOptionSections } from "../../state/toolsSlice";
import Option from "./Option";

const StyledOptions = styled.div`
  width: 100%;
  height: 4rem;
  background-color: var(--panel);
  padding: 0.5rem;
  display: flex;
`;

type OptionSectionProps = {
  showLine: boolean;
};

const OptionSection = styled.div`
  display: flex;
  border-right: ${(props: OptionSectionProps) =>
    props.showLine ? "solid 1px red" : "solid 1px var(--panel)"};
`;

const Options = () => {
  const sections = useSelector(selectOptionSections);

  return (
    <StyledOptions>
      <Handle component={"Options"} sideways={true} />
      {sections.map((section: OptionSectionType, index: number) => (
        <OptionSection key={index} showLine={index !== sections.length}>
          {section.options.map((option: OptionType, index: number) => (
            <Option key={index} option={option} />
          ))}
        </OptionSection>
      ))}
    </StyledOptions>
  );
};

export default Options;
