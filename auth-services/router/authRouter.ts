import express, { Router } from "express";
import {
  createUsers,
  deleteUsers,
  getUsers,
  loginUser,
  singleUsers,
  updateUser,
} from "../controller/authController";

const router: Router = express.Router();

router.route("/").get(getUsers);
router.route("/create").post(createUsers);
router.route("/single/:id").get(singleUsers);
router.route("/update/:id").patch(updateUser);
router.route("/delete/:id").delete(deleteUsers);
router.route("/login").post(loginUser);

export default router;
