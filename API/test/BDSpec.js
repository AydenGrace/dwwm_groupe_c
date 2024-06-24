const mongoose = require("mongoose");
const assert = require("assert");
const config = require("dotenv").config();

const request = require("supertest");
const express = require("express");

const app = express();
const userRoutes = require("../routes/User/users");
const languageRoutes = require("../routes/User/language");
const trophyRoutes = require("../routes/User/trophy");
const interestRoutes = require("../routes/User/interest");

const tagRoutes = require("../routes/Cottage/tag");
const tagCategoryRoutes = require("../routes/Cottage/Tags_Category/tags_category");
const cottageRoutes = require("../routes/Cottage/cottage");
const reservationRoutes = require("../routes/Cottage/reservation");

app.use(express.json());
app.use("/users", userRoutes);
app.use("/language", languageRoutes);
app.use("/trophy", trophyRoutes);
app.use("/interest", interestRoutes);

app.use("/cottage", cottageRoutes);
app.use("/reservation", reservationRoutes);
app.use("/tag", tagRoutes);
app.use("/tag/category", tagCategoryRoutes);

describe("Database", () => {
  beforeEach((done) => {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        done();
      })
      .catch((err) => done(err));
  });

  it("should be connected", () => {});

  describe("User Category", () => {
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

    describe("Languages", () => {
      it("should be created", (done) => {
        request(app)
          .post("/language/add")
          .send({
            value: "Test",
            icon: "Test",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);

            return done();
          });
      });

      it("should be get", (done) => {
        request(app)
          .get("/language/getByValue")
          .send({
            value: "Test",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);

            return done();
          });
      });

      it("should be update", (done) => {
        request(app)
          .patch("/language/updateByValue")
          .send({
            reference: "Test",
            value: "Test",
            icon: "Test2",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);

            return done();
          });
      });

      it("should be deleted", (done) => {
        request(app)
          .delete("/language/deleteByValue")
          .send({
            value: "Test",
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

    describe("Interest", () => {
      it("should be created", (done) => {
        request(app)
          .post("/interest/add")
          .send({
            value: "Test",
            icon: "Test",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);

            return done();
          });
      });

      it("should be get", (done) => {
        request(app)
          .get("/interest/getByValue")
          .send({
            value: "Test",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);

            return done();
          });
      });

      it("should be update", (done) => {
        request(app)
          .patch("/interest/updateByValue")
          .send({
            reference: "Test",
            value: "Test",
            icon: "Test2",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);

            return done();
          });
      });

      it("should be deleted", (done) => {
        request(app)
          .delete("/interest/deleteByValue")
          .send({
            value: "Test",
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

    describe("Trophy", () => {
      it("should be created", (done) => {
        request(app)
          .post("/interest/add")
          .send({
            value: "Test",
            icon: "Test",
            description: "Test",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);

            return done();
          });
      });

      it("should be get", (done) => {
        request(app)
          .get("/interest/getByValue")
          .send({
            value: "Test",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);

            return done();
          });
      });

      it("should be update", (done) => {
        request(app)
          .patch("/interest/updateByValue")
          .send({
            reference: "Test",
            value: "Test",
            icon: "Test2",
            description: "Test2",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);

            return done();
          });
      });

      it("should be deleted", (done) => {
        request(app)
          .delete("/interest/deleteByValue")
          .send({
            value: "Test",
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

  describe("Cottage Category", () => {
    describe("Tag_Category", () => {
      it("should be created", (done) => {
        request(app)
          .post("/tag/category/add")
          .send({
            value: "Test",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);

            return done();
          });
      });

      it("should be get", (done) => {
        request(app)
          .get("/tag/category/getByValue")
          .send({
            value: "Test",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);

            return done();
          });
      });

      it("should be update", (done) => {
        request(app)
          .patch("/tag/category/updateByValue")
          .send({
            reference: "Test",
            value: "Test2",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);

            return done();
          });
      });

      it("should be deleted", (done) => {
        request(app)
          .delete("/tag/category/deleteByValue")
          .send({
            value: "Test2",
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

    describe("Tag", () => {
      it("should be created", (done) => {
        request(app)
          .post("/tag/add")
          .send({
            value: "Test",
            icon: "Test",
            category: "666c2d39eb5227955c0fcce3",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);

            return done();
          });
      });

      it("should be get", (done) => {
        request(app)
          .get("/tag/getByValue")
          .send({
            value: "Test",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);

            return done();
          });
      });

      it("should be update", (done) => {
        request(app)
          .patch("/tag/updateByValue")
          .send({
            reference: "Test",
            value: "Test",
            icon: "Test2",
            category: "666c2d39eb5227955c0fcce3",
          })
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);

            return done();
          });
      });

      it("should be deleted", (done) => {
        request(app)
          .delete("/tag/deleteByValue")
          .send({
            value: "Test",
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
});
