import { useDataContext } from "../weather_app";
import { useStyleContext } from "../../../components/Context";

const Forecast = (props: any) => {
  const { data } = props;
  const style: any = useStyleContext();
  const name = data.name;
  const precipitation = `${data.precipitation}% chance`;
  const temp = `${data.temp}\u00b0F`;
  return (
    <div style={style.forecast}>
      <h3 style={style.forecast_name}>{name}</h3>
      <h5 style={style.forecast_Item}>{precipitation}</h5>
      <h5 style={style.forecast_Item}>{temp}</h5>
    </div>
  );
};

const TwelveHour = () => {
  const style: any = useStyleContext();
  const data: any = useDataContext();
  const twelveHourData: any = data.twelveHour;
  const day_time = twelveHourData.filter((obj: any) => obj.isDayTime === true);
  const five = day_time.slice(0, 5);
  return (
    <div style={style.twelveHour}>
      {five.map((obj: any) => {
        return <Forecast key={obj.name} data={obj} />;
      })}
    </div>
  );
};

export default TwelveHour;
