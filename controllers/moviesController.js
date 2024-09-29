const {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieByGenre,
} = require("../services/movies");

const getAllMoviesController = async (req, res, next) => {};

const getMovieByIdController = async (req, res, next) => {};
const getMovieByGenreController = async (req, res, next) => {};

const createMovieController = async (req, res, next) => {
  const movie = req.body;
  const movieCreated = await createMovie(movie);
  res.status(201).send({data: "movie created sucessfully"});
};
const updateMovieController = async (req, res, next) => {};
const deleteMovieController = async (req, res, next) => {};

module.exports = {
  getAllMoviesController,
  getMovieByIdController,
  getMovieByGenreController,
  createMovieController,
  updateMovieController,
  deleteMovieController,
};
