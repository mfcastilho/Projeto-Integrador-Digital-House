const {User, Address, Order, OrderDetail, ProductVariant, Product, Category} = require("../models");

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
    },

    showUserInfos: (req, res) => {
        const { idUser } = req.params;
            const users = getInfoFromDatabase("users");
            const userFound = users.find((user) => user.id === id);

            return res.render("checkout-page.ejs", {userFound});
    },
    
    delivery: (req, res) =>{
        const { name, email, password } = req.body;

        const deliveryAddress = 
        return res.render("checkout-page.ejs", {})
    }


}

module.exports = CheckoutController;