import { useContext } from "react";
import { styleContext } from "../../../../components/Context";
import Button from "./ChartButton";

const Buttons = (props: any) => {
  const style: any = useContext(styleContext);
  const { temperature, precipitation, humidity } = props;

  const buttons = [
    {
      title: "Temperature",
      clickFunction: temperature,
    },
    {
      title: "Precipitation",
      clickFunction: precipitation,
    },
    {
      title: "Humidity",
      clickFunction: humidity,
    },
  ];
  return (
    <div style={style.chartBtnCon}>
      {buttons.map((button) => {
        return (
          <Button
            key={button.title}
            title={button.title}
            clickFunction={button.clickFunction}
          />
        );
      })}
    </div>
  );
};

export default Buttons;
