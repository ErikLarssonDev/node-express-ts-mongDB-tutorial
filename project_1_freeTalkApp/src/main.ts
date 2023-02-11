import express from "express";
import { json, urlencoded } from "body-parser";

const app = express();

app.use(urlencoded({
    extended: true
}
))
app.use(json())

app.listen(8080, () => console.log("Server is up and running on port 8080"));
