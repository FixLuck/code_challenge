import Database from "better-sqlite3";

const db = new Database("employees.db");

db.prepare(
  `CREATE TABLE IF NOT EXISTS employees (
id INTEGER PRIMARY KEY AUTOINCREMENT,
firstName TEXT NOT NULL,
lastName TEXT NOT NULL,
email TEXT NOT NULL UNIQUE,
phoneNumber TEXT NOT NULL,
createAt TEXT NOT NULL,
updateAt TEXT NOT NULL
)`
).run();

export default db;
