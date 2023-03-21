const {ProductVariant, Product} = require("../models");


const ShoppingCartController = {

  showShoppingCart: (req, res)=>{
    return res.render("shopping-cart.ejs");
  },

  getProductInfosToBuy: async (req, res) => {
    const { idProduct, size, quantity } = req.body;

    const productVariant = await ProductVariant.findOne({
       where: { id: idProduct },
       include: {
          model: Product,
          as: "product",
          require: true
       },
       raw: false
    });

    const product = await Product.findOne({
       where: { id: productVariant.product_id }
    })

    const productsVariants = await ProductVariant.findAll({
       where: { size: size },
       include: {
          model: Product,
          as: "product",
          require: true
       },
       raw: false
    });

    let correctProductVariant;

    productsVariants.forEach(p => {
       if (p.product.name == product.name && p.color == productVariant.color && p.size == size && p.model == productVariant.model) {
          correctProductVariant = p;
       }
    });

    const total = productVariant.product.price * quantity;



    return res.render("shopping-cart.ejs", { productVariant: correctProductVariant, quantity, total });
 },

  

}

module.exports = ShoppingCartController;