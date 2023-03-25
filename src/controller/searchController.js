const { Product, ProductVariant } = require("../models");
const { Op } = require("sequelize");

const SearchController = {
    getSearch: async (req, res)=>{
        
        const {query} = req.query;

        const productsVariant = [];

        const products = await Product.findAll({
            where:{
                name:{
                    [Op.like]: `%${query}%`
                }
            }
        });

        for(let product of products){
            const pV = await ProductVariant.findAll({
                where: {product_id: product.id},
                include:[
                    {
                        model: Product,
                        as: "product",
                        require: false
                    }
                ],
                raw: false
            });

            productsVariant.push(pV)

        }

        //Função recursiva
        function flattenArray(arr){
            let flattenedArr = [];
            arr.forEach((element)=>{
                if(Array.isArray(element)){
                    flattenedArr = flattenedArr.concat(flattenArray(element));
                }else{
                    flattenedArr.push(element);
                }
            });

            return flattenedArr;
        }

        const newProductsVariant = flattenArray(productsVariant);

        const tshirtsSearchResults = newProductsVariant.filter((tshirt, index, array)=>{
            return index == array.findIndex(item=> item.color == tshirt.color);
          });
      
        res.render("search.ejs", {productsVariant:tshirtsSearchResults})    
    }
}

module.exports = SearchController;