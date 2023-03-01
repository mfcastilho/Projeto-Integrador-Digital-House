

const InnerProductController = {
  showProduct: (req, res)=>{

    const {id} = req.params;

    const dataBase = require("../data-base/dataBase.json");


    dataBase.products.forEach(product =>{
      if(product.id == id){
        return res.render("inner-product.ejs",{product});
      } 
    });
  }
}



module.exports = InnerProductController;