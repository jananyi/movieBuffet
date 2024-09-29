const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    userId: String,
    userName: String,
    password: String,
});

const movieSchema = new mongoose.Schema({
    movieId: String,
    movieName: String,
    genre: String,
    favourite: String,
    rating: Number,
    moviePlot: String,
});

const Users = mongoose.model("Users",userSchema);
const Movies = mongoose.model("Movies",movieSchema);

module.exports = {Users, Movies};