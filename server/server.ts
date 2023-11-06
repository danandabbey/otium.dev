import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import weather from "./routes/weatherService";
import serveClient from "./routes/main";
import news from "./routes/newsService";

const app: express.Application = express();
const port = 5000;

try {
  app.use(
    cors({
      origin: "*",
      methods: "GET,POST",
    })
  );
  app.use(bodyParser.json());
  const server = http.createServer(app);

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  weather(app);
  news(app);
  serveClient(app);
} catch (err) {
  console.log(err);
}
