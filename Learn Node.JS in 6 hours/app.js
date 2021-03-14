const http = require("http");

const port = 5050;

const dbConnection = true;

if (!dbConnection) {
  process.exit(1);
}

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end(`
            <html>
                <head>
                    <title>Primera app node</title>
                </head>
                <body>
                    <h1>Bienvenido a mi app node</h1>
                </body>
            </html>
            `);
      break;
    case "/admin":
      res.end("Bienvenido  a la pagina del ADMINISTRADOR");
      break;
    case "/user":
      res.end("Bienvenido a la pagina del USUARIO");
      break;
    default:
      res.end(`Pagina no encontrada`);
  }
});

server.listen(port, () => {
  console.log(`El servidor esta escuchando en el puerto ${port}`);
});
