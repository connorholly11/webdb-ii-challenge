const express = require("express");
const carsRouter = require("./expressRouters/carsRouter");

const server = express();

function logger(req, res, next) {
  const url = req.url;
  const method = req.method;
  console.log(`There was a ${method} on ${url}`);
  next();
}

server.use(express.json());
server.use(logger);
server.use("/cars", carsRouter);

server.get("/cars", (req, res) => {
  res.send("carss");
});

module.exports = server;
