const {Product, Category} = require("../models");

async function getProducts(){
    const products = await Product.findAll({
        include:[{
            model: Category,
            as: "category",
            require: false
        }],
        raw: false
    })

    products.forEach(product=>{
        console.log(product.category.category_name);
    })
    
    
}

const getProduct = async ()=>{
    const id = "f9e5a4b199ba363ec76e7140098c2304";
    const product = await Product.findByPk(id,{
        include:{
            model: Category,
            as: "category",
            require: false
        }
    });

    console.log(product.category.category_name);
}

// getProducts();
getProduct();



