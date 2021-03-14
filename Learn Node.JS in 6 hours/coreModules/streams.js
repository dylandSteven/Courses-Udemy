
//PASAR LO ESCRITO DE UN ARCHIVO A OTRO

// const{createReadStream,createWriteStream} = require('fs')

// const readStream = createReadStream('./texto.txt')

// const writeStream =  createWriteStream('./texto2.txt')

// readStream.pipe(writeStream)
        
const{createServer} = require('http')

const server = createServer()

server.listen(5000)
server.on('connection',(socket)=>
{
    console.log(socket)
})