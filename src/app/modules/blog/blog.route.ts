import express from "express";
import { multerUpload } from "../../config/multer.config";
import { bodyDataParsing } from "../../middleware/bodyDataParsing";
import { BlogControllers } from "./blog.controller";
const router = express.Router();
router.post(
  "/create-blog",
  multerUpload.single("coverImage"),
  bodyDataParsing,
  BlogControllers.createBlog,
);
router.get("/get-all", BlogControllers.getAllBlogs);
router.get("/get-single/:id", BlogControllers.getBlogById);

export const BlogRoutes = router;
