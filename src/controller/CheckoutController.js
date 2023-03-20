const {ProductVariant, Product} = require("../models");

const CheckoutController = {

    showCheckout: (req, res)=>{
        return res.render("checkout-page.ejs");
    },

    showProductInfosToBuy: (req, res)=>{
        const {idProduct} = req.body //ver como faz para só mostar os dados
     
         const productVariant = ProductVariant.findOne({
           where:{id:idProduct},
           include:{
             model: Product,
             as: "product",
             require: true
           },
           raw: false
         })
     
         
     
         return res.render("checkout-page.ejs", {productVariant});

         const {idUser} = req.body
         
         const user = User.findByPk(id, {
            include:{

          })
      
    },

}

module.exports = CheckoutController;