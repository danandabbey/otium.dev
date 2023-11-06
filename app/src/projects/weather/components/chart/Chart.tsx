import { Line } from "react-chartjs-2";
import { useStyleContext } from "../../../../components/Context";

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
  const mobile: boolean = window.innerWidth <= 900;

  const { data, time, title } = props;
  const style = useStyleContext();
  const color: any = style.chart.color;

  let titleSize: number = mobile ? 30 : 60;
  let fontSize: number = mobile ? 12 : 20;
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
  return <Line data={chartData} options={options} />;
};

export default Chart;
