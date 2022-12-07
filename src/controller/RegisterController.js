

const RegisterController = {
  showRegister: (req, res)=>{
    console.log(req.route.path);
    return res.render("register.ejs");
  }
}

module.exports = RegisterController;