const ProductModel = require("../data-base/ProductModel");
const {ProductVariant, Product} = require("../models");


const AdminController = {
    showHomeAdmin: async (req, res)=>{

        //const products = ProductModel.findAll();
        const productsVariant = await ProductVariant.findAll({
            include:[{
                model: Product,
                as: "product",
                require: false
            }],
            raw: false
        });

        console.log(productsVariant)
        
        res.render("admin/home-admin.ejs", {productsVariant});
    }
}


module.exports = AdminController;