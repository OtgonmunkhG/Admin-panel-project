console.log("hello my first backend");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { response } = require("express");

const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/users", (request, response) => {
  console.log(request.body);
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file error",
        data: [],
      });
    }
    const objectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: objectData,
    });
  });
});
app.get("/", (request, response) => {
  response.send("<h1>Hello my admin panel</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
