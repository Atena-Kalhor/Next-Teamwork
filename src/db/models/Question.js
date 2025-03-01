import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    answer: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Question ||
  mongoose.model("Question", questionSchema);
