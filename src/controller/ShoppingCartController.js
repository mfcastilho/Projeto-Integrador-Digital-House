const { ProductVariant, Product } = require("../models");


const ShoppingCartController = {

   showShoppingCart: (req, res) => {
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
         total:total
      }

      // if(req.session.userLogged.carrinho){
      //    req.session.userLogged.carrinho.push(productToCart);
      // }else{
      //    req.session.userLogged.carrinho = [productToCart];
      // }

      
         
      // return res.render("shopping-cart.ejs", { productVariant: correctProductVariant, quantity, total });
   },

   show: (req, res)=> {
      const { carrinho } = req.session.userLogged;

      let total = 0;

      if(!carrinho){
         return res.render("shopping-cart.ejs", {carrinho: [], total});
      }

      carrinho.forEach(product=>{
         total += Number(product.totalPriceProduct)
      });

      return res.render("shopping-cart.ejs", {carrinho, total});
      
   },

   addCart: async (req, res)=> {
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

      if(req.session.userLogged.carrinho){
         req.session.userLogged.carrinho.push(productToCart);
      }else{
         req.session.userLogged.carrinho = [productToCart];
      }

      return res.redirect("/carrinho");
   }




}

module.exports = ShoppingCartController;