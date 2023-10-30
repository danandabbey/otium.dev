import { useContext } from "react";
import { dataContext } from "../weather_app";
import { styleContext } from "../../../components/Context";

const Current = () => {
  try {
    const data: any = useContext(dataContext),
      style: any = useContext(styleContext),
      currentData = {
        desc: data.current.description,
        precipitation: `${data.current.precipitation}% chance`,
        temp: `${data.current.temp}\u00b0F`,
        humidity: `Humidity: ${data.current.humidity}%`,
        wind: `Wind: ${data.current.windDirection} ${data.current.windSpeed}`,
        city: data.current.city,
        state: data.current.state,
      };
    return (
      <div style={style.current}>
        <div>
          <h2 style={style.currentTitle}>
            {currentData.city}, {currentData.state}
          </h2>
        </div>
        <br />
        <div>
          <h4 style={style.currentItem}>{currentData.desc}</h4>
          <h4 style={style.currentItem}>{currentData.precipitation}</h4>
          <h4 style={style.currentItem}>{currentData.temp}</h4>
        </div>
        <br />
        <div>
          <h4 style={style.currentItem}>{currentData.humidity}</h4>
          <h4 style={style.currentItem}>{currentData.wind}</h4>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default Current;
