import { useContext } from "react";
import { Line } from "react-chartjs-2";
import { styleContext } from "../../../../components/Context";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = (props: any) => {
  const { data, time, title } = props;
  const style = useContext(styleContext);
  const color: any = style.chart.color;

  let titleSize: number = 40;
  let fontSize: number = 20;
  const options = {
    responsive: true,
    layout: {
      autoPadding: true,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: titleSize,
        },
        padding: 20,
        color: color,
      },
    },
    scales: {
      x: {
        grid: {
          color: color,
          font: {
            size: fontSize,
          },
        },
        ticks: {
          color: color,
          font: {
            size: fontSize,
          },
        },
      },
      y: {
        grid: {
          color: color,
          font: {
            size: fontSize,
          },
        },
        ticks: {
          color: color,
          font: {
            size: fontSize,
          },
        },
      },
    },
    elements: {
      point: {
        backgroundColor: color,
      },
      line: {
        borderColor: color,
      },
    },
  };
  const chartData = {
    labels: time,
    datasets: [
      {
        label: "Time",
        data: data,
        borderColor: color,
        tension: 0.5,
      },
    ],
  };
  return <Line style={style.chart} data={chartData} options={options} />;
};

export default Chart;
