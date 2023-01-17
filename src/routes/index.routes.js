import { Router } from "express";
import { renderTask, renderTaskEdit, createTask, editTask, deleteTask, taskToogleDone } from "../controllers/taskControllers";

const router = Router();

router.get("/", renderTask);

router.post("/task/add", createTask);

router.get("/edit/:id", renderTaskEdit);

router.post("/edit/:id", editTask);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", taskToogleDone);

module.exports = router;
