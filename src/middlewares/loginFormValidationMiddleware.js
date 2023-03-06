const { check } = require("express-validator");


const loginFormValidationMiddleware = [
  check("email")
    .trim().bail()
    .notEmpty().withMessage("campo obrigatório").bail()
    .isEmail().withMessage("Digite um formato de email correto")
    ,

  check("password")
    .trim().bail()
    .notEmpty().withMessage("campo obrigatório").bail()
    .isLength( {min:6} ).withMessage("A senha precisa ter no mínimo 6 caracteres")
    

]

module.exports = loginFormValidationMiddleware;