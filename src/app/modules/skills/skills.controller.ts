import httpStatus from "http-status";
import { TImageFile } from "../../interfaces/file.interface";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skills.service";

const createSkill = catchAsync(async (req, res) => {
  const post = await SkillServices.createSkillIntoDb(
    req.body,
    req.file as TImageFile,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Skill Created Successfully",
    data: post,
  });
});

const getAllSkill = catchAsync(async (req, res) => {
  const post = await SkillServices.getAllSkillFromDb();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Skills retrieved successfully",
    data: post,
  });
});

export const SkillControllers = {
  createSkill,
  getAllSkill,
};
