const { check } = require("express-validator");


const loginFormValidationMiddleware = [
  check("email")
    .notEmpty().withMessage("campo obrigatório").bail()
    .isEmail().withMessage("Digite um formato de email correto").bail()
    .trim(),

  check("password")
    .notEmpty().withMessage("campo obrigatório").bail()
    .isLength( {min:6} ).withMessage("A senha precisa ter no mínimo 6 caracteres").bail()
    .trim()

]

module.exports = loginFormValidationMiddleware;