const express = require("express");

const server = require("./server");

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
