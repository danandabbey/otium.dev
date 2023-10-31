import { useStyleContext } from "../Context";

const MenuButton = (props: any) => {
  const style = useStyleContext();
  const { controls } = props;

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
