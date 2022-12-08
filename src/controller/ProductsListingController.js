
const ProductsListingController = {
  showProductsListing: (req, res)=>{

    const dataBase = require("../data-base/dataBase.json");
    const products = dataBase.products;

    console.log(req.route.path);
    return res.render("products-listing.ejs", {products});
  }
}

module.exports = ProductsListingController;