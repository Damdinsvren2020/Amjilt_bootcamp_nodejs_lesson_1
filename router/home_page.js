const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.write("<h2>This is home page</h2>");
  // res.end()xw;
  res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});

module.exports = router;
