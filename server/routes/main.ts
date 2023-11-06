import express from "express";
import path from "path";

function serveClient(app: express.Application) {
  return (
    app.use(express.static(path.join(__dirname, "../dist"))) &&
    app.get("*", (_, res) => {
      res.sendFile(path.join(__dirname, "../dist", "index.html"));
    })
  );
}

export default serveClient;
