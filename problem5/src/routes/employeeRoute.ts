import { Router } from "express";
import { body } from "express-validator";
import { EmployeeController } from "../controllers/employeeController";
import { param } from "express-validator";

const router = Router();

router.post(
  "/",
  [
    body("firstName").notEmpty(),
    body("lastName").notEmpty(),
    body("email").isEmail(),
    body("phoneNumber").notEmpty(),
  ],
  EmployeeController.create
);

router.put(
  "/:id",
  [
    param("id").isInt(),
    body("firstName").notEmpty(),
    body("lastName").notEmpty(),
    body("email").isEmail(),
    body("phoneNumber").notEmpty(),
  ],
  EmployeeController.update
);

router.get("/", EmployeeController.list);
router.get("/:id", EmployeeController.get);
router.put("/:id", EmployeeController.update);
router.delete("/:id", EmployeeController.delete);

export default router;
