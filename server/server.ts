import express from "express";
import http from "http";
import weather from "./routes/weatherService";
import cors from "cors";
import bodyParser from "body-parser";

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
} catch (err) {
  console.log(err);
}
