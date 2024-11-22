import { TExperience } from "./experience.interface";
import { Experience } from "./experience.model";

const createExperienceIntoDb = async (payload: TExperience) => {
  const user = await Experience.create(payload);

  return user;
};

const getAllExperienceFromDb = async () => {
  const result = await Experience.find().sort("-createdAt");
  return result;
};

const getExperienceByFromDB = async (projectId: string) => {
  const result = await Experience.findById(projectId);
  return result;
};

export const ExperienceServices = {
  createExperienceIntoDb,
  getAllExperienceFromDb,
  getExperienceByFromDB,
};
