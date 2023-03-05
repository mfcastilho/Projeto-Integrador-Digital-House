const database = require("../data-base/dataBase2.json");
const fs = require("fs");
const path = require("path");
//const {v4:makeId} = require("uuid");

const pathDataBase = path.resolve("src", "data-base", "dataBase2.json");

const ProductModel = {
  findAll: ()=>{
    
    return database.products;
  },

  findOne: (userEmail)=>{

    
  },
  findByPk: (userId)=>{
    
  },
  create: (user)=>{
    
  },
  update: (userId, user)=>{

    
  },
  destroy: (userId) =>{

    
  }
}

module.exports = ProductModel;

