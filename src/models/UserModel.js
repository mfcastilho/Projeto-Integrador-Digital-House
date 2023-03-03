const database2 = require("../data-base/dataBase2.json");
const fs = require("fs");
const path = require("path");
//const {v4:makeId} = require("uuid");

const pathDataBase = path.resolve("src", "data-base", "dataBase.json");

const UserModel = {
  findAll: ()=>{
    return database2.users;
  },

  findOne: (userEmail)=>{

    const users = database2.users;
    const userFound = users.find(user => user.email == userEmail);

    if(!userFound){
      return false;
    }

    return userFound;
  },
  findByPk: (userId)=>{
    const users = database2.users;
    const userFound = users.find(user => user.id== userId);

    if(!userFound){
      return false;
    }

    return userFound;
  },
  create: (user)=>{
    database2.users.push(user);
    const dbJSON = JSON.stringify(database2);
    fs.writeFileSync(pathDataBase, dbJSON);

    return true;
  },
  update: (userId, user)=>{

    const users = database2.users;
    const userIndex = users.findIndex(user => user.id== userId);

    if(!userIndex){

      return false;
    }

    database2.users.splice(userIndex, 1, user);
    const dbJSON = JSON.stringify(database2);
    fs.writeFileSync(pathDataBase, dbJSON);

    return true;
  },
  destroy: (userId) =>{

    const users = database2.users;
    const userIndex = users.findIndex(user => user.id== userId);

    if(!userIndex){
      return false;
    }

    database2.users.splice(userIndex, 1);

    const dbJSON = JSON.stringify(database2);
    fs.writeFileSync(pathDataBase, dbJSON);

    return true;
  }
}

module.exports = UserModel;

