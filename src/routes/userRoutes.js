const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.readUser);
router.put("/:id", userController.updateUser);
router.delete("/", userController.deleteAllUsers);
router.delete("/:id", userController.deleteUser);
router.get("/ranking", userController.getRanking);
router.patch("/reset-points", userController.resetAllPoints);

module.exports = router;
