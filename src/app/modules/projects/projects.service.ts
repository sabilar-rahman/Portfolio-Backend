import { TImageFile } from "../../interfaces/file.interface";
import { TProject } from "./projects.interface";
import { Projects } from "./projects.model";

const createProjectIntoDb = async (payload: TProject, image: TImageFile) => {
  if (image && image.path) {
    payload.thumbnail = image.path;
  }

  const post = await Projects.create(payload);
  return post;
};

const getAllProjectFromDb = async () => {
  const result = await Projects.find();
  return result;
};

const getProjectByFromDB = async (projectId: string) => {
  const result = await Projects.findById(projectId);
  return result;
};

export const ProjectServices = {
  createProjectIntoDb,
  getAllProjectFromDb,
  getProjectByFromDB,
};
