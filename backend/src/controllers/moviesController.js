const moviesModel = require("../models/movieModel");

const getAll = async (_request, response) => {
  const movies = await moviesModel.getAll();
  return response.status(200).json(movies);
};

const createMovie = async (request, response) => {
  const createdMovie = await moviesModel.createMovie(request.body);
  return response.status(201).json(createdMovie);
};

const deleteMovie = async (request, response) => {
  const { id } = request.params;

  await moviesModel.deleteMovie(id);
  return response.status(204).json();
};

const updateMovie = async (request, response) => {
  const { id } = request.params;

  await moviesModel.updateMovie(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  createMovie,
  deleteMovie,
  updateMovie,
};
