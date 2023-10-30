import { styleContext } from "../Context";
import { useContext, useState } from "react";

const Button = (props: any) => {
  const style = useContext(styleContext);
  const { id, title } = props;
  const mobile: boolean = window.innerWidth <= 900;

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const styles: any = {
    ButtonStyle: {
      textAlign: "center",
      color: style.app.color,
      fontSize: mobile ? "40px" : "60px",
      width: "100%",
      height: "50%",
      marginBlock: "0px",
    },
  };

  isHovered
    ? (styles.ButtonStyle.color = style.app.accentColor)
    : (styles.ButtonStyle.color = style.app.color);
  isHovered;

  if (mobile) {
    return (
      <h4 id={id} style={styles.ButtonStyle}>
        {title}
      </h4>
    );
  } else {
    return (
      <h4
        id={id}
        style={styles.ButtonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title}
      </h4>
    );
  }
};

export default Button;
