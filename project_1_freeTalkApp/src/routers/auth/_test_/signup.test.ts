import request from "supertest";
import { app } from "../../../app";

it("returns 201 on successfull signup", async () => {
  return request(app)
    .post("/signup")
    .send({
      email: "test@test.com",
      password: "test1234",
    })
    .expect(200);
});

it("sets the cookie after successfull signup", async () => {
  const res = await request(app)
    .post("/signup")
    .send({
      email: "test@test.com",
      password: "test1234",
    })
    .expect(200);
  expect(res.get("Set-Cookie")).toBeDefined();
});
