const dataBase = require("../data-base/dataBase.json");
const fs = require("fs");
const path = require("path");

const UserModel = require("../models/UserModel");


const UserController = {
  showUserAreaPage: (req, res) =>{
    const {id} = req.params;

    const user = UserModel.findByPk(id);
    if(!user){
      return res 
        .status(404)
        .json("Usuário não encontrado");
    }

    const birth = new Date(user.birthday);
    const birthday = birth.toLocaleDateString("pt-BR", {timeZone: 'UTC'});

    return res.render("user-panel-personal-data.ejs", {user, birthday});
  },
  showEditUserPersonalDataPage: (req, res) =>{
    
    const {id} = req.params;

    const user = UserModel.findByPk(id);
    if(!user){
      return res 
        .status(404)
        .json("Usuário não encontrado");
    }

    return res.render("edit-user-panel-personal-data.ejs", {user});
  },
  updateUserInfos: (req, res)=>{
    const dbUsers = UserModel.findAll();
    const {id} = req.params;

    const {
           email, 
           password, 
           person, 
           name, 
           cpf, 
           tel, 
           birthday, 
          } = req.body;

    
      

    const indexUser = dbUsers.findIndex(user=> user.id == id);
    const user = UserModel.findByPk(id);

    console.log(tel);

    if(!user){
      return res 
        .status(404)
        .json("Usuário não encontrado");
    }
    
    const updateUser = {
      id,
      email, 
      password, 
      person,
       name,
       cpf,
       tel,
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

    console.log()

    const response = UserModel.update(id, updateUser);

    if(!response){
      return res 
        .status(404)
        .json("Não foi possível fazer a atualização do usuário");
    }

    return res.redirect(`/usuario/area-cliente/${updateUser.id}/dados-pessoais`);
  },
  showUserAddressPage: (req, res)=>{
    const {id} = req.params;
    
    const userFound = UserModel.findByPk(id);
    if(!userFound){
      res
        .status(404)
        .json("Usuário não encontrado");
    }

    const userAddress = userFound.address;
    console.log(userAddress);
  
    return res.render("address-page.ejs", {address: userAddress, user:userFound});

  },
  showEditUserAddress: (req, res)=>{

    const {id} = req.params;
    
    const userFound = UserModel.findByPk(id);
    if(!userFound){
      res
        .status(404)
        .json("Usuário não encontrado");
    }

    const userAddress = userFound.address;
    console.log(userAddress);
  
    return res.render("address-page-edit.ejs", {address: userAddress, user:userFound});

  },
  updateUserAddressInfos: (req, res)=>{
    const {id} = req.params;

    const userFound = UserModel.findByPk(id);
    
    const userUpdate = {
      id:userFound.id,
      email:userFound.email,
      password:userFound.password,
      name:userFound.name,
      cpf:userFound.cpf,
      tel:userFound.tel,
      genre:userFound.genre,
      birthday:userFound.birthday,
      profilePicture:userFound.profilePicture,
      address:{
        zipCode:req.body.zipCode,
        publicPlace:req.body.publicPlace,
        number:req.body.number,
        complement:req.body.complement,
        district:req.body.district,
        reference:req.body.reference,
        city:req.body.city,
        state:req.body.state
      }
    }

    const response = UserModel.update(id, userUpdate);

    console.log(response)

    if(!response){
      res
        .status(404)
        .json("Erro!Usuário não foi atualizado no banco");
    }

    res.redirect(`/usuario/area-cliente/${id}/dados-pessoais`);  
  },
  showUserRequestesPage: (req, res)=>{
    
  },
  showEditUserRequestes: (req, res)=>{
    
  },
  updateUserRequestsInfos: (req, res)=>{

  }

}


module.exports = UserController;