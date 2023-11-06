import { useState } from "react";
import { useStyleContext } from "../../../../components/Context";

const Button = (props: any) => {
  const style: any = useStyleContext();
  const { title, clickFunction } = props;
  const mobile: boolean = window.innerWidth <= 900;

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const mainColor = style.app.color;
  const accentColor = style.app.accentColor;

  const ButtonStyle = {
    border: `1px solid ${isHovered ? accentColor : mainColor}`,
    borderRadius: "5px",
    color: isHovered ? accentColor : mainColor,
    fontSize: mobile ? "20px" : "40px",
    padding: ".3em",
    marginBlock: "0px",
  };

  if (mobile) {
    return (
      <div id={"button"}>
        <h6 style={ButtonStyle} onClick={clickFunction}>
          {title}
        </h6>
      </div>
    );
  } else {
    return (
      <div id={"button"}>
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
