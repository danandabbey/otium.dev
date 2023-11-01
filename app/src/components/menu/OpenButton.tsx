import { useStyleContext } from "../Context";

const MenuButton = (props: any) => {
  const { controls } = props;
  const style = useStyleContext();

  return (
    <div style={style.menuOpenButton}>
      <h1
        id="menuButton"
        style={style.menuOpenButtonText}
        onClick={() => controls(true)}
      >
        Menu
      </h1>
    </div>
  );
};

export default MenuButton;
