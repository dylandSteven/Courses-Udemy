const {pbkdf2} = require('crypto')

const start = Date.now()

pbkdf2('passsword','mySecret',10000,1000,'sha256',()=>
{
    console.log('Hecho',Date.now()-start)
})

console.log('Yo seria llamdo primero',Date.now()-start)