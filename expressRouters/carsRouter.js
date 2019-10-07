const express = require("express");

const db = require("../config/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("in the cars router");
});

module.exports = router;
