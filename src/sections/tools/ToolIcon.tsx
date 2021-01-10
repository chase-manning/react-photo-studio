import React from "react";
import styled from "styled-components";
import { ToolOption } from "../../state/toolSchema";
import move from "../../assets/svgs/tools/move.svg";
import rectangularMarquee from "../../assets/svgs/tools/rectangular-marquee.svg";
import lasso from "../../assets/svgs/tools/lasso.svg";
import magicWand from "../../assets/svgs/tools/magic-wand.svg";
import crop from "../../assets/svgs/tools/crop.svg";
import frame from "../../assets/svgs/tools/frame.svg";
import eyedropper from "../../assets/svgs/tools/eyedropper.svg";
import spotHealingBrush from "../../assets/svgs/tools/spot-healing-brush.svg";
import brush from "../../assets/svgs/tools/brush.svg";
import cloneStamp from "../../assets/svgs/tools/clone-stamp.svg";
import historyBrush from "../../assets/svgs/tools/history-brush.svg";
import eraser from "../../assets/svgs/tools/eraser.svg";
import gradient from "../../assets/svgs/tools/gradient.svg";
import blur from "../../assets/svgs/tools/blur.svg";
import dodge from "../../assets/svgs/tools/dodge.svg";
import pen from "../../assets/svgs/tools/pen.svg";
import type from "../../assets/svgs/tools/type.svg";
import pathSelection from "../../assets/svgs/tools/path-selection.svg";
import rectangle from "../../assets/svgs/tools/rectangle.svg";
import hand from "../../assets/svgs/tools/hand.svg";
import zoom from "../../assets/svgs/tools/zoom.svg";

const StyledToolIcon = styled.img`
  height: 100%;
`;

const GetIcon = (option: ToolOption): string => {
  switch (option) {
    case ToolOption.MOVE:
      return move;
    case ToolOption.RECTANGULAR_MARQUEE:
      return rectangularMarquee;
    case ToolOption.LASSO:
      return lasso;
    case ToolOption.MAGIC_WAND:
      return magicWand;
    case ToolOption.CROP:
      return crop;
    case ToolOption.FRAME:
      return frame;
    case ToolOption.EYEDROPPER:
      return eyedropper;
    case ToolOption.SPOT_HEALING_BRUSH:
      return spotHealingBrush;
    case ToolOption.BRUSH:
      return brush;
    case ToolOption.CLONE_STAMP:
      return cloneStamp;
    case ToolOption.HISTORY_BRUSH:
      return historyBrush;
    case ToolOption.ERASER:
      return eraser;
    case ToolOption.GRADIENT:
      return gradient;
    case ToolOption.BLUR:
      return blur;
    case ToolOption.DODGE:
      return dodge;
    case ToolOption.PEN:
      return pen;
    case ToolOption.HORIZONTAL_TYPE:
      return type;
    case ToolOption.PATH_SELECTION:
      return pathSelection;
    case ToolOption.RECTANGLE:
      return rectangle;
    case ToolOption.HAND:
      return hand;
    case ToolOption.ZOOM:
      return zoom;
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
