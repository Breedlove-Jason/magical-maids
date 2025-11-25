import { Router } from "express";
import { getTeam } from "../controllers/team.controller.js";
import asyncHandler from "../utils/asyncHandler.js";
const router = Router();
router.get("/", asyncHandler(getTeam));
export default router;
