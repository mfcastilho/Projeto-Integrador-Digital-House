const {ProductVariant, Product} = require("../models");


const ShoppingCartController = {

  showShoppingCart: (req, res)=>{
    return res.render("shopping-cart.ejs");
  },

  getProductInfosToBuy: async (req, res)=>{
   const {idProduct, size, quantity} = req.body;

   console.log("quantidade"+quantity)

    const productVariant = await ProductVariant.findOne({
      where:{id:idProduct},
      include:{
        model: Product,
        as: "product",
        require: true
      },
      raw: false
    })

    console.log(productVariant)

    return res.render("shopping-cart.ejs", {productVariant, size});
  },

  


}

module.exports = ShoppingCartController;