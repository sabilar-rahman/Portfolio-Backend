import { model, Schema } from "mongoose";
import { TExperience } from "./experience.interface";

const ExperienceSchema: Schema<TExperience> = new Schema({
  company: { type: String, required: true },
  designation: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  description: { type: String, required: true },
});

export const Experience = model<TExperience>("Experience", ExperienceSchema);
