const users = require("./users.json");
const movies = require("./movies.json");
const reviews = require("./reviews.json");

const getMovie = (id, cb) => {
  setTimeout(() => {
    const movie = movies.find((movie) => movie.id === id);
    cb(movie);
  }, 1000);
};

const getUser = (name, cb) => {
  setTimeout(() => {
    const user = users.find((user) => user.name === name);
    cb(user);
  }, 1000);
};

const getReview = (id,cb) => {
  setTimeout(() => {
    const review = reviews.find((review) => review.id === id);
    cb(review);
  }, 1000);
};



// getMovie(id=1000, (movie) => {
//   if (movie) {
//     console.log(movie);
//   } else {
//     console.log(`La pelicula con id: ${id} no existe`);
//   }
// });



// getUser(name="hunterjt13",(user)=>
// {
//     if(user)
//     {
//         console.log(user)
//     }else
//     {
//         console.log(`El usuario ${name} no existe`)
//     }
// })


getReview(id=1,(review)=>
{
    if(review)
    {
        console.log(review)
    }

    else{
        console.log(`La review con id ${id} no existe`)
    }
})