import { useContext, useEffect } from "react";
import WeatherApp from "../../projects/weather/weather_app";
import { styleContext } from "../Context";
import Index from "../Index";
import MenuButton from "./MenuButton";

const Menu = (props: any) => {
  const style = useContext(styleContext);
  const controls = props.controls;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = (e.target as HTMLDivElement).id;
      if (id === "home") {
        controls.menu(false);
        controls.view(<Index />);
      } else if (id === "weather") {
        controls.menu(false);
        controls.view(<WeatherApp />);
      } else {
        if (id !== "menuButton" && id !== "weather" && id !== "home")
          controls.menu(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [controls]);

  const buttons = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "weather",
      title: "Weather",
    },
  ];

  return (
    <div style={style.menu} id="menu">
      {buttons.map((button) => {
        return (
          <MenuButton
            key={button.title}
            id={button.id}
            title={button.title}
          />
        )
      })}
    </div>
  );
};

export default Menu;
