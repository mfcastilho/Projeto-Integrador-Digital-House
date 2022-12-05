
const HomeController = {
  showHome: (req, res)=>{

    console.log(req.route.path);
    return res.render("index.ejs");
  }
}

module.exports = HomeController;