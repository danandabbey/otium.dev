import express from "express";
import http from "http";
import weather from "./routes/weatherService";
import bodyParser from "body-parser";

const app: express.Application = express();
const port = 5000;

try {
  weather(app);
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

  const server = http.createServer(app);

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (err) {
  console.log(err);
}
