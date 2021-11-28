import express from "express";
import assignmentController from "./assignment.controller.js";

const router = express.Router();

router.get("/:courseId", assignmentController.getAssignments);

router.post("/:courseId", assignmentController.createAssignment);

router.put("/order/:courseId", assignmentController.updateAssignmentOrder)

router.put("/:id", assignmentController.updateAssignment);

router.delete("/:id", assignmentController.deleteAssignment);

router.post("/exercise/:id", assignmentController.createExercise);

router.put("/exercise/:id", assignmentController.updateExercise);

router.delete("/exercise/:id", assignmentController.deleteExercise);

export default router;
