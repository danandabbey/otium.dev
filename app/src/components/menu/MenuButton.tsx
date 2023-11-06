import { useStyleContext } from "../Context";
import { useState } from "react";

const Button = (props: any) => {
  const style = useStyleContext();
  const { id, title } = props;
  const mobile: boolean = window.innerWidth <= 900;

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const styles: any = {
    textAlign: mobile ? "center" : "right",
    color: style.app.color,
    fontSize: mobile ? "40px" : "60px",
    paddingRight: mobile ? "" : "1em",
    width: "100%",
    height: "50%",
    marginBlock: "0px",
  };

  isHovered
    ? (styles.color = style.app.accentColor)
    : (styles.color = style.app.color);

  if (mobile) {
    return (
      <h4 id={id} style={styles}>
        {title}
      </h4>
    );
  } else {
    return (
      <h4
        id={id}
        style={styles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title}
      </h4>
    );
  }
};

export default Button;
