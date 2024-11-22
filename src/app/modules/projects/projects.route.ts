import express from "express";
import { multerUpload } from "../../config/multer.config";
import { bodyDataParsing } from "../../middleware/bodyDataParsing";
import { ProjectControllers } from "./projects.controller";

const router = express.Router();

router.post(
  "/create-project",
  multerUpload.single("thumbnail"),
  bodyDataParsing,
  ProjectControllers.createProject,
);
router.get("/get-all", ProjectControllers.getAllProjects);
router.get("/get-single/:id", ProjectControllers.getProjectById);

export const ProjectsRoutes = router;
