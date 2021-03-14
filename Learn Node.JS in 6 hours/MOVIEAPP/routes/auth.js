const { Router } = require("express");
const { postLogin, postSignup,getVerify } = require("../controllers");                  
const router = Router();

router.post("/login",postLogin)
       .post("/signup", postSignup)
       .get('/verify',getVerify)
// .get ('/login',getLogin)
// .get ('/signup')

module.exports = router;
