const dataBase = require("../data-base/dataBase.json");
const fs = require("fs");
const path = require("path");

const {User, Address} = require("../models");

const UserModel = require("../data-base/UserModel");


const UserController = {
  showUserAreaPage: async (req, res) =>{
    const {id} = req.params;

    // const user = UserModel.findByPk(id);
    // if(!user){
    //   return res 
    //     .status(404)
    //     .json("Usuário não encontrado");
    // }

    const user = await User.findByPk(id, {
      include:{
        model: Address,
        as: "address",
        require: false
      },
      raw:false
    })

    return res.render("user-panel-personal-data.ejs", {user});
  },

  showEditUserPersonalDataPage: async (req, res) =>{
    
    const {id} = req.params;

    // const user = UserModel.findByPk(id);
    // if(!user){
    //   return res 
    //     .status(404)
    //     .json("Usuário não encontrado");
    // }

    const user = await User.findByPk(id, {
      include:{
        model:Address,
        as: "address",
        require: false
      },
      raw: false
    })

    return res.render("edit-user-panel-personal-data.ejs", {user});
  },

  updateUserInfos: async (req, res)=>{
    const {id} = req.params;
    const {
           email, 
           name, 
           cpf, 
           tel, 
           password
          } = req.body;

    const user = await User.findByPk(id, {
      include:{
        model: Address,
        as: "address",
        require: false
      },
      raw:false
    })      

    const updateUser = {
      id,
      email: email == undefined ? user.email : email, 
      password: password == undefined ? user.password : password,
       name: name == undefined ? user.name : name,
       cpf: cpf == undefined ? user.cpf : cpf,
       tel: tel == undefined ? user.tel : tel,
       is_admin: false
    }

    await User.update(updateUser, {
      where:{id}
    })

    return res.redirect(`/usuario/area-cliente/${updateUser.id}/dados-pessoais`);
  },
  
  showUserAddressPage: (req, res)=>{
    const {id} = req.params;
    // console.log("id:"+id);
    // const userFound = UserModel.findByPk(id);
    // if(!userFound){
    //   res
    //     .status(404)
    //     .json("Usuário não encontrado");
    // }

    // console.log(userFound)
    // const userAddress = userFound.address;
    // console.log(userAddress);

    const userFound = User.findByPk(id, {
      include:{
        model: Address,
        as: "address",
        require: false
      },
      raw: false
    });

    

  
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