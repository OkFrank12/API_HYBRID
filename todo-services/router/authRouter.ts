import express, { Router } from "express";
import { getUser } from "../controller/authControllerServices";

const router: Router = express.Router();

router.route("/").get(getUser);

export default router;
