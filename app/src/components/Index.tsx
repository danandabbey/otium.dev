import { useStyleContext } from "./Context";
import React from "react";

const index = () => {
  const style = useStyleContext();

  return (
    <div style={style.index}>
      <h1 style={style.title}>Otium Labs</h1>
    </div>
  );
};

export default index;
