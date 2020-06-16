// @ts-ignore
const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const API_URL = process.env.API_URL;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  console.log("sercer")

  server.use(
    "/api",
    createProxyMiddleware({
      target: "https://tus-schedule-api.herokuapp.com",
      changeOrigin: true,
    })
  );

  server.get("/super_test", (req, res) => {
    return res.status(200).send();
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
