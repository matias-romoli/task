import { createPool } from "mysql2/promise";

//conexión a la db sql.

export const db = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE,
});
