require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 5000;
const Routes = require("./routes");
const { serverHttp, app } = require("./socket/socket");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(Routes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`Connected to db & listening on port : ${port}`);
  })
  .catch((err) => console.log(err));

serverHttp.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
