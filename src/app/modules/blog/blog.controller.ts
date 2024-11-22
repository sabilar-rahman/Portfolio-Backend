import httpStatus from "http-status";
import { TImageFile } from "../../interfaces/file.interface";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
  const post = await BlogServices.createBlogIntoDb(
    req.body,
    req.file as TImageFile,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog Created Successfully",
    data: post,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const post = await BlogServices.getAllBlogsFromDb();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blogs retrieved successfully",
    data: post,
  });
});
const getBlogById = catchAsync(async (req, res) => {
  const blogId = req.params.id;
  const post = await BlogServices.getBlogByFromDB(blogId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Blog retrieved successfully",
    data: post,
  });
});

export const BlogControllers = {
  createBlog,
  getAllBlogs,
  getBlogById,
};
