import chai from "chai";
import chaiHttp from "chai-http";
import server from "../src/app/index.js";
import dbConnection from "../src/db/index.js";
import httpStatus from "http-status";

const dropAllUsers = (done) => {
  dbConnection.then((db) => {
    db.connection.collections.users.drop(() => {
      done();
    });
  });
};

chai.use(chaiHttp);
let should = chai.should();

describe("User Routes", () => {
  beforeEach((done) => dropAllUsers(done));
  it("Create New User", (done) => {
    chai
      .request(server)
      .post("/api/v1/user/signup")
      .set("Content-Type", "application/json")
      .send({
        firstName: "TestF",
        lastName: "TestL",
        email: "test@gmail.com",
        phone: "9868226467",
        userName: "sda23",
        password: "XXXX123456",
      })
      .end((err, res) => {
        if (err) {
          done();
        }
        res.should.have.status(httpStatus.CREATED);
        done();
      });
  });
  afterEach((done) => dropAllUsers(done));
});
