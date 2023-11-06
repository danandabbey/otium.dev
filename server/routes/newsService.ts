import axios from "axios";
import express from "express";

const apiKey = "5d02afde-b633-49f1-9752-f0694183fcc4";
const baseUrl = `https://content.guardianapis.com/search?api-key=${apiKey}`;
//const searchUrl = `https://content.guardianapis.com/search?&q=${query}&api-key=${apiKey}`;

const fetchGuardian = async () => {
  const resp = await axios
    .get(baseUrl)
    .catch((error) => {
      error.response
        ? console.error(
            error.response.data,
            error.response.status,
            error.response.headers
          )
        : error.request
        ? console.error(error.request)
        : console.error("Error", error.message);
    })
    .then((response) => response);

  const data = resp?.data.response;
  return data;
};

function news(app: express.Application) {
  app.get("/news", async (_, res) => {
    try {
      const weatherData = await fetchGuardian();
      res.status(200);
      res.send(weatherData);
    } catch (error) {
      console.error(error);
      res.status(500);
      res.send("Internal Server Error");
    }
  });
}

export default news;

/*
returned data:
{
  response: {
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
}
*/

/*
result object:
  {
    id: 'world/2023/nov/05/ceasefire-or-humanitarian-pause-the-bitter-debate-on-the-best-route-to-peace',
    type: 'article',
    sectionId: 'world',
    sectionName: 'World news',
    webPublicationDate: '2023-11-05T19:12:15Z',
    webTitle: 'Most agree Gaza needs help – but there’s fierce disagreement on how to deliver it',
    webUrl: 'https://www.theguardian.com/world/2023/nov/05/ceasefire-or-humanitarian-pause-the-bitter-debate-on-the-best-route-to-peace',
    apiUrl: 'https://content.guardianapis.com/world/2023/nov/05/ceasefire-or-humanitarian-pause-the-bitter-debate-on-the-best-route-to-peace',
    isHosted: false,
    pillarId: 'pillar/news',
    pillarName: 'News'
  },
*/