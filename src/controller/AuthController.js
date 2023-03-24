const { validationResult } = require("express-validator");
const { User, Address } = require("../models");
const { v4:makeId } = require("uuid");
const bcrypt = require("bcrypt");
const notifier = require("node-notifier");
const path = require("path");






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

      

      const hashPassword = bcrypt.hashSync(password, 10);

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
        password:hashPassword, 
        tel:tel,
        is_admin: false,
        address_id:newUserAddress.id
      }
      await Address.create(newUserAddress);
      await User.create(newUser);

      notifier.notify({
        title: "",
        message:"Usuário cadastrado com sucesso",
        icon: path.resolve("src", "public", "img" ,"logo-urbano-tshirt-trasparent.png"),
      })

      return res.redirect("/login"); 
        
    },

    logging: async (req, res)=>{

    const resultValidations = validationResult(req);
    const {email, password} = req.body;


    if(resultValidations.errors.length > 0){
      return res.render("login.ejs", {errors:resultValidations.mapped(), old:req.body});
    }

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