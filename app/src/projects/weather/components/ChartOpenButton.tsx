import React from "react";
import { useStyleContext } from "../../../components/Context";

const ChartOpenButton = (props): React.Component=> {
  const { setMobileChart } = props;
  const style = useStyleContext();
  return (
    <div style={style.chartOpenButtonCon}>
      <p style={style.chartOpenButton}>Open Chart</p>
    </div>
  );
};

export default ChartOpenButton;
