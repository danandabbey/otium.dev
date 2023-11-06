import axios from "axios";
import { localContext } from "../../components/Context";

const fetchData: any = async (location: any) => {
  const local = localContext;
  let serverURL = "";
  if (local) {
    serverURL = `http://localhost:5000/weather`;
  } else {
    serverURL = `https://api.otium.dev/weather`;
  }

  if (location) {
    let data = {
      lat: location.latitude,
      lon: location.longitude,
    };
    const resp: any = await axios.post(serverURL, data).catch((error) => {
      error.response
        ? console.error(
            error.response.data,
            error.response.status,
            error.response.headers
          )
        : error.request
        ? console.error(error.request)
        : console.error("Error", error.message);
    });
    try {
      if (resp.data) {
        return resp.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export default fetchData;
