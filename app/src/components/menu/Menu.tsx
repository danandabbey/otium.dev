import { useEffect } from "react";
import { useStyleContext } from "../Context";
import WeatherApp from "../../projects/weather/weather_app";
import Index from "../Index";
import MenuButton from "./MenuButton";

const Menu = (props: any) => {
  const { setMenu, setView } = props;

  const style = useStyleContext();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = (e.target as HTMLDivElement).id;
      if (id === "home") {
        setMenu(false);
        setView(<Index />);
      } else if (id === "weather") {
        setMenu(false);
        setView(<WeatherApp />);
      } else {
        if (id !== "menuButton" && id !== "weather" && id !== "home")
          setMenu(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [props]);

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
          <MenuButton key={button.title} id={button.id} title={button.title} />
        );
      })}
    </div>
  );
};

export default Menu;
