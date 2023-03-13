
const ShoppingCartController = {
  showShoppingCart: (req, res)=>{

    console.log(req.route.path);
    return res.render("shopping-cart.ejs");
  },
  getProductInfosToBuy: (req, res)=>{

    const {id} = req.params;
    const {size, model, color, price} = req.body;
    
    const product = {
      id,
      price,
      model,
      color,
      size
    }
    return res.render("shopping-cart.ejs", {product});
  }
}

module.exports = ShoppingCartController;