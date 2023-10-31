import { useState, useEffect, createContext, useContext } from "react";
import styles from "../assets/styles/css";
import { handleLocation } from "../assets/util";

const styleContext = createContext({}),
  locationContext = createContext({}),
  mobileContext = createContext({}),
  localContext = createContext({});

const ContextProvider = ({ children }) => {
  const globalLocal = true;
  const [style, setStyle]: any = useState(styles),
    [mobile, setMobile]: any = useState(window.innerWidth <= 900),
    [location, setLocation]: any = useState({}),
    [local, setLocal]: any = useState({});

  useEffect(() => {
    handleLocation(setLocation);
    setStyle(styles);
    setLocal(globalLocal);

    const handleResize = () => {
      setMobile(window.innerWidth <= 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <localContext.Provider value={local}>
      <locationContext.Provider value={location}>
        <mobileContext.Provider value={mobile}>
          <styleContext.Provider value={style}>
            {children}
          </styleContext.Provider>
        </mobileContext.Provider>
      </locationContext.Provider>
    </localContext.Provider>
  );
};

function useStyleContext() {
  const style = useContext(styleContext);
  if (!style) {
  }
  return style;
}

function useLocationContext() {
  const location = useContext(locationContext);
  if (!location) {
  }
  return location;
}

function useMobileContext() {
  const mobile = useContext(mobileContext);
  if (!mobile) {
  }
  return mobile;
}

export {
  localContext,
  ContextProvider,
  useStyleContext,
  useLocationContext,
  useMobileContext,
};
