const ProductModel = require("../models/ProductModel");


const AdminController = {
    showHomeAdmin: (req, res)=>{

        const products = ProductModel.findAll();
        

        res.render("admin/home-admin.ejs", {products});
    }
}


module.exports = AdminController;