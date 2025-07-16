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

 // test case for add item
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


  //test case for get all items 
  it("shoud return all sweets", async () => {
    const sweets = [
      {
        id: "1001",
        name: "Kaju Katli",
        category: "Nut-Based",
        price: 50,
        quantity: 10,
      },
      {
        id: "1002",
        name: "Rasgulla",
        category: "Milk",
        price: 10,
        quantity: 15,
      },
      {
        id: "1003",
        name: "Ladoo",
        category: "Besan",
        price: 20,
        quantity: 8,
      },
    ];

    await Sweet.insertMany(sweets);

    const res = await request(app).get("/api/sweets");

    console.log("STATUS:", res.statusCode);
    console.log("BODY:", res.body);


    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.message)).toBe(true);
    expect(res.body.message[0].name).toBe("Kaju Katli");
    
  });



});

afterAll(async () => {
  await mongoose.connection.close();
});
