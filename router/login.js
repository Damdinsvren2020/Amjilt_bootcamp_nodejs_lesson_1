const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Ene bol newtreh huudas");
  res.end();
});

module.exports = router;
