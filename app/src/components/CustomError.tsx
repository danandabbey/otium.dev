import { useContext } from "react";
import { styleContext } from "./Context";

const CustomError = () => {
  const style: any = useContext(styleContext);

  return (
    <div style={style.ErrorContainer}>
      <div style={style.Error}>
        <h1 style={style.ErrorTitle}>Error</h1>
        <p style={style.ErrorMessage}>
          Something went wrong, {"\n"}
          please try again later.
        </p>
      </div>
    </div>
  );
};

export default CustomError;
