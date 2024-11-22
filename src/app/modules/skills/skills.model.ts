import { model, Schema } from "mongoose";
import { TSkill } from "./skills.interface";

const SkillSchema = new Schema<TSkill>({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  category: { type: String, required: true },
});

export const Skill = model<TSkill>("Skill", SkillSchema);
