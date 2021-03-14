const authRouter = require("./auth");
const movieRouter = require("./movie");
const commentRouter = require("./comments")
module.exports = (app) => {
  app.use("/auth", authRouter);
  app.use(movieRouter)
  app.use(commentRouter)
  //   app.get(`/`, (req, res, next) => {
  //     res.send("Bienevenido a mi pagina");
  //   });

  //   app.get("/user/:id/:postId", (req, res, next) => {
  //     const host = req.get("Host");
  //     console.log(host);
  //     res.send("Bienvenido a mi pagina de usuario despues de NODEMON");
  //   });
};
