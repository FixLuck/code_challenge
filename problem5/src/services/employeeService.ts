import db from "../database";
import {
  Employee,
  EmployeeFilters,
  PaginatedResponse,
} from "../interfaces/common";
import { CreateEmployeeDto, UpdateEmployeeDto } from "../dto/employeeDto";

export class EmployeeService {
  create(dto: CreateEmployeeDto): Employee {
    const stmt =
      db.prepare(`INSERT INTO employees (firstName, lastName, email, phoneNumber, createAt, updateAt)
VALUES (?, ?, ?, ?, datetime('now'), datetime('now'))`);
    const result = stmt.run(
      dto.firstName,
      dto.lastName,
      dto.email,
      dto.phoneNumber
    );

    return this.findById(result.lastInsertRowid as number)!;
  }

  findAll(filters: EmployeeFilters): PaginatedResponse<Employee> {
    let query = "SELECT * FROM employees WHERE 1=1";
    const params: any[] = [];

    if (filters.search) {
      query += " AND (firstName LIKE ? OR lastName LIKE ? OR email LIKE ?)";
      params.push(
        `%${filters.search}%`,
        `%${filters.search}%`,
        `%${filters.search}%`
      );
    }

    const page = filters.page ?? 1;
    const limit = filters.limit ?? 10;
    const offset = (page - 1) * limit;

    query += " LIMIT ? OFFSET ?";
    params.push(limit, offset);

    const data = db.prepare(query).all(...params) as Employee[];
    const total = (db.prepare("SELECT COUNT(*) as count FROM employees").get() as { count: number })
      .count as number;

    return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  findById(id: number): Employee | undefined {
    return db
      .prepare("SELECT * FROM employees WHERE id = ?")
      .get(id) as Employee;
  }

  update(id: number, dto: UpdateEmployeeDto): Employee | undefined {
    const fields = Object.keys(dto)
      .map((key) => `${key} = ?`)
      .join(", ");
    const values = Object.values(dto);
    if (fields.length) {
      db.prepare(
        `UPDATE employees SET ${fields}, updateAt = datetime('now') WHERE id = ?`
      ).run(...values, id);
    }
    return this.findById(id);
  }

  delete(id: number): boolean {
    const result = db.prepare("DELETE FROM employees WHERE id = ?").run(id);
    return result.changes > 0;
  }
}
