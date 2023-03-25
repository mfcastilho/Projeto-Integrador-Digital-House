const { validationResult } = require("express-validator");
const { v4:makeId } = require("uuid")
const { ProductVariant, Product, Category } = require("../models");



const AdminController = {
    showHomeAdmin: async (req, res)=>{

        const url = req.originalUrl;

        const productsVariant = await ProductVariant.findAll({
            include:[{
                model: Product,
                as: "product",
                require: false
            }],

            raw: false
        });

        console.log(productsVariant)
        
        res.render("admin/home-admin.ejs", {productsVariant, url});
    },

    showProductRegisterPage: (req, res)=>{

        const url = req.originalUrl;
        return res.render("admin/products/productRegister.ejs", {url});
    },

    showEditProductPage: async (req, res)=>{
        const url = req.originalUrl;
        
        const {id} = req.params;

        const productVariant = await ProductVariant.findOne({
            where:{id:id},
            include:{
                model: Product,
                as: "product",
                require: false
            },
            raw: false
        });

        const product = await Product.findOne({
            where:{id:productVariant.product_id},
            include:{
                model: Category,
                as: "category",
                require: false
            },
            raw:false
        });


        
        return res.render("admin/products/editProduct.ejs", {url, productVariant, product});
    },

    storeProduct: async (req, res)=>{
        const url = req.originalUrl;

        const resultValidations = validationResult(req);
        const {name, 
               model, 
               color, 
               size, 
               quantity, 
               price, 
               category} = req.body;
               
        if(resultValidations.errors.length > 0){
            return res.render("admin/products/productRegister.ejs", {errors:resultValidations.mapped(), old:req.body, url});
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

    editProduct: async (req, res)=>{
        const {id} = req.params;

        const {quantity,price} = req.body;
        let image;

        const productVariant = await ProductVariant.findByPk(id);

        if(req.file){
            image = "img/"+req.file.filename;
            const resultProductVariant = await ProductVariant.update(
                {
                    quantity:quantity,
                    image:image
                },
                {
                    where:{id:id}  
                }
            );

            const resultProduct = await Product.update(
                {
                    price:price
                },
                {
                    where:{id:productVariant.product_id}
                }
            );

            return res.redirect("/admin/home");
        }

        const resultProductVariant = await ProductVariant.update(
            {
                quantity:quantity,
            },
            {
                where:{id:id}  
            }
        )
        
        const resultProduct = await Product.update(
            {
                price:price
            },
            {
                where:{id:productVariant.product_id}
            }
        )

        return res.redirect("/admin/home");

    },

    deleteProduct: async (req, res)=>{
        const {id} = req.params;
        const {idProduct, resp} = req.body
        console.log("ID do produto: "+id);

        await ProductVariant.destroy({
            where:{id:id}
        });
    }

}


module.exports = AdminController;