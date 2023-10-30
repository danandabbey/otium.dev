import { useState, useContext } from "react";
import { styleContext } from "../../../../components/Context";

const Button = (props: any) => {
  const style: any = useContext(styleContext);
  const { title, clickFunction } = props;
  const mobile: boolean = window.innerWidth <= 900;

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const ButtonStyle = {
    color: style.chart.color,
    accentColor: style.chart.accentColor,
    fontSize: mobile ? "25px" : "40px",
    padding: ".3em",
    marginBlock: "0px",
  };

  isHovered
    ? (ButtonStyle.color = style.chart.accentColor)
    : (ButtonStyle.color = style.chart.color);

  if (mobile) {
    return (
      <div id={"button"} style={ButtonStyle}>
        <h6 style={ButtonStyle} onClick={clickFunction}>
          {title}
        </h6>
      </div>
    );
  } else {
    return (
      <div id={"button"} style={ButtonStyle}>
        <h6
          style={ButtonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={clickFunction}
        >
          {title}
        </h6>
      </div>
    );
  }
};

export default Button;
