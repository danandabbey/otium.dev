import React from "react";

function NewsCard(props): React.Component {
  const { image, headline, summary } = props;

  const style = {
    headline: {},

    newsCard: {
      width: "20em",
      height: "20em",
    },
    newsHeadline: {
      fontSize: "50px",
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
  };

  /*  return (
    <div style={style.newsCard}>
      <div style={style.newsImageCon}>{image}</div>
      <div style={style.newsText}>
        <h1 style={style.headline}> {headline} </h1>
        <p style={style.newsSummary}> {summary} </p>
      </div>
    </div>
  );*/
}
