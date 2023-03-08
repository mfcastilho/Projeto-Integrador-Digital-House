const dataBase = require("../data-base/dataBase.json");
const HomeController = {
  showHome: (req, res)=>{

    const products = dataBase.products;
    console.log(req.route.path);
    return res.render("index.ejs", {products});
  },
  showProductsListing: (req, res)=>{

    const dataBase = require("../data-base/dataBase.json");
    const products = dataBase.products;

    console.log(req.route.path);
    return res.render("products-listing.ejs", {products});
  },
  showProduct: (req, res)=>{

    const {id} = req.params;

    const dataBase = require("../data-base/dataBase.json");


    dataBase.products.forEach(product =>{
      if(product.id == id){
        return res.render("inner-product.ejs",{product});
      } 
    });
  }
}

module.exports = HomeController;