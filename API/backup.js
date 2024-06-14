const mongoose = require("mongoose");
const config = require("dotenv").config();
const cron = require("cron");
const { default: BackupToolkit } = require("mongodb-backup-toolkit");

const Script = async () => {
  await Backup();
  // process.exit(0);
};

const Backup = async () => {
  const date = new Date(Date.now());
  await BackupToolkit.backup(
    process.env.MONGO_URI,
    `./dumbs/dumb_${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}_${date.getHours()}H${date.getMinutes()}/`
  );
};

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    Script();
    cron.schedule("* 30 * * *", () => {
      console.log("Starting Database Backup !");
      Script();
    });
  })
  .catch((e) => console.error(e));
