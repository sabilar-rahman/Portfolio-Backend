import { model, Schema } from "mongoose";
import { TProject } from "./projects.interface";

const projectSchema = new Schema<TProject>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },
    longDescription: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },
    githubLink: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Projects = model<TProject>("Projects", projectSchema);
