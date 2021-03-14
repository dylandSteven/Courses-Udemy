const { User } = require("../../models");
const createError = require("http-errors");
const {email} = require('../../configuration')
const jwt = require('jsonwebtoken')
const {readFileSync} = require('fs')

const secret = readFileSync('./private.key')


const postSignup = (req, res, next) => {
  //VALIDATION
  const validation = User.validate(req.body);

  if (validation.error) {
    const error = new Error(validation.error.message);
    error.statusCode = 400;
    return next(error);
  }

  //CHECKED EXIST
  const user = new User(req.body);
  user
    .checkExistence()
    .then((result) => {
      if (result.check) {
        const error = new Error(result.message);
        error.statusCode = 409;
        return next(error);
      }

      user.save((err) => {
        if (err) {
          return next(createError(500));
        }

        const token = jwt.sign({username:user.userData['username']},secret,{expiresIn:'24h'})
        email(process.env.TO,user.userData['username'],token)
       
       
        res.status(201).json({
          message: "El usuario ha sido creado con éxito",
        });
      });
    })
    .catch((err) => next(createError(500)));
};

module.exports = { postSignup };
