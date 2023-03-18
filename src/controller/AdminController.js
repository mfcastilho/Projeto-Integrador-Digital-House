const { validationResult } = require("express-validator");
const { v4:makeId } = require("uuid")
const { ProductVariant, Product, Category } = require("../models");


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
    },

    showProductRegisterPage: (req, res)=>{
        return res.render("admin/products/productRegister.ejs");
    },
    showEditProductPage: (req, res)=>{
        return res.render("admin/products/editProduct.ejs");
    },

    storeProduct: async (req, res)=>{
        const resultValidations = validationResult(req);
        const {name, 
               model, 
               color, 
               size, 
               quantity, 
               /*image,*/ 
               /*tshirtPrint,*/ 
               price, 
               category} = req.body;
               
        if(resultValidations.errors.length > 0){
            return res.render("admin/products/productRegister.ejs", {errors:resultValidations.mapped(), old:req.body});
        }

        const productExist = await Product.findOne({
            where:{name:name},
            include:{
                model: Category,
                as: "category",
                require: true
            },
            raw: false
        });


       const categories = await Category.findAll();
       let newProductCategoryId;

       categories.forEach(c=>{
            if(c.category_name == category){
                newProductCategoryId = c.id;
            }
       })

        // const products = await Product.findAll();
        // const productExist = products.filter(product => product.name == name);

        if(!productExist){
            const image = "img/"+req.files["image"][0].filename;
            const tshirtPrint = "img/"+req.files["tshirtPrint"][0].filename;

            const newProduct = {
                id: makeId(),
                name, 
                tshirt_print: tshirtPrint, 
                price,
                active: true ,
                categoryId: newProductCategoryId
            }
    
            const newProductVariant = {
                id: makeId(),
                model, 
                color, 
                size, 
                quantity, 
                image: image, 
                category,
                product_id: newProduct.id
            }

            await Product.create(newProduct);
            await ProductVariant.create(newProductVariant);

            return res.redirect("/admin/home"); 
        }

        const image = "img/"+req.files["image"][0].filename;
        const newProductVariant = {
            id: makeId(),
            model, 
            color, 
            size, 
            quantity, 
            image:image, 
            category,
            product_id: productExist.id
        }

        await ProductVariant.create(newProductVariant);

        return res.redirect("/admin/home");          
    },

    editProduct: (req, res)=>{

    },

    deleteProduct: (req, res)=>{
        
    }

}


module.exports = AdminController;