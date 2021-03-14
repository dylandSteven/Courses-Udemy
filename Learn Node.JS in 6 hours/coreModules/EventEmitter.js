// const {EventEmitter}= require('events')

// const myEmitter = new EventEmitter()

// myEmitter.on('greeting', (name)=>
// {
//     console.log(`Hola! ${name}`)
// })


// myEmitter.on('greeting', ()=>
// {
//     console.log(`Hola! otra vez`)
// })



// let nombre ="DYLAND"
// myEmitter.emit('greeting',nombre)


const http = require('http')

const server = http.createServer()

server.on('listening',()=>
{
    console.log("El servidor esta escuchando ahora")
})

server.on('listening',()=>
{
    console.log("El servidor esta escuchando ahora de nuevo")
})


server.listen(3000)
