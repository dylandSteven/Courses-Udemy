const {pbkdf2} = require('crypto')

const {createServer} = require('https')

const start = Date.now()

const hash = ()=>
{
    pbkdf2('myPass','veryScretString',10000,1000,'sha256',()=>
    {
        console.log('Hash', Date.now()-start)
    })  
}

const list=()=>
{
    createServer().listen(3000,()=>
    {
        console.log("Escuchando", Date.now()-start)
    })
}
list();

hash()
hash()
hash()
hash()
hash()
