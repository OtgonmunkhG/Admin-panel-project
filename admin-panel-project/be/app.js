console.log("hello backend");
import express, { response, Router } from "express";
import user_router from "./routes/user.js";
import cors from "cors";

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(user_router);
app.use(cors());

app.get("/", (request, response) => {
  response.send(
    "<h1 style='text-align:center; background-color:orange'>admin panel</h1>"
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
