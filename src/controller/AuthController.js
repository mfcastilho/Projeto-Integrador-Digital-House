const UserModel = require("../models/UserModel");
const {validationResult} = require("express-validator");

const AuthController = {
    showRegister: (req, res)=>{
       console.log(req.route.path);
       console.log("Enviando rota /usuario/cadastro");
       return res.render("register.ejs");
    },
    showLogin: (req, res)=>{
        console.log(req.route.path);
        return res.render("login.ejs");
    },
    storeUser: (req, res)=>{
        console.log("Criando usuário");
        console.log(req.body);
        
        const {email, password, person, name, cpf, cel, tel, genre, birthday, profilePicture, zipCode, publicPlace, number, complement, district, reference, city} = req.body;
          
        const newUser = {
          id:makeId(),
          email, 
          password, 
          person,
           name,
           cpf,
           cel,
           tel,
           genre,
           birthday,
           profilePicture,
           zipCode,
           publicPlace,
           number,
           complement,
           district,
           reference,
           city
        }
    
        dataBase.users.push(newUser);
        const dbJSON = JSON.stringify(dataBase);
    
        fs.writeFileSync(path.resolve("src", "data-base", "dataBase.json"), dbJSON);
        return res.redirect("/home");// 
        
    },
    logging: (req, res)=>{

    const resultValidations = validationResult(req);

    const db = UserModel.findAll();
    const {email, password} = req.body;

    if(resultValidations.errors.length > 0){
      return res.render("login.ejs", {errors:resultValidations.mapped(), old:req.body});
    }

    //let userFound = false;
    let passwordIsCorrect = false;


    const user = db.find(user=>user.email==email);

    if(user == undefined){
      return res.render("login.ejs",{
        errors:{
          email:{
            msg:"Usuário não existe"
          }
        },
        old:req.body
      });
    }else{
      //userFound = true;
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

    console.log(req.session.userLogged)

    if(user.isAdmin){
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