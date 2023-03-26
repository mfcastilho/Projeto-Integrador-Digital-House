const {Order, OrderDetail, ProductVariant} = require("../models");
const { validationResult } = require("express-validator");
const {v4:makeId} = require("uuid");

const CheckoutController = {

    showCheckout: (req, res)=>{
        const {total} = req.body;
        const {userLogged} = req.session;

        const openFormCard = false;
        
        return res.render("checkout-page.ejs", {total, user:userLogged, openFormCard});
    },

    completedPurchase: async (req, res)=>{

        const validation = validationResult(req);

        const { total} = req.body;
        const { userLogged } = req.session;
        const openFormCard = true;

        if(validation.errors.length > 0){
            res.render("checkout-page.ejs", {errors:validation.mapped(), old:req.body, total, user:userLogged, openFormCard});
        }

        const newOrder = {
            id:makeId(),
            user_id: userLogged.id
        }

        await Order.create(newOrder);

        const order = Order.findOne({
            where: {user_id: userLogged.id}
        })

        userLogged.shoppingcart.forEach(async productVariant=>{
            let newOrderDetails = {
                id:makeId(),
                product_variant_id: productVariant.id,
                order_id: newOrder.id,
                quantity: productVariant.quantity,
            }

            console.log(newOrderDetails)

            await OrderDetail.create(newOrderDetails);

            let product = await ProductVariant.findOne({
                where:{id:productVariant.id}
            });

            let newProductVariantQuantity = product.quantity - productVariant.quantity;

            await ProductVariant.update(
                { quantity:newProductVariantQuantity},
                {where:{id:productVariant.id}}
            )
        })


       

        // res.json(userLogged.shoppingcart)

        res.redirect(`/usuario/area-cliente/${userLogged.id}/dados-pessoais`);
    },

}

module.exports = CheckoutController;