const {Movies} = require("../models/stepDbSchema");
const getAllMovies = async () => {
  const movies = await Movies.find();
  console.log("getAllMovies");
  return movies;
};

const getMovieById = async (movieId) => {
  const movies = await Movies.findOne({movieId: movieId});
  console.log("getMovieById");
  return movies;
};

const getMovieByGenre = async (genre) => {
  const movies = await Movies.find({genre: genre});
  console.log("getMovieByGenre");
  return movies;
};

const createMovie = async (movieParam) => {
  const {movieId, movieName, genre, favourite, rating, moviePlot} = movieParam;
  const movie = new Movies({
    movieId,
    movieName,
    genre,
    favourite,
    rating,
    moviePlot
  });
  console.log("createMovie");
  const newMovie = await movie.save();
  return newMovie;
};

const updateMovie = async (movieId, data) => {
  // logic to get movie by id
  console.log("updateMovie");
  const movieUpdated = await Movies.updateOne ({movieId: movieId}, data);
  return movieUpdated;
};

const deleteMovie = async (movieId) => {
  // logic to get movie by id
  console.log("deleteMovie");
  const deletedMovie = await Movies.deleteOne ({movieId: movieId});
  return deletedMovie;
};

module.exports = {
  getAllMovies,
  getMovieById,
  getMovieByGenre,
  createMovie,
  updateMovie,
  deleteMovie,
};
