import { Router } from "express";

import {
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
} from "../controllers/task.controller.js";

const router = Router();

router.route("/createTask")
    .post(createTask);

router.route("/getAllTasks")
    .get(getAllTasks);

router.route("/getTaskById/:taskId")
    .get(getTaskById);

router.route("/updateTask/:taskId")
    .put(updateTask);

router.route("/deleteTask/:taskId")
    .delete(deleteTask);

router.route("/toggleTaskStatus/:taskId")
    .patch(toggleTaskStatus);


router.route("/searchTasks")
    .get(searchTasks);

router.route("/getCompletedTasks")
    .get(getCompletedTasks);

router.route("/getPendingTasks")
    .get(getPendingTasks);

router.route("/getTaskStats")
    .get(getTaskStats);

router.route("/reorderTasks")
    .patch(reorderTasks);

export default router;