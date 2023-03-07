const ProductModel = require("../data-base/ProductModel");


const AdminController = {
    showHomeAdmin: (req, res)=>{

        const products = ProductModel.findAll();
        
        res.render("admin/home-admin.ejs", {products});
    }
}


module.exports = AdminController;