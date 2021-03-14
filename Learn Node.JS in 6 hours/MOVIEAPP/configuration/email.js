const { sgMail } = require("@sendgrid/mail");

module.exports = (email,username,token) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    from: process.env.FROM,
    to: email,
    subject: "Bienvenido a nuestra comunidad de aplicacion de pelicula",
    html: `       
         <p>Hola ${username}!<p>
         <p>Estamos felices que te hayas unido<p>
         <p>Verifica tu cuenta<p>
         <button><a href="http://localhost:${process.env.PORT}/auth/verify?token=${token}">Click aqui</a></button>
         `,
  };

  sgMail.send(msg)
};
