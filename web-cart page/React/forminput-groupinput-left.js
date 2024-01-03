import { useMemo } from "react";
import "./forminput-groupinput-left.css";

const ForminputGroupinputLeft = ({
  background,
  icon0,
  text,
  showIcon0,
  forminputGroupinputLeftWidth,
  forminputGroupinputLeftHeight,
  forminputGroupinputLeftPosition,
  forminputGroupinputLeftTop,
  forminputGroupinputLeftRight,
  forminputGroupinputLeftBottom,
  forminputGroupinputLeftLeft,
}) => {
  const forminputGroupinputLeftStyle = useMemo(() => {
    return {
      width: forminputGroupinputLeftWidth,
      height: forminputGroupinputLeftHeight,
      position: forminputGroupinputLeftPosition,
      top: forminputGroupinputLeftTop,
      right: forminputGroupinputLeftRight,
      bottom: forminputGroupinputLeftBottom,
      left: forminputGroupinputLeftLeft,
    };
  }, [
    forminputGroupinputLeftWidth,
    forminputGroupinputLeftHeight,
    forminputGroupinputLeftPosition,
    forminputGroupinputLeftTop,
    forminputGroupinputLeftRight,
    forminputGroupinputLeftBottom,
    forminputGroupinputLeftLeft,
  ]);

  return (
    <div
      className="forminput-groupinput-left"
      style={forminputGroupinputLeftStyle}
    >
      <img className="background-icon" alt="" src={background} />
      {showIcon0 && <img className="icon0" alt="" src={icon0} />}
      <div className="text">{text}</div>
    </div>
  );
};

export default ForminputGroupinputLeft;
