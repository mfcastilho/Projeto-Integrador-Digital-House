
const dataBase = require("../data-base/dataBase.json");
const HomeController = {
  showHome: (req, res)=>{

    const products = dataBase.products;
    console.log(req.route.path);
    return res.render("index.ejs", {products});
  }
}

module.exports = HomeController;