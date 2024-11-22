import httpStatus from "http-status";
import { TImageFile } from "../../interfaces/file.interface";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./projects.service";

const createProject = catchAsync(async (req, res) => {
  const post = await ProjectServices.createProjectIntoDb(
    req.body,
    req.file as TImageFile,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project Created Successfully",
    data: post,
  });
});

const getAllProjects = catchAsync(async (req, res) => {
  const post = await ProjectServices.getAllProjectFromDb();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project retrieved successfully",
    data: post,
  });
});

const getProjectById = catchAsync(async (req, res) => {
  const projectId = req.params.id;
  const post = await ProjectServices.getProjectByFromDB(projectId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Project retrieved successfully",
    data: post,
  });
});

export const ProjectControllers = {
  createProject,
  getAllProjects,
  getProjectById,
};
