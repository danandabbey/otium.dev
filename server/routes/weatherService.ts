import getData from "../data/weather/call";
import bodyParser from "body-parser";
import express from "express";

const weather = (app: express.Application) => {
  app.use(bodyParser.json());
  app.use((_req, res: express.Response, next: express.NextFunction) => {
    try {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, POST");
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
      next();
    } catch (error) {
      console.error(error);
    }
  });
  app.post("/weather", async (req: express.Request, res: express.Response) => {
    try {
      req.body ? console.log("working") : null;
      const weatherData = await getData(await req.body);
      res.send(await weatherData);
    } catch (error) {
      console.error(error);
    }
  });
};

export default weather;
