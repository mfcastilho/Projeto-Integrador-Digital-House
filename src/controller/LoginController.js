
const LoginController = {
  showLogin: (req, res)=>{
    console.log(req.route.path);
    return res.render("login.ejs");
  }
}

module.exports = LoginController;