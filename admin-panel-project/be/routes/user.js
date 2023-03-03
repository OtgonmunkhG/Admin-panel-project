import express, { request, response } from "express";
import { createUser, getUsers } from "../services/users.js";

const user_router = express.Router();

user_router.get("/user", async (request, response) => {
  console.log(request);
  const result = await getUsers();
  console.log(result);
  response.status(200).send(result);
});

user_router.post("user/add", async (request, response) => {
  const [
    firstName,
    lastName,
    birthDate,
    email,
    phoneNumber,
    address,
    userRoleId,
  ] = request.body;
  const result = await createUser(
    firstName,
    lastName,
    birthDate,
    email,
    phoneNumber,
    address,
    userRoleId
  );
  console.log(request.body);
  response.status(200).send(result);
});

export default user_router;
