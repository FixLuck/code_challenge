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

const rowCount = (
  db.prepare("SELECT COUNT(*) as count FROM employees").get() as {
    count: number;
  }
).count as number;

if (rowCount === 0) {
  const now = new Date().toISOString();
  const insert =
    db.prepare(`INSERT INTO employees (firstName, lastName, email, phoneNumber, createAt, updateAt)
    VALUES (@firstName, @lastName, @email, @phoneNumber, @createAt, @updateAt)`);

  const employees = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "123456789",
      createAt: now,
      updateAt: now,
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phoneNumber: "987654321",
      createAt: now,
      updateAt: now,
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      phoneNumber: "555123456",
      createAt: now,
      updateAt: now,
    },
  ];

  const insertMany = db.transaction((emps) => {
    for (const emp of emps) insert.run(emp);
  });

  insertMany(employees);

  console.log("Seeded database with 3 employees");
}

export default db;
