import axios from "axios";
import { localContext } from "../../components/Context";
const fetchData: any = async () => {
  try {
    const local = localContext;
    let serverURL = "";
    if (local) {
      serverURL = `http://localhost:5000/news`;
    } else {
      serverURL = `https://api.otium.dev/news`;
    }

    const resp: any = await axios.get(serverURL).catch((error) => {
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
    if (resp.data) {
      return resp.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
