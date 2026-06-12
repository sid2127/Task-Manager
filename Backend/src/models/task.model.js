import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: ""
    },

    dueDate: {
      type: Date,
      default: null,
    },

    completed: {
      type: Boolean,
      default: false,
    },
    order: {
    type: Number,
    default: 0
}
  },
  {
    timestamps: true,
  }
);

export const Task = mongoose.model("Task", taskSchema);