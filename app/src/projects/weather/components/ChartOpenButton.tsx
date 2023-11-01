import { useStyleContext } from "../../../components/Context";

const ChartOpenButton = (props) => {
  const { controlChart } = props;
  const style = useStyleContext();
  return (
    <div onClick={controlChart(true)} style={style.chartOpenButtonCon}>
      <p style={style.chartOpenButton}>Open Chart</p>
    </div>
  );
};

export default ChartOpenButton;
