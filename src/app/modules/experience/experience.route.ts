import express from "express";
import { ExperienceControllers } from "./experience.controller";

const router = express.Router();

router.post("/create-experience", ExperienceControllers.createExperience);
router.get("/get-all", ExperienceControllers.getAllExperiences);
router.get("/get-single/:id", ExperienceControllers.getExperienceById);

export const ExperienceRoutes = router;
