require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 4000;
const Routes = require("./routes");

const app = express();
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
    app.listen(port, () => {
      console.log(`Connected to db & listening on port : ${port}`);
    });
  })
  .catch((err) => console.log(err));
