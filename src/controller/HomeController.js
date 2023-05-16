const {ProductVariant, Product} = require("../models");


const HomeController = {

  showHome: async (req, res)=>{

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

  const limitMaxProductInHomePage = maleUniquesProducts.slice(0, 20);

  return res.render("index.ejs", {productsVariant:limitMaxProductInHomePage});

  },

  showAllProducts: async (req, res)=>{
		const color = req.query.color;
    const order = req.query.order;
	
		const productsVariant = await ProductVariant.findAll({
		include:[{
			model: Product,
			as:"product",
			require: false
		}],
		raw: false
		});

    if(order){

      if(order == "ordemAlfabetica"){
        

        productsVariant.product.name.sort();

        return res.render("products-listing.ejs", {productsVariant});

      }else if(order == "menorPreco"){

        productsVariant.product.price.sort((a, b)=>b - a);
        return res.render("products-listing.ejs", {productsVariant});

      }else if(order == "maiorPreco"){
        productsVariant.product.price.sort((a, b)=>a - b);
        return res.render("products-listing.ejs", {productsVariant});
      }

    }

		
		//se a cor foi escolhida pelo usuário   
		if(color){

		  const productsVariantsColorFiltered = productsVariant.filter((productVariant)=>{
			  return productVariant.color === color
		  });
  
		  const tshirtsSearchResults = productsVariantsColorFiltered.filter((tshirt, index, array)=>{
				  return index == array.findIndex(item=> item.product.name == tshirt.product.name);
		  });
  

		  //se NÃO existe a camiseta com a cor selecionda
		  if(tshirtsSearchResults.length == 0){
  
			  const tshirtArray = [];
			  const msg = "Não foi encontrado nenhuma camiseta com a cor escolhida!";
			  return res.render("products-listing.ejs", {productsVariant:tshirtArray, msg});
  
		  }
  
		  return res.render("products-listing.ejs", {productsVariant:tshirtsSearchResults});
	  } 
	 
	  return res.render("products-listing.ejs", {productsVariant});
 },

  showMaleProductsListing: async (req, res)=>{
    
    const color = req.query.color;
  
    const productsVariant = await ProductVariant.findAll({
      include:[{
        model: Product,
        as:"product",
        require: false
      }],
      raw: false
    });

    let maleUniquesProducts = Object.values(
      productsVariant.filter(productVariant => productVariant.model === "masculina").reduce((acc, productVariant)=>{
        if(!acc[productVariant.product.name]){
          acc[productVariant.product.name] = productVariant;
        }
        return acc;
      }, {})
    )

   //se a cor foi escolhida pelo usuário   
   if(color){

       maleUniquesProducts = productsVariant.filter(productsVariant=>{
         return productsVariant.model == "masculina";
       })

      const productsVariantsColorFiltered = maleUniquesProducts.filter((productVariant)=>{
         return productVariant.color === color
      });

      const tshirtsSearchResults = productsVariantsColorFiltered.filter((tshirt, index, array)=>{
            return index == array.findIndex(item=> item.product.name == tshirt.product.name);
      });


      
      //se NÃO existe a camiseta com a cor selecionda
      if(tshirtsSearchResults.length == 0){

         const tshirtArray = [];
         const msg = "Não foi encontrado nenhuma camiseta com a cor escolhida!";
         return res.render("products-listing.ejs", {productsVariant:tshirtArray, msg});

      }

      return res.render("products-listing.ejs", {productsVariant:tshirtsSearchResults});
   } 
  

    return res.render("products-listing.ejs", {productsVariant:maleUniquesProducts});

  },

  showFemaleProductsListing: async (req, res)=>{
      const color = req.query.color;

      const productsVariant = await ProductVariant.findAll({
         include:[{
         model: Product,
         as:"product",
         require: false
         }],
         raw: false
      });

      let femaleUniquesProducts = Object.values(
         productsVariant.filter(productVariant => productVariant.model === "feminina").reduce((acc, productVariant)=>{
            if(!acc[productVariant.product.name]){
            acc[productVariant.product.name] = productVariant;
            }
            return acc;
         }, {})
      )

      //se a cor foi escolhida pelo usuário   
   if(color){

      femaleUniquesProducts = productsVariant.filter(productsVariant=>{
        return productsVariant.model == "feminina";
      })

     const productsVariantsColorFiltered = femaleUniquesProducts.filter((productVariant)=>{
        return productVariant.color === color
     });

     const tshirtsSearchResults = productsVariantsColorFiltered.filter((tshirt, index, array)=>{
           return index == array.findIndex(item=> item.product.name == tshirt.product.name);
     });


     
     //se NÃO existe a camiseta com a cor selecionda
     if(tshirtsSearchResults.length == 0){

        const tshirtArray = [];
        const msg = "Não foi encontrado nenhuma camiseta com a cor escolhida!";
        return res.render("products-listing.ejs", {productsVariant:tshirtArray, msg});

     }

     return res.render("products-listing.ejs", {productsVariant:tshirtsSearchResults});
  } 

  
  
      return res.render("products-listing.ejs", {productsVariant:femaleUniquesProducts});
  },

  showAnimesProductsListing: async (req, res)=>{

      const color = req.query.color;

      const productsVariant = await ProductVariant.findAll({
         include:[{
         model: Product,
         as:"product",
         require: false
         }],
         raw: false
      });

      let animeUniquesProducts = Object.values(
         productsVariant.filter(productVariant => productVariant.product.categoryId == "2").reduce((acc, productVariant)=>{
            if(!acc[productVariant.product.name]){
            acc[productVariant.product.name] = productVariant;
            }
            return acc;
         }, {})
      )

      //se a cor foi escolhida pelo usuário   
      if(color){

         animeUniquesProducts = productsVariant.filter(productsVariant=>{
         return productsVariant.product.categoryId == 2;
         })

         const productsVariantsColorFiltered = animeUniquesProducts.filter((productVariant)=>{
            return productVariant.color === color;
         });

         const tshirtsSearchResults = productsVariantsColorFiltered.filter((tshirt, index, array)=>{
               return index == array.findIndex(item=> item.product.name == tshirt.product.name);
         });


      
         //se NÃO existe a camiseta com a cor selecionda
         if(tshirtsSearchResults.length == 0){

            const tshirtArray = [];
            const msg = "Não foi encontrado nenhuma camiseta com a cor escolhida!";
            return res.render("products-listing.ejs", {productsVariant:tshirtArray, msg});

         }

         return res.render("products-listing.ejs", {productsVariant:tshirtsSearchResults});
      } 
  
      return res.render("products-listing.ejs", {productsVariant:animeUniquesProducts});
  },

  showMoviesProductsListing: async (req, res)=>{

      const color = req.query.color;

      const productsVariant = await ProductVariant.findAll({
         include:[{
         model: Product,
         as:"product",
         require: false
         }],
         raw: false
      });

      let movieUniquesProducts = Object.values(
         productsVariant.filter(productVariant => productVariant.product.categoryId == "1").reduce((acc, productVariant)=>{
            if(!acc[productVariant.product.name]){
            acc[productVariant.product.name] = productVariant;
            }
            return acc;
         }, {})
      )

      //se a cor foi escolhida pelo usuário   
      if(color){

         movieUniquesProducts = productsVariant.filter(productsVariant=>{
         return productsVariant.product.categoryId == 1;
         })

         const productsVariantsColorFiltered = movieUniquesProducts.filter((productVariant)=>{
            return productVariant.color === color;
         });

         const tshirtsSearchResults = productsVariantsColorFiltered.filter((tshirt, index, array)=>{
               return index == array.findIndex(item=> item.product.name == tshirt.product.name);
         });


      
         //se NÃO existe a camiseta com a cor selecionda
         if(tshirtsSearchResults.length == 0){

            const tshirtArray = [];
            const msg = "Não foi encontrado nenhuma camiseta com a cor escolhida!";
            return res.render("products-listing.ejs", {productsVariant:tshirtArray, msg});

         }

         return res.render("products-listing.ejs", {productsVariant:tshirtsSearchResults});
      } 
    
  
       return res.render("products-listing.ejs", {productsVariant:movieUniquesProducts});
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
    const maleTshirts = chosenMaleTshirt.filter((tshirt, index, array)=>{
      return index == array.findIndex(item=> item.color == tshirt.color);
    });

    const maleTshirtsSizes = chosenMaleTshirt.filter((tshirt, index, array)=>{
      return index === array.findIndex(item=> item.size == tshirt.size);
    });

    const sizeOrder = ["P", "M", "G"];
    maleTshirtsSizes.sort((a, b)=>{
      const aIndex = sizeOrder.indexOf(a.size);
      const bIndex = sizeOrder.indexOf(b.size);
      return aIndex - bIndex
    });

    const femaleUniquesProducts = Object.values(
      productsVariant.filter(productVariant => productVariant.model === "feminina") 
    )
    const chosenFemaleTshirt = femaleUniquesProducts.filter(tshirt=> tshirt.product.name == productVariant.product.name)
    const femaleTshirts = chosenFemaleTshirt.filter((tshirt, index, array)=>{
      return index == array.findIndex(item=> item.color == tshirt.color);
    });

    if(!femaleTshirts[0]){
      return res.render("inner-product-male.ejs",{productVariant, productsVariant:maleTshirts, routeGender:"masculino", sizes:maleTshirtsSizes});
    }

    return res.render("inner-product.ejs",{productVariant, productsVariant:maleTshirts, tshirt:femaleTshirts[0], routeGender:"masculino", sizes:maleTshirtsSizes});

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
    // const femaleTshirts = chosenFemaleTshirt.filter(tshirt=> tshirt.size == "M");
    const femaleTshirts = chosenFemaleTshirt.filter((tshirt, index, array)=>{
      return index == array.findIndex(item=> item.color == tshirt.color);
    });

    const femaleTshirtsSizes = chosenFemaleTshirt.filter((tshirt, index, array)=>{
      return index === array.findIndex(item=> item.size == tshirt.size);
    });

    const sizeOrder = ["P", "M", "G"];
    femaleTshirtsSizes.sort((a, b)=>{
      const aIndex = sizeOrder.indexOf(a.size);
      const bIndex = sizeOrder.indexOf(b.size);
      return aIndex - bIndex
    });
     
    const maleUniquesProducts = Object.values(
      productsVariant.filter(productVariant => productVariant.model === "masculina")
    )

    const chosenMaleTshirt = maleUniquesProducts.filter(tshirt=> tshirt.product.name == productVariant.product.name)
    const maleTshirts = chosenMaleTshirt.filter((tshirt, index, array)=>{
      return index == array.findIndex(item=> item.color == tshirt.color);
    });

    if(!maleTshirts[0]){
      return res.render("inner-product-female.ejs",{productVariant, productsVariant:femaleTshirts, routeGender:"feminino", sizes:femaleTshirtsSizes});
    }

    return res.render("inner-product.ejs",{productVariant, productsVariant:femaleTshirts, tshirt:maleTshirts[0], routeGender:"feminino", sizes:femaleTshirtsSizes});

  }
  
}

module.exports = HomeController;