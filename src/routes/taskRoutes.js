const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/", taskController.createTask);
router.get("/", taskController.readTask);
router.patch("/:id/toggle", taskController.toggleTaskStatus);
router.delete("/user/:userId", taskController.deleteTasksByUser);
router.delete("/", taskController.deleteAllTasks);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
