import { TImageFile } from "../../interfaces/file.interface";
import { TSkill } from "./skills.interface";
import { Skill } from "./skills.model";

const createSkillIntoDb = async (payload: TSkill, image: TImageFile) => {
  if (image && image.path) {
    payload.logo = image.path;
  }

  const post = await Skill.create(payload);
  return post;
};

const getAllSkillFromDb = async () => {
  const result = await Skill.find().sort("-createdAt");
  return result;
};

export const SkillServices = {
  createSkillIntoDb,
  getAllSkillFromDb,
};
