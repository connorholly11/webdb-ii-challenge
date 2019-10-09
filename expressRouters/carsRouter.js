const express = require("express");

const db = require("../config/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on getting cars"
      });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.select("*")
    .from("cars")
    .where("id", "=", id)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on getting car ID"
      });
    });
});

router.post("/", (req, res) => {
  const newCar = req.body;

  db("cars")
    .insert(newCar)
    .then(car => {
      res.status(201).json(car);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on posting car"
      });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db("cars")
    .update(changes)
    .where("id", "=", id)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on updating car"
      });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db("cars")
    .where("id", "=", id)
    .del()
    .then(deleted => {
      res.status(204).json(deleted);
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "500 error on deleting car"
      });
    });
});

module.exports = router;
