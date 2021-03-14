const { opendir, stat, open, readFile, writeFile } = require("fs");
const { promisify } = require("util");

const oDir = promisify(opendir);
const getStat = promisify(stat);
const read = promisify(readFile);

//SABER LA DIRECCION 
// oDir('./')
//     .then(async (dir)=>
//     {
//         for await(let dirent of dir)
//         {
//             console.log(dirent.name)
//         }
//     })
//     .catch()



//LEER ARCHIVOS
// getStat("EventEmitter.js")
//   .then((stat) => {
//       console.log(stat)
//   })

//   .catch(err =>console.log(err));

// open("./EventEmitter.js", (err, fd) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
  
//   read(fd,"utf8")
//     .then((data) => {
//         console.log(data)
//     })
//     .catch(err=>console.log(err))
// });


//CREAR ARCHIVOS

writeFile('./texto.txt',"Hola mi nombre es Dyland Saldaña",(err)=>
{
    console.log(err)
})