const dataBase = require("../data-base/dataBase.json");
const {ProductVariant, Product} = require("../models");

const HomeController = {
  showHome: async (req, res)=>{
    //const products = dataBase.products;
    const productsVariant = await ProductVariant.findAll({
        include:[{
          model: Product,
          as:"product",
          require: false
        }],
        raw: false
    });

    let productUniqueName = {};
    let uniquesProducts = [];

   for(let i =0; i<productsVariant.length;i++){
    let name = productsVariant[i].product.name;
    if(!productUniqueName[name]){
      productUniqueName[name] = true;
      uniquesProducts.push(productsVariant[i])
    }
   }
   
    return res.render("index.ejs", {productsVariant:uniquesProducts});
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