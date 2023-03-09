const {Category} = require("../models");

async function getCategories(){
    const categories = await Category.findAll();
     console.log(categories);
}

async function getCategory(){
    const id = "2";

    const category = await Category.findOne({
        where:{id:id}
    })

    console.log(category.category_name);
}

async function getCategoryByPk(){
    const id = "1";
    const category = await Category.findByPk(id);

    console.log(category.category_name);
}

// Category.findAll().then(res=> console.log(res)).catch(err => console.log(err));

//getCategories();
//getCategory();
getCategoryByPk();