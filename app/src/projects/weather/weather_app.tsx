import { useState, useEffect, createContext, useContext } from "react";
import Current from "./components/current";
import TwelveHour from "./components/twelveHours";
import Chart from "./components/chart/ChartCon";
import fetchData from "./call";
import { localContext } from "../../components/Context";
import {
  useLocationContext,
  useMobileContext,
  useStyleContext,
} from "../../components/Context";

const dataContext = createContext({});

function weather_app() {
  const local = useContext(localContext);
  const style = useStyleContext();
  const mobile: any = useMobileContext();
  const location: any = useLocationContext();
  const [data, setData] = useState(undefined);

  const getData = async () => {
    setData(await fetchData(local, location));
  };
  useEffect(() => {
    location ? getData() : null;
  }, [location]);
  return (
    <div className="app" style={style.app}>
      {data ? (
        <dataContext.Provider value={data}>
          <Current />
          {mobile ? null : <Chart />}
          <TwelveHour />
        </dataContext.Provider>
      ) : null}
    </div>
  );
}

function useDataContext() {
  const data = useContext(dataContext);
  if (data) {
    return data;
  }
}

export { useDataContext };
export default weather_app;
