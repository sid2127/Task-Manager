import { Task } from "../models/task.model.js";
import { asynchandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createTask = asynchandler(async (req, res) => {
    const { title, description, dueDate } = req.body;

    if (!title?.trim()) {
        throw new ApiError(400, "Title is required");
    }

    const task = await Task.create({
        title,
        description,
        dueDate
    });

    return res.status(201).json(
        new ApiResponse(201, task, "Task created successfully")
    );
});

const getAllTasks = asynchandler(async (req, res) => {

    const tasks = await Task.find()
        .sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(
            200,
            tasks,
            "Tasks fetched successfully"
        )
    );
});

const getTaskById = asynchandler(async (req, res) => {

    const { taskId } = req.params;

    if (!taskId) {
        throw new ApiError(400, "Task Id is required");
    }

    const task = await Task.findById(taskId);

    if (!task) {
        throw new ApiError(404, "Task not found");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            task,
            "Task fetched successfully"
        )
    );
});

const updateTask = asynchandler(async (req, res) => {

    const { taskId } = req.params;
    const { title, description, dueDate } = req.body;

    if (!taskId) {
        throw new ApiError(400, "Task Id is required");
    }

    const task = await Task.findByIdAndUpdate(
        taskId,
        {
            $set: {
                ...(title && { title }),
                ...(description && { description }),
                ...(dueDate && { dueDate })
            }
        },
        {
            new: true
        }
    );

    if (!task) {
        throw new ApiError(404, "Task not found");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            task,
            "Task updated successfully"
        )
    );
});

const toggleTaskStatus = asynchandler(async (req, res) => {

    const { taskId } = req.params;

    if (!taskId) {
        throw new ApiError(400, "Task Id is required");
    }

    const task = await Task.findById(taskId);

    if (!task) {
        throw new ApiError(404, "Task not found");
    }

    task.completed = !task.completed;

    await task.save();

    return res.status(200).json(
        new ApiResponse(
            200,
            task,
            "Task status updated successfully"
        )
    );
});

const deleteTask = asynchandler(async (req, res) => {

    const { taskId } = req.params;

    if (!taskId) {
        throw new ApiError(400, "Task Id is required");
    }

    const task = await Task.findByIdAndDelete(taskId);

    if (!task) {
        throw new ApiError(404, "Task not found");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            task,
            "Task deleted successfully"
        )
    );
});

const searchTasks = asynchandler(async (req, res) => {

    const { query } = req.query;

    if (!query) {
        throw new ApiError(400, "Search query is required");
    }

    const tasks = await Task.find({
        title: {
            $regex: query,
            $options: "i"
        }
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            tasks,
            "Tasks fetched successfully"
        )
    );
});

const getCompletedTasks = asynchandler(async (req, res) => {

    const tasks = await Task.find({
        completed: true
    }).sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(
            200,
            tasks,
            "Completed tasks fetched successfully"
        )
    );
});

const getPendingTasks = asynchandler(async (req, res) => {

    const tasks = await Task.find({
        completed: false
    }).sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(
            200,
            tasks,
            "Pending tasks fetched successfully"
        )
    );
});

const getTaskStats = asynchandler(async (req, res) => {

    const total = await Task.countDocuments();

    const completed = await Task.countDocuments({
        completed: true
    });

    const active = await Task.countDocuments({
        completed: false
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                total,
                completed,
                active
            },
            "Task statistics fetched successfully"
        )
    );
});

const reorderTasks = async (req, res) => {

  const { tasks } = req.body;

  await Promise.all(
    tasks.map((task) =>
      Task.findByIdAndUpdate(
        task.id,
        {
          order: task.order
        }
      )
    )
  );

  return res.status(200).json({
    success: true
  });
};

export {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    toggleTaskStatus,
    deleteTask,
    searchTasks,
    getCompletedTasks,
    getPendingTasks,
    getTaskStats,
    reorderTasks
};
