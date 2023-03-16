const UserModel = require("../data-base/UserModel");
const {validationResult} = require("express-validator");
const {User, Address} = require("../models");
const {v4:makeId} = require("uuid");
const comparingRegisterEmails =  require("../public/js/comparingRegisterEmails");
const comparingRegisterPasswords = require("../public/js/comparingRegisterPasswords");


const AuthController = {
    showRegister: (req, res)=>{
       return res.render("register.ejs");
    },

    showLogin: (req, res)=>{
        return res.render("login.ejs");
    },

    storeUser: async (req, res)=>{
      const resultValidations = validationResult(req);
      const {email, confirmEmail, password, confirmPassword, name, cpf, tel, gender, zipCode, publicPlace, number, complement, district, reference, city, state} = req.body;
      
      console.log(state)
      if(resultValidations.errors.length > 0){
        return res.render("register.ejs", {errors:resultValidations.mapped(), old:req.body});
      }

      const newUserAddress = {
        id:makeId(),
        public_place:publicPlace,
        number:number,
        complement:complement,
        reference:reference,
        zip_code:zipCode,
        district:district,
        city:city,
        state:state
      }

      const newUser = {
        id:makeId(),
        name:name,
        cpf:cpf,
        gender: gender,
        email:email, 
        password:password, 
        tel:tel,
        is_admin: false,
        address_id:newUserAddress.id
      }
      await Address.create(newUserAddress);
      await User.create(newUser);

      return res.redirect("/login"); 
        
    },

    logging: async (req, res)=>{

    const resultValidations = validationResult(req);
    const {email, password} = req.body;

    if(resultValidations.errors.length > 0){
      return res.render("login.ejs", {errors:resultValidations.mapped(), old:req.body});
    }

    let passwordIsCorrect = false;

    const user = await User.findOne({
      where:{
        email:email
      },
      include:{
        model: Address,
        as: "address",
        require: false
      },
      raw:false
    })

    if(user.email == undefined){
      return res.render("login.ejs",{
        errors:{
          email:{
            msg:"Usuário não existe"
          }
        },
        old:req.body
      });

    }else{
      
      if(user.password == password){
        passwordIsCorrect = true;
      }
    }

    if(!passwordIsCorrect){
      return res.render("login.ejs",{
        errors:{
          password:{
            msg:"Senha incorreta"
          }
        },
        old:req.body
      });
    }
    req.session.userLogged = user;

    if(user.is_admin){
      return res.redirect("/admin/home")
    }

    return res.redirect("/");
    
    },

    logout: (req, res)=>{
      req.session.destroy();
      res.redirect("/");
    }
}

module.exports = AuthController;