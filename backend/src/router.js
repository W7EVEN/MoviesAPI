const express = require("express");

const router = express.Router();

const moviesController = require("./controllers/moviesController");
const moviesMiddleware = require("./middlewares/moviesMiddleware");

router.get("/movies", moviesController.getAll);
// router.post(
//   "/movies",
//   moviesMiddleware.validateFieldTitle,
//   moviesController.createTask
// );
// router.delete("/movies/:id", moviesController.deleteTask);
// router.put(
//   "/movies/:id",
//   moviesMiddleware.validateFieldTitle,
//   moviesMiddleware.validateFieldStatus,
//   moviesController.updateTask
// );

module.exports = router;
