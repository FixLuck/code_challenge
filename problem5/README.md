# Express.js CRUD API with TypeScript

This project is a simple **RESTful API** built with **Express.js** and **TypeScript** that uses **SQLite3** as the database.  
It demonstrates how to implement a clean architecture with services, controllers, and routing for managing employees.

---

## 🚀 Features

- Create, Read, Update, Delete (CRUD) operations for employees
- Validation using `express-validator`
- SQLite3 database with `better-sqlite3`
- Organized project structure with service and controller layers
- TypeScript for type safety
- Environment configuration with `dotenv`

---

## 🛠️ Tech Stack

- [Express.js]
- [TypeScript]
- [SQLite3] with [better-sqlite3]
- [express-validator]
- [dotenv]
- [ts-node-dev]

---

## 📂 Project Structure

```bash
problem5/
├── src/
│ ├── controllers/ # Handle HTTP requests
│ ├── services/ # Business logic
│ ├── models/ # Data models / interfaces
│ ├── routes/ # API routes
│ ├── database/ # SQLite database setup
│ └── index.ts # Entry point
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/problem5.git
   cd problem5

   ```

2. **Install dependencies**

   ```bash
   npm install

   ```

3. **Setup environment variables**
   Create a .env file in the root:
   PORT=3000

4. **Run the server in development**

   ```bash
   npm run dev

   ```

5. **Build for production**

   ```bash
   npm run build
   npm start

   ```

## API Endpoints

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| GET    | `/employees`     | Get all employees     |
| GET    | `/employees/:id` | Get employee by ID    |
| POST   | `/employees`     | Create new employee   |
| PUT    | `/employees/:id` | Update employee by ID |
| DELETE | `/employees/:id` | Delete employee by ID |
