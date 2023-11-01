import { useState } from "react";
import { useStyleContext } from "./components/Context";
import Menu from "./components/menu/Menu";
import Index from "./components/Index";
import MenuButton from "./components/menu/OpenButton";

function App(): JSX.Element {
  const style = useStyleContext();
  const [view, setView] = useState(<Index />);
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div style={style.app}>
      {view}
      {menuActive ? (
        <Menu setMenu={setMenuActive} setView={setView} />
      ) : (
        <MenuButton controls={setMenuActive} />
      )}
    </div>
  );
}

export default App;
