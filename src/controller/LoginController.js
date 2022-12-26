const dataBase = require("../data-base/dataBase.json");






const LoginController = {
  showLogin: (req, res)=>{
    console.log(req.route.path);
    return res.render("login.ejs");
  },
  logging: (req, res)=>{
    const db = dataBase.users;
    const {email, password} = req.body;
    const {id} = req.params;

    let userFound = false;
    let passwordIsCorrect = false;
    

     const user = db.find(user=>user.email==email);

    if(user == undefined){
      return res.send("Usuário não existe!");
    }else{
      userFound = true;
      if(user.password == password){
        passwordIsCorrect = true;
      }
    }
    if(!passwordIsCorrect){
      return res.send("Senha incorreta!");
    }

    if(userFound && passwordIsCorrect){
      return res.redirect(`/usuario/${user.id}/dados-pessoais`);
    }

    
  }
}

module.exports = LoginController;