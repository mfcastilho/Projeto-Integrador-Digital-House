const { check } = require("express-validator");
const {User} = require("../models");


const registerFormValidationMiddleware =  [
    
    check("email")
      .trim().bail()
      .notEmpty().withMessage("campo obrigatório").bail()
      .isEmail().withMessage("Digite um formato de email correto")
      .custom(async (email)=>{
        const user = await User.findOne({where:{email:email}});
        if(user){
          throw new Error("Esse email já se encontra cadastrado");
        }

        return true;
      }),
      
    check("confirmEmail")
    .trim().bail()
    .custom((value, {req})=>{

      if(value == ""){
        throw new Error("campo obrigatório")
      }else if(value !== req.body.email){
          throw new Error("E-mail não batem. Verifique o valor digitado.")
      }
  
      return true;
    }),
  
    check("password")
      .trim().bail()
      .notEmpty().withMessage("campo obrigatório").bail()
      .isLength( {min:6} ).withMessage("A senha precisa ter no mínimo 6 caracteres"),
  
    check("confirmPassword")
    .trim().bail()
    .custom((value, {req})=>{
      if(value == ""){
        throw new Error("campo obrigatório")
      }else if(value !== req.body.password){
          throw new Error("Senhas não batem. Verifique o valor digitado.")
      }
  
      return true;
    }),  
  
    check("name")
      .trim().bail()
      .notEmpty().withMessage("campo obrigatório").bail()
      .isString().withMessage("o campo não aceita números"), 
  
    check("cpf") 
      .trim().bail()
      .notEmpty().withMessage("campo obrigatório").bail()
      .isNumeric().withMessage("o campo só aceita números").bail()
      .isLength({min:11}).withMessage("o cpf tem que ter obrigatoriamente 11 caracteres"),
    
    check("tel") 
    .trim().bail()
    .notEmpty().withMessage("campo obrigatório").bail()
    .isNumeric().withMessage("o campo só aceita números"),
    
    check("zipCode") 
    .trim().bail()
    .notEmpty().withMessage("campo obrigatório").bail()
    .isNumeric().withMessage("o campo só aceita números")
    .isLength({min:8}).withMessage("o cpf tem que ter obrigatoriamente 8 caracteres"),
  
    check("publicPlace") 
    .trim().bail()
    .notEmpty().withMessage("campo obrigatório"),
  
    check("number") 
    .trim().bail()
    .notEmpty().withMessage("campo obrigatório").bail()
    .isNumeric().withMessage("o campo só aceita números"),
  
    check("complement") 
    .trim().bail()
    .notEmpty().withMessage("campo obrigatório"),
  
    check("reference") 
    .trim().bail()
    .notEmpty().withMessage("campo obrigatório"),
  
    check("district") 
    .trim().bail()
    .notEmpty().withMessage("campo obrigatório"),
  
    check("city") 
    .trim().bail()
    .notEmpty().withMessage("campo obrigatório"),
    
    check("state") 
    .trim()
      
  ]





module.exports = registerFormValidationMiddleware

