import React, { useState, useEffect, createContext, useContext } from "react";
import styles from "../assets/styles/css";
import { handleLocation } from "../assets/util";

const styleContext = createContext({}),
  locationContext = createContext({}),
  mobileContext = createContext({}),
  localContext = createContext({});

const ContextProvider = ({ children }) => {
  const globalLocal = true;
  const [style, setStyle]: React.SetStateAction<any> = useState(styles),
    [location, setLocation]: React.SetStateAction<any> = useState(undefined),
    [local, setLocal]: React.SetStateAction<any> = useState(globalLocal);

  useEffect(() => {
    setLocal(globalLocal);
    handleLocation(setLocation);
    setStyle(styles);
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
  ContextProvider,
  localContext,
  useStyleContext,
  useLocationContext,
  useMobileContext,
};
