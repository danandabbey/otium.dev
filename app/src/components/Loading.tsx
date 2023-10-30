import { useState, useEffect, useContext } from "react";
import { styleContext } from "./Context";
import CustomError from "./CustomError";

const Loading = (): React.ReactNode => {
  const [view, setView] = useState<any>(".");
  const style: any = useContext(styleContext);

  useEffect(() => {
    let n = 0;
    let interval = setInterval(() => {
      if (n < 10) {
        setView((msg: any) => msg + "."), n++;
      } else {
        setView(<CustomError />);
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={style.loading}>
      <div style={style.loadingDot}>{view}</div>
    </div>
  );
};

export default Loading;
