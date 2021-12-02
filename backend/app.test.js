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

describe("Get all products", () => {
  describe("given the products", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/api/products/");
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("Get 1 product", () => {
  describe("given the product id", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get(
        "/api/products/61a3cbbb3032bc5e2f15131b/"
      );
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("Add a review on a product", () => {
  describe("given the products", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/api/users/signin").send({
        email: "js@gmail.com",
        password: "password",
      });
      request(app).post("/api/products/61a3/review").send({
        name: "jas",
        rating: 5,
        comment: "It is good quality",
      });
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("Edit a product", () => {
  describe("login user", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/api/users/signin").send({
        email: "js@gmail.com",
        password: "password",
      });
      request(app).put("/api/products/61a3/").send({
        name: "jas",
        price: 5,
        image: "test",
        brand: "wacker",
        category: "accessory",
        countInStock: 3,
        description: "test",
      });
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("Add a product", () => {
  describe("login user", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/api/users/signin").send({
        email: "js@gmail.com",
        password: "password",
      });
      request(app).post("/api/products/").send({
        name: "jas",
        price: 5,
        image: "test",
        brand: "wacker",
        category: "accessory",
        countInStock: 3,
        description: "test",
      });
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("Delete a product", () => {
  describe("given the products", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/api/users/signin").send({
        email: "jas@gmail.com",
        password: "password",
        isAdmin: true,
        name: "jas",
      });
      request(app).delete("/api/products/61a3/");
      expect(response.statusCode).toBe(200);
    });
  });
});
