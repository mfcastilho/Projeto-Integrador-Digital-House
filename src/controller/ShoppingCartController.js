const {ProductVariant, Product} = require("../models");


const ShoppingCartController = {

  showShoppingCart: (req, res)=>{
    return res.render("shopping-cart.ejs");
  },

  getProductInfosToBuy: async (req, res)=>{
   const {idProduct} = req.body

    const productVariant = await ProductVariant.findOne({
      where:{id:idProduct},
      include:{
        model: Product,
        as: "product",
        require: true
      },
      raw: false
    })

    

    return res.render("shopping-cart.ejs", {productVariant});
  },

  

}

module.exports = ShoppingCartController;