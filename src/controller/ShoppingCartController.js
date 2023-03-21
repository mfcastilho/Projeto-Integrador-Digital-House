const { ProductVariant, Product } = require("../models");


const ShoppingCartController = {

   showShoppingCartPage: (req, res)=> {
      const { shoppingcart } = req.session.userLogged;

      let total = 0;

      if(!shoppingcart){
         return res.render("shopping-cart.ejs", {shoppingcart: [], total});
      }

      shoppingcart.forEach(product=>{
         total += Number(product.totalPriceProduct)
      });

      return res.render("shopping-cart.ejs", {shoppingcart, total});
      
   },

   addShoppingCart: async (req, res)=> {
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

      const totalPriceProduct = productVariant.product.price * quantity;

      const productToCart = {
         id: correctProductVariant.id,
         model: correctProductVariant.model,
         color: correctProductVariant.color,
         quantity: quantity,
         image: correctProductVariant.image,
         size: correctProductVariant.size,
         product_id: correctProductVariant.product_id,
         name: correctProductVariant.product.name,
         tshirt_print: correctProductVariant.product.tshirt_print,
         price: correctProductVariant.product.price,
         totalPriceProduct:totalPriceProduct
      }

      if(req.session.userLogged.shoppingcart){
         req.session.userLogged.shoppingcart.push(productToCart);
      }else{
         req.session.userLogged.shoppingcart = [productToCart];
      }

      return res.redirect("/carrinho");
   },

   removeShoppingCart: (req, res)=>{
      const {id} = req.params;
      let { shoppingcart } = req.session.userLogged;

      console.log("Entrou......")

      const index = shoppingcart.findIndex(product=>product.id == id);
      const updatedShoppingCart = shoppingcart.splice(index, 1);
      shoppingcart = updatedShoppingCart;

      if(shoppingcart.length <= 0){
         shoppingcart = [];
         return res.redirect("/carrinho");
      }

      return res.redirect("/carrinho");
   }
}

module.exports = ShoppingCartController;