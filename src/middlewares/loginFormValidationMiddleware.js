const { check } = require("express-validator");
const {User} = require("../models");
const bcrypt = require("bcrypt")


const loginFormValidationMiddleware = [
  check("email")
      .trim().bail()
      .notEmpty().withMessage("campo obrigatório").bail()
      .isEmail().withMessage("insira um formato de email válido")
      .custom(async (email, {req})=>{
        const user = await User.findOne({where:{email}});
        if(!user){
            throw new Error("Usuário não existe")
        }
      }),

  check("password") 
      .trim().bail()
      .notEmpty().withMessage("campo obrigatório").bail()
      .isLength({min:6}).withMessage("a senha deve contar no mínimo 6 caracteres")
      .custom(async (password, {req})=>{
        const email = req.body.email;
        const user = await User.findOne({where:{email}});
        const checkPassword = bcrypt.compareSync(password, user.password)
        if(!checkPassword){
            throw new Error("senha incorreta")
        }

        return true;
        
      })

]

module.exports = loginFormValidationMiddleware;