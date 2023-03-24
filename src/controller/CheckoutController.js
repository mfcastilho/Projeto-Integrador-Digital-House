const {User, Address, Order, OrderDetail, ProductVariant, Product, Category} = require("../models");
const { validationResult } = require("express-validator");

const CheckoutController = {

    showCheckout: (req, res)=>{
        const {total} = req.body;
        const {userLogged} = req.session;

        const openFormCard = false;
        
        return res.render("checkout-page.ejs", {total, user:userLogged, openFormCard});
    },

    completedPurchase: (req, res)=>{

        const validation = validationResult(req);

        const { total} = req.body;
        const { userLogged } = req.session;
        const openFormCard = true;

        if(validation.errors.length > 0){

            res.render("checkout-page.ejs", {errors:validation.mapped(), old:req.body, total, user:userLogged, openFormCard});
        }

        

        console.log(userLogged)

        res.redirect(`/usuario/area-cliente/${userLogged.id}/dados-pessoais`);
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


        return res.render("checkout-page.ejs", {})
    }


}

module.exports = CheckoutController;