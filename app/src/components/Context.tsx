import { useState, useEffect, createContext, useContext } from "react";
import styles from "../assets/styles/css";
import { handleLocation } from "../assets/util";
import local_context from "../../../localContext";

const styleContext = createContext({}),
  locationContext = createContext({}),
  mobileContext = createContext({}),
  localContext = createContext({});

const ContextProvider = ({ children }) => {
  const globalLocal = local_context;
  const [style, setStyle]: any = useState(styles),
    [location, setLocation]: any = useState(undefined),
    [local, setLocal]: any = useState(undefined);

  useEffect(() => {
    handleLocation(setLocation);
    setStyle(styles);
    setLocal(globalLocal);
  }, []);

  return (
    <localContext.Provider value={local}>
      <locationContext.Provider value={location}>
        <styleContext.Provider value={style}>{children}</styleContext.Provider>
      </locationContext.Provider>
    </localContext.Provider>
  );
};

function useStyleContext() {
  const style = useContext(styleContext);
  if (style) {
    return style;
  }
}

function useLocationContext() {
  const location = useContext(locationContext);
  if (location) {
    return location;
  }
}

function useMobileContext() {
  const mobile = useContext(mobileContext);
  if (mobile) {
    return mobile;
  }
}

export {
  localContext,
  ContextProvider,
  useStyleContext,
  useLocationContext,
  useMobileContext,
};
