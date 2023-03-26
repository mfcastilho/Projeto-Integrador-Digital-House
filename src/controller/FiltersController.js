const { ProductVariant, Product } = require("../models");

const FiltersControllers = {
    colorFilter: async (req, res)=>{
        const color = req.query.color;

        const productsVariants = await ProductVariant.findAll({
            include:[{
                model: Product,
                as: "product",
                require: false
            }],
            raw:false
        });

        const productsVariantsColorFiltered = productsVariants.filter((productVariant)=>{
            return productVariant.color === color
        })

        const tshirtsSearchResults = productsVariantsColorFiltered.filter((tshirt, index, array)=>{
            return index == array.findIndex(item=> item.product.name == tshirt.product.name);
        });

          let msg; 

        if(tshirtsSearchResults.length == 0){

            msg = "Não foi encontrado nenhuma camiseta com a cor escolhida!"
            res.render("products-listing.ejs", {productsVariant:"", msg});
        }

        res.render("products-listing.ejs", {productsVariant:tshirtsSearchResults, msg});

    }
}

module.exports = FiltersControllers;