const { postLogin } = require("./auth/login");
const { postSignup } = require("./auth/signup");
const { getVerify } = require("./auth/verification");
const { getMovies, getOneMovie } = require("./movieC");
const { postComment, putComment, deleteComment,getComments } = require("./commentC");

module.exports = {
  getMovies,
  getOneMovie,
  postSignup,
  postLogin,
  getVerify,
  postComment,
  deleteComment,
  putComment,
  getComments
};
