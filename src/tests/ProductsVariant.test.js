const {ProductVariant, Product} = require("../models");



async function getProductsVariant(){
    const productsVariant = await ProductVariant.findAll({
        include:[{
            model: Product,
            as:"product",
            require: true
        }],
        raw: false
    });

    console.log(productsVariant);
    // productsVariant.forEach(productVariant=>{
    //     console.log(productVariant);
    // })
    
}

async function getProductVariantByPk(){
    const id = "5d5a4a4b4d5c5d5a4adhgfzjzd5c5d5a4a4b";

    const productVariant = await ProductVariant.findByPk(id, {
        include:{
            model: Product,
            as: "product",
            require: false
        },
        raw: false
    });

    console.log(productVariant.product.name)
}

async function getProductVariant(){
    const id = "5d5a4a4b4d5c5d5a4adhgfzjzd5c5d5a4a4b";

    const productVariant = await ProductVariant.findOne({
        where:{id:id},
        include:{
            model:Product,
            as: "product",
            require: false
        },
        raw: false
    });

    console.log(productVariant.product.categoryId);
}


//getProductsVariant();
//getProductVariantByPk();
getProductVariant();