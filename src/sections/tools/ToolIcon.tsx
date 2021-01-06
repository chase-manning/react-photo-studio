import React from "react";
import styled from "styled-components";
import { ToolOption } from "./toolSchema";
import move from "../../assets/svgs/tools/move.svg";
import rectangularMarquee from "../../assets/svgs/tools/rectangular-marquee.svg";

const StyledToolIcon = styled.img`
  height: 100%;
`;

const GetIcon = (option: ToolOption): string => {
  switch (option) {
    case ToolOption.MOVE:
      return move;
    case ToolOption.RECTANGULAR_MARQUEE:
      return rectangularMarquee;
    default:
      return "";
  }
};

type Props = {
  option: ToolOption;
};

const ToolIcon = (props: Props) => {
  return <StyledToolIcon src={GetIcon(props.option)} />;
};

export default ToolIcon;
