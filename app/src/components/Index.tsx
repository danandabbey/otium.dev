import { useContext } from "react";
import { styleContext } from "./Context";
import React from "react";

const index = () => {
  const style = useContext(styleContext);

  return (
    <div style={style.index}>
      <h1 style={style.title}>Otium Labs</h1>
    </div>
  );
};

export default index;
