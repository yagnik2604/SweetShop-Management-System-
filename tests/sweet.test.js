require("dotenv").config();
const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const Sweet = require("../models/Sweet-model");


beforeAll(async () => {
  await mongoose.connect(process.env.TEST_MONGODB_URI);
});


beforeEach(async () => {
  await Sweet.deleteMany(); // clean test DB
});

describe("Sweet Shop API", () => {


  it("should add a sweet", async () => {
    const res = await request(app).post("/api/sweets/addSweet").send({
      id: "1001",
      name: "Kaju Katli",
      category: "Nut-Based",
      price: 50,
      quantity: 20,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Kaju Katli");
  });

  

});

afterAll(async () => {
  await mongoose.connection.close();
});