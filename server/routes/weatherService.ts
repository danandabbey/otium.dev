import getData from "../data/weather/call";
import bodyParser from "body-parser";
import express from "express";

function weather(app: express.Application) {
  app.use(bodyParser.json());
  app.use((_req, res: express.Response, next: express.NextFunction) => {
    try {
      res.header("Access-Control-Allow-Origin", "https://otium.dev");
      res.header("Access-Control-Allow-Methods", "GET, POST");
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
      next();
    } catch (error) {
      console.error(error);
    }
  });
  app.post("/weather", async (req: express.Request, res: express.Response) => {
    try {
      const weatherData = await getData(req.body);
      res.status(200);
      res.send(weatherData);
    } catch (error) {
      console.error(error);
      res.status(500);
      res.send("Internal Server Error");
    }
  });
}

export default weather;
