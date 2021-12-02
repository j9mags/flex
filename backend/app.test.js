import request from "supertest";
import app from "./server.js";

describe("Get all users", () => {
  describe("users", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/api/users/signin").send({
        email: "jas@gmail.com",
        password: "password",
      });
      request(app).get("/api/users/");
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("Log in a user", () => {
  describe("users", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/api/users/signin").send({
        email: "jas@gmail.com",
        password: "password",
      });
      expect(response.statusCode).toBe(200);
    });
  });
});
