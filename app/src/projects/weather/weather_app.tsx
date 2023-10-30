import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import Current from "./components/current";
import TwelveHour from "./components/twelveHours";
import Chart from "./components/chart/ChartCon";
import Loading from "../../components/Loading";
import { localContext } from "../../App";
import {
  styleContext,
  mobileContext,
  locationContext,
} from "../../components/Context";
import CustomError from "../../components/CustomError";
export const dataContext = createContext({});

function weather_app() {
  const local = useContext(localContext);
  const style = useContext(styleContext);
  const mobile: any = useContext(mobileContext);
  const [data, setData]: any = useState<any>({});
  const [isLoading, setLoading]: any = useState(true);
  const [err, setErr]: any = useState(false);

  let ip = "";
  let serverURL = ``;
  if (local) {
    serverURL = `http://localhost:5000/weather`;
  } else {
    ip = "api.otium.dev";
    serverURL = `https://${ip}/weather`;
  }
  const location: any = useContext(locationContext);

  useEffect(() => {
    const fetchData: any = async () => {
      if (location) {
        let data = { lat: location.latitude, lon: location.longitude };
        const resp: any = await axios
          .post(serverURL, data)
          .catch((error) => {
            if (error.response) {
              console.error(error.response.data);
              console.error(error.response.status);
              console.error(error.response.headers);
            } else if (error.request) {
              console.error(error.request);
            } else {
              console.error("Error", error.message);
            }
          })
          .then((response) => response);
        try {
          resp && setData(resp.data);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app" style={style.app}>
      {isLoading ? <Loading /> : null}
      {err ? <CustomError /> : null}
      {!isLoading && !err && data ? (
        <dataContext.Provider value={data}>
          <Current />
          {mobile ? null : <Chart />}
          <TwelveHour />
        </dataContext.Provider>
      ) : null}
    </div>
  );
}

export default weather_app;
