import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import fetchData from "./call";
import { useStyleContext } from "../../components/Context";

function News(props): React.Component {
  const style = useStyleContext();
  const [data, setData]: React.SetStateAction<any> = useState(undefined);

  const response = async () => {
    const response = await fetchData();
    setData(response.results);
  };
  useEffect(() => {
    response();
  }, []);
  const {} = props;
  return (
    <div style={style.news}>
      <h1 style={style.newsTitle}>News</h1>
      <div style={style.newsCardDisplay}>
        {data &&
          data.map((news) => (
            <NewsCard
              key={news.webTitle}
              webTitle={news.webTitle}
              webUrl={news.webUrl}
            />
          ))}
      </div>
    </div>
  );
}

export default News;

/*
returned data:
  {
    status: 'ok',
    userTier: 'developer',
    total: 2462665,
    startIndex: 1,
    pageSize: 10,
    currentPage: 1,
    pages: 246267,
    orderBy: 'newest',
    results: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  }
*/
