import express, { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  singleTask,
  updateTask,
} from "../controller/todoController";

const router: Router = express.Router();

router.route("/").get(getTask);
router.route("/create").post(createTask);
router.route("/single/:id").get(singleTask);
router.route("/update/:id").patch(updateTask);
router.route("/delete/:id").delete(deleteTask);

export default router;
