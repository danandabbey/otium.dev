import getData from "../data/weather/call";
import express from "express";

function weather(app: express.Application) {
  app.post("/weather", async (req, res) => {
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
