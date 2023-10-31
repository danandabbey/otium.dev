import axios from "axios";

const fetchData: any = async (local, location) => {
  let ip = "";
  let serverURL = ``;
  if (local) {
    serverURL = `http://localhost:5000/weather`;
  } else {
    ip = "api.otium.dev";
    serverURL = `https://${ip}/weather`;
  }

  if (location) {
    let data = {
      lat: location.latitude,
      lon: location.longitude,
    };
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
      console.log(resp);
      if (resp.data) {
        return resp.data;
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export default fetchData;
