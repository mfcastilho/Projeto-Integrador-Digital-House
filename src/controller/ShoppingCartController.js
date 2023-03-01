
const ShoppingCartController = {
  showShoppingCart: (req, res)=>{

    console.log(req.route.path);
    return res.render("shopping-cart.ejs");
  }
}

module.exports = ShoppingCartController;