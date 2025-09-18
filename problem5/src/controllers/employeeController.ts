import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { EmployeeService } from "../services/employeeService";
import { ApiResponse } from "../interfaces/common";

const service = new EmployeeService();

export class EmployeeController {
  static create(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const employee = service.create(req.body);
    const response: ApiResponse<typeof employee> = {
      success: true,
      message: "Employee created successfully",
      data: employee,
    };
    res.json(response);
  }

  static list(req: Request, res: Response) {
    const result = service.findAll(req.query as any);
    res.json({
      success: true,
      message: "Employees fetched successfully",
      data: result,
    });
  }

  static get(req: Request, res: Response) {
    const employee = service.findById(Number(req.params.id));
    if (!employee)
      return res
        .status(404)
        .json({ success: false, message: "Employee not found" });
    res.json({
      success: true,
      message: "Employee fetched successfully",
      data: employee,
    });
  }

  static update(req: Request, res: Response) {
    const employee = service.update(Number(req.params.id), req.body);
    if (!employee)
      return res
        .status(404)
        .json({ success: false, message: "Employee not found" });
    res.json({
      success: true,
      message: "Employee updated successfully",
      data: employee,
    });
  }

  static delete(req: Request, res: Response) {
    const success = service.delete(Number(req.params.id));
    if (!success)
      return res
        .status(404)
        .json({ success: false, message: "Employee not found" });
    res.json({ success: true, message: "Employee deleted successfully" });
  }
}
