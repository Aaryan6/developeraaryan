import { Schema, models, model } from "mongoose";

const BlogSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    description:{
      type: String,
    },
    category: {
      type: String,
    },
    tags: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default models.Blog || model("Blog", BlogSchema);
