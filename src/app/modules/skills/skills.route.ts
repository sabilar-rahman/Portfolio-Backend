import express from "express";
import { multerUpload } from "../../config/multer.config";
import { bodyDataParsing } from "../../middleware/bodyDataParsing";
import { SkillControllers } from "./skills.controller";

const router = express.Router();

router.post(
  "/create-skill",
  multerUpload.single("logo"),
  bodyDataParsing,
  SkillControllers.createSkill,
);
router.get("/get-all", SkillControllers.getAllSkill);

export const SkillRoutes = router;
