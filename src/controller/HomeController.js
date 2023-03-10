const dataBase = require("../data-base/dataBase.json");
const {ProductVariant, Product} = require("../models");

const HomeController = {
  showHome: async (req, res)=>{
  //   const products = dataBase.products;
  //   const productsVariant = await ProductVariant.findAll({
  //       include:[{
  //         model: Product,
  //         as:"product",
  //         require: false
  //       }],
  //       raw: false
  //   });

  //   let productUniqueName = {};
  //   let uniquesProducts = [];

  //  for(let i =0; i<productsVariant.length;i++){
  //   let name = productsVariant[i].product.name;
  //   if(!productUniqueName[name]){
  //     productUniqueName[name] = true;
  //     uniquesProducts.push(productsVariant[i])
  //   }
  //  }
   
  //   return res.render("index.ejs", {productsVariant:uniquesProducts});

  const productsVariant = await ProductVariant.findAll({
    include:[{
      model: Product,
      as:"product",
      require: false
    }],
    raw: false
  });

  const maleUniquesProducts = Object.values(
    productsVariant.filter(productVariant => productVariant.model === "masculina").reduce((acc, productVariant)=>{
      if(!acc[productVariant.product.name]){
        acc[productVariant.product.name] = productVariant;
      }
      return acc;
    }, {})
  )

  return res.render("index.ejs", {productsVariant:maleUniquesProducts});

  },
  showProductsListing: async (req, res)=>{

    //const dataBase = require("../data-base/dataBase.json");
    //const products = dataBase.products;


    const productsVariant = await ProductVariant.findAll({
      include:[{
        model: Product,
        as:"product",
        require: false
      }],
      raw: false
  });

    return res.render("products-listing.ejs", {productsVariant});
  },
  showMaleProductsListing: async (req, res)=>{
  
    const productsVariant = await ProductVariant.findAll({
      include:[{
        model: Product,
        as:"product",
        require: false
      }],
      raw: false
    });

    const maleUniquesProducts = Object.values(
      productsVariant.filter(productVariant => productVariant.model === "masculina").reduce((acc, productVariant)=>{
        if(!acc[productVariant.product.name]){
          acc[productVariant.product.name] = productVariant;
        }
        return acc;
      }, {})
    )
  
    return res.render("products-listing.ejs", {productsVariant:maleUniquesProducts});

  },
  showFemaleProductsListing: async (req, res)=>{
    const productsVariant = await ProductVariant.findAll({
      include:[{
        model: Product,
        as:"product",
        require: false
      }],
      raw: false
  });

  const femaleUniquesProducts = Object.values(
    productsVariant.filter(productVariant => productVariant.model === "feminina").reduce((acc, productVariant)=>{
      if(!acc[productVariant.product.name]){
        acc[productVariant.product.name] = productVariant;
      }
      return acc;
    }, {})
  )
  
    return res.render("products-listing.ejs", {productsVariant:femaleUniquesProducts});
  },
  showAnimesProductsListing: async (req, res)=>{
    const productsVariant = await ProductVariant.findAll({
      include:[{
        model: Product,
        as:"product",
        require: false
      }],
      raw: false
  });

  const animeUniquesProducts = Object.values(
    productsVariant.filter(productVariant => productVariant.product.categoryId == "2").reduce((acc, productVariant)=>{
      if(!acc[productVariant.product.name]){
        acc[productVariant.product.name] = productVariant;
      }
      return acc;
    }, {})
  )
  
    return res.render("products-listing.ejs", {productsVariant:animeUniquesProducts});
  },
  showMoviesProductsListing: async (req, res)=>{
    const productsVariant = await ProductVariant.findAll({
      include:[{
        model: Product,
        as:"product",
        require: false
      }],
      raw: false
  });

  const movieUniquesProducts = Object.values(
    productsVariant.filter(productVariant => productVariant.product.categoryId == "1").reduce((acc, productVariant)=>{
      if(!acc[productVariant.product.name]){
        acc[productVariant.product.name] = productVariant;
      }
      return acc;
    }, {})
  )
  
    return res.render("products-listing.ejs", {productsVariant:movieUniquesProducts});
  },
  showProduct: async (req, res)=>{

    const {id} = req.params;

    //const dataBase = require("../data-base/dataBase.json");

    const productVariant = await ProductVariant.findOne({
      where: {id:id},
      include:{
        model: Product,
        as: "product",
        require: false
      },
      raw: false
    })

    
    const productsVariant = await ProductVariant.findAll({
      include:[{
        model: Product,
        as:"product",
        require: false
      }],
      raw: false
    });

    let maleUniquesProducts = undefined;
    let femaleUniquesProducts = undefined;
    let chosenTshirt = undefined;
    let tshirt = undefined;
  
    if(productVariant.model == "masculina"){

      maleUniquesProducts = Object.values(
        productsVariant.filter(productVariant => productVariant.model === "masculina")
      )
      chosenTshirt = maleUniquesProducts.filter(tshirt=> tshirt.product.name == productVariant.product.name)
      tshirt = chosenTshirt.filter(tshirt=> tshirt.size == "M");

    }else if(productVariant.model == "feminina"){

      femaleUniquesProducts = Object.values(
        productsVariant.filter(productVariant => productVariant.model === "feminina") 
      )
      chosenTshirt = femaleUniquesProducts.filter(tshirt=> tshirt.product.name == productVariant.product.name)
      tshirt = chosenTshirt.filter(tshirt=> tshirt.size == "M");
    }

    // dataBase.products.forEach(product =>{
    //   if(product.id == id){
    //     return res.render("inner-product.ejs",{product});
    //   } 
    // });

    return res.render("inner-product.ejs",{productVariant, productsVariant:tshirt});
  },
  showMaleProduct: async (req, res)=>{
    const {id} = req.params;
    const productVariant = await ProductVariant.findOne({
      where: {id:id},
      include:{
        model: Product,
        as: "product",
        require: false
      },
      raw: false
    })

    const productsVariant = await ProductVariant.findAll({
      include:[{
        model: Product,
        as:"product",
        require: false
      }],
      raw: false
    });

    const maleUniquesProducts = Object.values(
      productsVariant.filter(productVariant => productVariant.model === "masculina")
    )
    const chosenMaleTshirt = maleUniquesProducts.filter(tshirt=> tshirt.product.name == productVariant.product.name)
    const maleTshirts = chosenMaleTshirt.filter(tshirt=> tshirt.size == "M");

    const femaleUniquesProducts = Object.values(
      productsVariant.filter(productVariant => productVariant.model === "feminina") 
    )
    const chosenFemaleTshirt = femaleUniquesProducts.filter(tshirt=> tshirt.product.name == productVariant.product.name)
    const femaleTshirts = chosenFemaleTshirt.filter(tshirt=> tshirt.size == "M");

  return res.render("inner-product.ejs",{productVariant, productsVariant:maleTshirts, tshirt:femaleTshirts[0]});

  },
  showFemaleProduct: async (req, res)=>{
    const {id} = req.params;
    const productVariant = await ProductVariant.findOne({
      where: {id:id},
      include:{
        model: Product,
        as: "product",
        require: false
      },
      raw: false
    })

    const productsVariant = await ProductVariant.findAll({
      include:[{
        model: Product,
        as:"product",
        require: false
      }],
      raw: false
    });

    const femaleUniquesProducts = Object.values(
      productsVariant.filter(productVariant => productVariant.model === "feminina") 
    )
    const chosenFemaleTshirt = femaleUniquesProducts.filter(tshirt=> tshirt.product.name == productVariant.product.name)
    const femaleTshirts = chosenFemaleTshirt.filter(tshirt=> tshirt.size == "M");

    const maleUniquesProducts = Object.values(
      productsVariant.filter(productVariant => productVariant.model === "masculina")
    )
    const chosenMaleTshirt = maleUniquesProducts.filter(tshirt=> tshirt.product.name == productVariant.product.name)
    const maleTshirts = chosenMaleTshirt.filter(tshirt=> tshirt.size == "M");


    return res.render("inner-product.ejs",{productVariant, productsVariant:femaleTshirts, tshirt:maleTshirts[0]});

  }
}

module.exports = HomeController;