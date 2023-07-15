const connection = require("./connection");

const getAll = async () => {
  const [movies] = await connection.execute("SELECT * FROM movies");
  return movies;
};

const createMovie = async (movie) => {
  const { title } = movie;
  const dateUTC = new Date(Date.now()).toUTCString();

  const query =
    "INSERT INTO movies(title, status, created_at) VALUES (?, ?, ?)";

  const [createdMovie] = await connection.execute(query, [
    title,
    "pendente",
    dateUTC,
  ]);
  return { insertId: createdMovie.insertId };
};

const deleteMovie = async (id) => {
  const [removedMovie] = await connection.execute(
    "DELETE FROM movies WHERE id = ?",
    [id]
  );
  return removedMovie;
};

const updateMovie = async (id, movie) => {
  const { title, status } = movie;

  const query = "UPDATE movies SET title = ?, status = ? WHERE id = ?";

  const [updatedMovie] = await connection.execute(query, [title, status, id]);
  return updatedMovie;
};

module.exports = {
  getAll,
  createMovie,
  deleteMovie,
  updateMovie,
};
