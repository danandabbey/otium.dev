import { CSSProperties } from "react";
import themes from "./colorThemes";

const bodyStyle = document.body.style;
bodyStyle.border = "0px";
bodyStyle.margin = "0px";

const root: any = document.getElementById("root");
const rootStyle = root.style;
rootStyle.width = "100vw";
rootStyle.height = "100vh";
rootStyle.fontFamily = "'Lato', sans-serif";

const { mainColor, backgroundColor, accentColor } =
  themes[Math.floor(Math.random() * themes.length)];

const mobile: boolean = window.innerWidth <= 900;

const styles: { [key: string]: CSSProperties } = {
  /************************************* Global *************************************/

  app: {
    display: "flex",
    flexDirection: "column",
    color: mainColor,
    backgroundColor: backgroundColor,
    accentColor: accentColor,
    fontSize: mobile ? "1.2em" : "1.3em",
    letterSpacing: ".1px",
    overflowX: "hidden",
    width: "100%",
    height: "100%",
  },
  index: {
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    height: "100%",
  },

  /************************************* Index *************************************/

  title: {
    fontSize: mobile ? "50px" : "100px",
    color: mainColor,
    paddingBottom: "1em",
  },

  /************************************* Menu *************************************/

  menu: {
    display: "flex",
    backgroundColor: mobile ? backgroundColor : "none",
    paddingBottom: mobile ? "1em" : "2em",
    alignItems: "center",
    flexDirection: "column",
    position: "fixed",
    alignContent: "center",
    right: "0",
    bottom: "0",
    width: mobile ? "100%" : "30%",
    height: mobile ? "auto" : "20%",
    zIndex: "1",
  },
  menuOpenButton: {
    fontSize: mobile ? "10px" : "100%",
    paddingRight: "2em",
    paddingBottom: "1em",
    position: "fixed",
    right: "0",
    bottom: "0",
    textAlign: "center",
    justifyContent: "center",
  },
  menuOpenButtonText: {
    color: mainColor,
  },

  /************************************* Loading *************************************/

  loading: {
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    height: "100%",
  },
  loadingDot: {
    color: mainColor,
    justifyContent: "center",
    textAlign: "center",
    fontSize: mobile ? "4em" : "5em",
  },

  /************************************* CustomError *************************************/

  ErrorContainer: {
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    height: "100%",
  },
  Error: {
    color: mainColor,
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    width: "60%",
    height: "20%",
    border: `1px solid ${mainColor}`,
    padding: "1em",
  },
  ErrorTitle: {
    fontSize: mobile ? "40px" : "60px",
    marginBlock: "0px",
  },
  ErrorMessage: {
    fontSize: mobile ? "20px" : "30px",
  },

  /************************************* Weather *************************************/

  weatherApp: {
    fontSize: mobile ? "20px" : "30px",
    width: "100%",
    height: "100%",
  },
  /* Current */

  currentTitle: {
    fontSize: mobile ? "60px" : "80px",
    color: mainColor,
    marginBlock: "0px",
    padding: "1em",
  },
  current: {
    color: mainColor,
    gap: ".2em",
    display: "flex",
    flexDirection: "column",
    justifySelf: "center",
    alignItems: "center",
    textAlign: "center",
    marginBlock: "0px",
    marginBottom: "5em",
  },
  currentItem: {
    padding: "10px",
    marginBlock: "0px",
    fontSize: mobile ? "20px" : "30px",
  },

  /* Chart */

  chart_and_buttons: {
    width: mobile ? "100%" : "70%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "1em",
    paddingBottom: "1em",
  },
  chart: {
    color: mainColor,
    paddingLeft: ".5em",
  },
  chartCon: {
    color: mainColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  chartBtnCon: {
    gap: mobile ? ".5em" : "2em",
    paddingTop: "1em",
    paddingBottom: "1em",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  /* Twelve-Hour */

  twelveHourTitle: {
    fontSize: mobile ? "40px" : "60px",
    color: mainColor,
    marginBlock: "0px",
    padding: "10px",
  },
  twelveHourCon: {
    color: mainColor,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    paddingTop: "5em",
    paddingBottom: mobile ? "0em" : "10em",
  },
  twelveHour: {
    color: mainColor,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  forecast: {
    color: mainColor,
    padding: mobile ? "1.5em" : "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: mobile ? "20px" : "30px",
  },
  forecast_name: {
    color: mainColor,
    fontSize: mobile ? "30px" : "50px",
    padding: "20px",
    marginBlock: "0px",
  },
  forecast_Item: {
    fontSize: mobile ? "20px" : "30px",
    marginBlock: "0px",
    padding: "10px",
  },

  /************************************* News *************************************/

  news: {
    display: "flex",
    flexDirection: "column",
  },
  newsCardDisplay: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    overflowX: "hidden",
    width: "100%",
    height: "100%",
  },
  newsTitle: {
    fontSize: mobile ? "40px" : "50px",
    marginBlock: "0px",
    padding: "1em",
  },
  newsCard: {
    width: "20em",
    height: "20em",
  },
  newsHeadline: {
    color: mainColor,
    fontSize: "30px",
    textDecoration: "none",
  },
  newsSummary: {
    fontSize: "30px",
  },
  newsImage: {
    width: "100%",
    height: "auto",
  },
  newsImageCon: {
    width: "100%",
    height: "auto",
    display: "flex",
  },
  newsText: {
    padding: "1em",
  },
  link: {
    textDecoration: "none",
    color: mainColor,
  },
};

export default styles;
