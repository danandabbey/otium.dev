import { useState, useEffect, useContext } from "react";
import { dataContext } from "../../weather_app";
import { styleContext } from "../../../../components/Context";
import Chart from "./Chart";
import Buttons from "./Buttons";

const ChartCon = () => {
  const [currentChart, setCurrentData]: any = useState({});
  const style: any = useContext(styleContext);
  const data: any = useContext(dataContext);
  const time: any = data.chart.time;
  const chartData: any = data.chart.chart;

  interface chartInterface {
    id: number;
    title: string;
    data: any;
  }

  const search = (key: any) => {
    const charts: chartInterface[] = [
      {
        id: 1,
        title: "Temperature",
        data: chartData.temp,
      },
      {
        id: 2,
        title: "Chance of Precipitation",
        data: chartData.precipitation,
      },
      {
        id: 3,
        title: "Humidity",
        data: chartData.humidity,
      },
    ];
    let object: any = charts.find((obj) => obj.id === key);
    return object.data;
  };

  const temperature: any = () => setCurrentData(search(1));
  const precipitation: any = () => setCurrentData(search(2));
  const humidity: any = () => setCurrentData(search(3));

  useEffect(() => {
    temperature();
  }, [data.chart]);

  return (
    <div style={style.chartCon}>
      <div style={style.chart_and_buttons}>
        <Chart
          time={time}
          title={currentChart.title}
          data={currentChart.data}
        />
        <Buttons
          temperature={temperature}
          precipitation={precipitation}
          humidity={humidity}
        />
      </div>
    </div>
  );
};

export default ChartCon;
