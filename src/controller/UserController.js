const dataBase = require("../data-base/dataBase.json");
const fs = require("fs");
const path = require("path");

const UserModel = require("../models/UserModel");


const UserController = {
  showUserAreaPage: (req, res) =>{
    const dbUser = dataBase.users;
    const {id} = req.params;

    const user = dbUser.find(user=>user.id == id);
    const birth = new Date(user.birthday);
    console.log(user.birthday);
    console.log(birth);
    const birthday = birth.toLocaleDateString("pt-BR", {timeZone: 'UTC'});
    console.log(birthday);
    
    
    return res.render("user-panel-personal-data.ejs", {user, birthday});
  },
  showEditUserPersonalDataPage: (req, res) =>{

    const dbUser = dataBase.users;
    const {id} = req.params;

    const user = dbUser.find(user=>user.id == id);
    // const birth = new Date(user.birthday);
    // user.birthday = birth.toLocaleDateString();
    console.log(user.birthday);
    return res.render("edit-user-panel-personal-data.ejs", {user});
  },
  updateUserInfos: (req, res)=>{
    console.log("Atualizando usuário");
    console.log(req.body);
    
    const {email, password, person, name, cpf, cel, tel, genre, birthday, profilePicture, zipCode, publicPlace, number, complement, district, reference, city} = req.body;
    const {id} = req.params;
      

    const indexUser = dataBase.users.findIndex(user=> user.id == id);
    const user = dataBase.users.find(user=>user.id == id);
    
    const updateUser = {
      id,
      email, 
      password, 
      person,
       name,
       cpf,
       cel,
       tel: user.tel,
       genre: user.genre,
       birthday,
       profilePicture: user.profilePicture,
       zipCode: user.zipCode,
       publicPlace: user.publicPlace,
       number: user.number,
       complement: user.complement,
       district: user.district,
       reference:user.reference,
       city:user.city
    }


    dataBase.users.splice(indexUser, 1, updateUser);

    const dbJSON = JSON.stringify(dataBase);
    fs.writeFileSync(path.resolve("src", "data-base", "dataBase.json"), dbJSON);

    return res.redirect(`/usuario/area-cliente/${updateUser.id}/dados-pessoais`);
  },
  showUserAddressPage: (req, res)=>{
    //const dbUser = UserModel.findAll();
    const {id} = req.params;
    
    const userFound = UserModel.findByPk(id);
    if(!userFound){
      res
        .status(404)
        .json("Usuário não encontrado");
    }

    const userAddress = userFound.address;
    console.log(userAddress);
  
    return res.render("address-page.ejs", {address: userAddress});

  },
  showEditUserAdress: (req, res)=>{

  },
  updateUserAddressInfos: (req, res)=>{

  },
  showUserRequestesPage: (req, res)=>{
    
  },
  showEditUserRequestes: (req, res)=>{
    
  },
  updateUserRequestsIfos: (req, res)=>{

  }

}


module.exports = UserController;