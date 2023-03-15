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
  
  showUserAddressPage: async (req, res)=>{
    const {id} = req.params;
   
    const userFound = await User.findByPk(id, {
      include:{
        model: Address,
        as: "address",
        require: false
      },
      raw: false
    });

    return res.render("address-page.ejs", {user:userFound});
  },

  showEditUserAddress: async (req, res)=>{
    const {id} = req.params;
    
    const userFound = await User.findByPk(id, {
      include:{
        model: Address,
        as: "address",
        require: false
      },
      raw: false
    });
  
    return res.render("address-page-edit.ejs", {user:userFound});
  },
  
  updateUserAddressInfos: async (req, res)=>{
    const {id} = req.params;

    const {
      zipCode,
      publicPlace,
      number,
      complement,
      district,
      reference,
      city,
      state
    } = req.body;

    const user = await User.findByPk(id, {
      include:{
        model: Address,
        as: "address",
        require: false
      },
      raw:false
    })  
   
    const userAddressUpdate = {
      id: user.address.id,
      zip_code: zipCode == undefined ? user.address.zip_code : zipCode,
      public_place: publicPlace == undefined ? user.public_place : publicPlace,
      number: number == undefined ? user.number : number,
      complement: complement == undefined ? user.complement : complement,
      district: district == undefined ? user.district : district,
      reference: reference == undefined ? user.reference : reference, 
      city: city == undefined ? user.city : city,
      state: state == undefined ? user.state : state    
    }

    await Address.update(userAddressUpdate, {
      where:{id:user.address.id}
    })

    res.redirect(`/usuario/area-cliente/${user.id}/dados-pessoais`);  
  },

  showUserRequestesPage: (req, res)=>{
    
  },

  showEditUserRequestes: (req, res)=>{
    
  },

  updateUserRequestsInfos: (req, res)=>{

  }

}


module.exports = UserController;