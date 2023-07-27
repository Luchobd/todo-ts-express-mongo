import { Router } from "express";
import {
  loginController,
  registerController,
  // forgotPasswordController,
  sendPassChangeEmailController,
  forgotPasswordController,
} from "../controllers/auth";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
// router.post("/forgot-password", forgotPasswordController);

router.post("/forgot-password", sendPassChangeEmailController);
router.post("/change-password", forgotPasswordController);

export { router };
