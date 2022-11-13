const path = require("path");
const express = require("express");
const app = express();
const logger = require("./config/logger");
const homeRouter = require("./router/home_page");
const loginRouter = require("./router/login");
const bannerRouter = require("./router/banner");

// ene bol node js iin global object

app.use("/newtab", (req, res) => {
  res.write("<h2>New Tab</h2>");
  res.end();
});

app.use(homeRouter);
app.use(loginRouter);
app.use("/banners", bannerRouter);
// app.listen(3000);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.log("info", `server port deer amjilttai aslaa : ${port}`);
});
