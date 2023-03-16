const { check } = require("express-validator");


const loginFormValidationMiddleware = [
  check("email")
      .trim().bail()
      .notEmpty().withMessage("campo obrigatório").bail()
      .isEmail().withMessage("insira um formato de email válido"),

  check("password") 
      .trim().bail()
      .notEmpty().withMessage("campo obrigatório").bail()
      .isLength({min:6}).withMessage("a senha deve contar no mínimo 6 caracteres") 

]

module.exports = loginFormValidationMiddleware;