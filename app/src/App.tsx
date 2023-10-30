import { useState, useEffect, useContext, createContext } from "react";
import Loading from "./components/Loading";
import { styleContext } from "./components/Context";
import Menu from "./components/menu/Menu";
import Index from "./components/Index";
import MenuButton from "./components/menu/OpenButton";
export const localContext = createContext({});

const App = (): JSX.Element => {
  const globalLocal = false;
  const [local, setLocal]: any = useState(globalLocal);
  const [loading, setLoading]: any = useState(true);
  const style = useContext(styleContext);
  const [view, setView] = useState(<Loading />);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    setView(<Index />);
    setLoading(false);
    setLocal(globalLocal);
  }, []);

  const menuControls = {
    menu: setMenuActive,
    view: setView,
  };

  return (
    <localContext.Provider value={local}>
      <div style={style.app}>
        {loading ? <Loading /> : view}
        {menuActive ? (
          <Menu controls={menuControls} />
        ) : (
          <MenuButton controls={setMenuActive} />
        )}
      </div>
    </localContext.Provider>
  );
};

export default App;
