import express from "express";
import http from "http";
import weather from "./routes/weatherService";

const app: express.Application = express();
const port = 5000;

try {
  weather(app);
} catch (err) {
  console.log(err);
} finally {
  const server = http.createServer(app);

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
