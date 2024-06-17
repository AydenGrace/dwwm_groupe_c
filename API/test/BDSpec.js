const mongoose = require("mongoose");
const assert = require("assert");
const config = require("dotenv").config();

const request = require("supertest");
const express = require("express");

const app = express();
const userRoutes = require("../routes/User/users");

app.use(express.json());
app.use("/users", userRoutes);

describe("Database", () => {
  before((done) => {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        done();
      })
      .catch((err) => done(err));
  });

  it("should be connected", () => {});

  describe("User", () => {
    it("should be login", (done) => {
      request(app)
        .post("/users/signin")
        .send({
          email: "paptc.cgm@gmail.com",
          password: "AbCd1234#@&",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function (err, res) {
          if (res.status === 400) return done("Mauvais Email et/ou Password");
          if (err) return done(res.body.error);

          assert.notEqual(res.body.message, "Mauvais Email et/ou Password");
          return done();
        });
    });

    it("should be get", (done) => {
      request(app)
        .get("/users/get")
        .send({
          email: "paptc.cgm@gmail.com",
        })
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err);

          return done();
        });
    });
  });
});
