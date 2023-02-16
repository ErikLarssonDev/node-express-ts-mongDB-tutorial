import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";
import request from "supertest";

declare global {
    var signin: () => Promise<string[]>
}

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

global.signin = async () => {
    const res = await request(app).post('/signup').send({
        email: "email@email.com",
        password: "123456"
    }).expect(200)
    const cookie = res.get('Set-Cookie')
    return cookie
}
