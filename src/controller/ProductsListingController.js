
const ProductsListingController = {
  showProductsListing: (req, res)=>{

    console.log(req.route.path);
    return res.render("products-listing.ejs");
  }
}

module.exports = ProductsListingController;