const { Router } = require("express");
const { getToDos, saveToDo, updateToDo, deleteToDo } = require("../controller/ToDoController");

const router = Router();

router.get("/get", getToDos);
router.post("/save", saveToDo);
router.put("/update/:id", updateToDo); // Fixed the syntax here
router.delete("/delete/:id", deleteToDo); // Fixed the syntax here

module.exports = router;
