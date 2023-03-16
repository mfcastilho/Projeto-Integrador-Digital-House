const { check } = require("express-validator");

const comparingRegisterPasswords = require("../public/js/comparingRegisterPasswords")


const loginFormValidationMiddleware = [
  check("email")
      .trim().bail()
      .isEmpty().withMessage("campo obrigatório").bail()
      .isEmail().withMessage("insira um formato de email válido"),

  check("password") 
      .trim().bail()
      .isEmpty().withMessage("campo obrigatório").bail()
      .isNumeric().isLength({min:6}).withMessage("a senha deve contar no mínimo 6 caracteres") 

]

module.exports = loginFormValidationMiddleware;