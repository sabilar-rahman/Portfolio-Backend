import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ExperienceServices } from "./experience.service";

const createExperience = catchAsync(async (req, res) => {
  const user = await ExperienceServices.createExperienceIntoDb(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Experience Created Successfully",
    data: user,
  });
});

const getAllExperiences = catchAsync(async (req, res) => {
  const post = await ExperienceServices.getAllExperienceFromDb();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Experience retrieved successfully",
    data: post,
  });
});

const getExperienceById = catchAsync(async (req, res) => {
  const projectId = req.params.id;
  const post = await ExperienceServices.getExperienceByFromDB(projectId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Experience retrieved successfully",
    data: post,
  });
});

export const ExperienceControllers = {
  createExperience,
  getAllExperiences,
  getExperienceById,
};
