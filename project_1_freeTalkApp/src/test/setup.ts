import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";
import request from "supertest";

let mongo: any;
// Sets up a connection to the mongoDB memory server
beforeAll(async () => {
  process.env.JWT_KEY = "kavnkavnkjnvs";
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  mongo = await MongoMemoryServer.create();
  let mongoUri = await mongo.getUri();
  await mongoose.connect(mongoUri)
});
// Makes sure that we always have a clean database before we run our tests.
beforeEach(async () => {
    const collections = await mongoose.connection.db.collections()
    for(let collection of collections) {
        await collection.deleteMany({})
    }
})
// Stops the mongoDB memory server and closes the connection after the tests has executed.
afterAll(async() => {
    await mongo.stop()
    await mongoose.connection.close()
})