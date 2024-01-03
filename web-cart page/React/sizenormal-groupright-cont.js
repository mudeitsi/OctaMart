import { useMemo } from "react";
import ButtonbasetextMd from "./buttonbasetext-md";
import "./sizenormal-groupright-cont.css";

const SizenormalGrouprightCont = ({
  background,
  text,
  sizenormalGrouprightContWidth,
  sizenormalGrouprightContHeight,
  sizenormalGrouprightContPosition,
  sizenormalGrouprightContTop,
  sizenormalGrouprightContRight,
  sizenormalGrouprightContBottom,
  sizenormalGrouprightContLeft,
  textColor,
}) => {
  const sizenormalGrouprightContStyle = useMemo(() => {
    return {
      width: sizenormalGrouprightContWidth,
      height: sizenormalGrouprightContHeight,
      position: sizenormalGrouprightContPosition,
      top: sizenormalGrouprightContTop,
      right: sizenormalGrouprightContRight,
      bottom: sizenormalGrouprightContBottom,
      left: sizenormalGrouprightContLeft,
    };
  }, [
    sizenormalGrouprightContWidth,
    sizenormalGrouprightContHeight,
    sizenormalGrouprightContPosition,
    sizenormalGrouprightContTop,
    sizenormalGrouprightContRight,
    sizenormalGrouprightContBottom,
    sizenormalGrouprightContLeft,
  ]);

  const textStyle = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div
      className="sizenormal-groupright-cont"
      style={sizenormalGrouprightContStyle}
    >
      <img className="background-icon1" alt="" src={background} />
      <ButtonbasetextMd
        text="Button"
        buttonbasetextMdAlignItems="center"
        buttonbasetextMdJustifyContent="center"
        buttonbasetextMdPosition="absolute"
        buttonbasetextMdWidth="calc(100% - 20px)"
        buttonbasetextMdTop="calc(50% - 9px)"
        buttonbasetextMdRight="10px"
        buttonbasetextMdLeft="10px"
        textColor="#0d6efd"
        textTextAlign="center"
      />
    </div>
  );
};

export default SizenormalGrouprightCont;
