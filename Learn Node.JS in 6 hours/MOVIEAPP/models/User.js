const { dbCon } = require("../configuration");
const { userValidator, logSchema } = require("../validator");
const { hashSync, compareSync } = require("bcryptjs");
const { object } = require("@hapi/joi");

class User {
  constructor(userData) {
    this.userData = { ...userData };
  }

  save(cb) {
    dbCon("users", async (db) => {
      try {
        const hashedPass = hashSync(this.userData["password"], 12);
        this.userData["password"] = hashedPass;
        this.userData['verified']= false 
        await db.insertOne(this.userData);
        cb();
      } catch (err) {
        cb(err);
      }
    });
  }

  checkExistence() {
    return new Promise((resolve, reject) => {
      dbCon("users", async (db) => {
        try {
          const user = await db.findOne({
            '$or': [
              { username: this.userData["username"] },
              { email: this.userData["email"] },
            ],
          });

          if (!user) {
            resolve({
              check: false,
            });
          } else if (this.userData["username"] === user.username) {
            resolve({
              check: true,
              message: "This username is already in use",
            });
          } else if (this.userData["email"] === user.email) {
            resolve({
              check: true,
              message: "Este email ya esta en uso",
            });
          }
        } catch (err) {
          reject(err);
        }
      });
    });
  }

  static validate(userData) {
    return userValidator.validate(userData);
  }

  static login(userData) {
    return new Promise((resolve, reject) => {
      //VALIDATION
      const validation = logSchema.validate(userData);

      if (validation.error) {
        const error = new Error(validation.error.message);
        error.statusCode = 400;
        return resolve(error);
      }

      dbCon("users", async (db) => {
        try {
          //find user
          const user = await db.findOne(
            {
              '$or': [
                { username: userData["username"] },
                { email: userData["username"] },
              ],
            },
            { projection: { username: 1, password: 1 } }
          );

          if (!user || !compareSync(userData["password"], user.password)) {
            const error = new Error(
              "Porfavor ingrese un nombre de usuario y contraseña valido"
            );
            error.statusCode = 404;
            return resolve(error);
          }

          resolve(user);
        } catch (err) {
          reject(err);
        }
      });
    });
  }
}

module.exports = User;
// User.login({
//   username: "anasSaber3",
//   password: "Anaass$45",
// }).then((res) => {
//   console.log(res);
// });

// const user=  new User({
//   username: "anas",
//   email: "anasss@example.com",
//   password: "anas-1234",
//   first_name: "Anas",
//   last_name: "Saber",
// });

// user.checkExistence()
// .then(check=>
//   {
//     console.log(check)
//   })
//   .catch(err=>console.log(err))

// const validation = User.validate(userData);
