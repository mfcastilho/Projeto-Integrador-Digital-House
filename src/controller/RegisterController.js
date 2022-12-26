const dataBase = require("../data-base/dataBase.json");
const fs = require("fs");
const path = require("path");
const {v4:makeId} = require("uuid");



const RegisterController = {
  showRegister: (req,
     res)=>{
    console.log(req.route.path);
    console.log("Enviando rota /usuario/cadastro");
    return res.render("register.ejs");
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
  updateUser: (req, res)=>{
    console.log("Atualizando usuário");
    console.log(req.body);
    
    const {email, password, person, name, cpf, cel, tel, genre, birthday, profilePicture, zipCode, publicPlace, number, complement, district, reference, city} = req.body;
    const {id} = req.params;
      

    const indexUser = dataBase.users.findIndex(user=> user.id == id);
    
    const updateUser = {
      id,
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


    dataBase.users.splice(indexUser, 1, updateUser);

    const dbJSON = JSON.stringify(dataBase);
    fs.writeFileSync(path.resolve("src", "data-base", "dataBase.json"), dbJSON);

    return res.redirect("/home");
  }
}

module.exports = RegisterController;