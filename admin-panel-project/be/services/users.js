import { pool } from "../config/mysql-config.js";

export async function getUsers() {
  const [rows] = await pool.query(`select * from user`);
  return rows;
}

export async function createUser(firstName, lastName, email, userRoleId) {
  const query = await pool.query(
    `insert into user (first_name, last_name, email, user_role_id) values(?, ?,  ?, ?)`
  );
  const [rows] = await pool.query(query, [
    firstName,
    lastName,
    email,
    userRoleId,
  ]);
  return rows;
}
