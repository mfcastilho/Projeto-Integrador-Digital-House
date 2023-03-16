const dataBase = require("../data-base/dataBase.json");
const fs = require("fs");
const path = require("path");

const {User, Address, Order, OrderDetail, ProductVariant, Product, Category} = require("../models");

const UserModel = require("../data-base/UserModel");


const UserController = {
  showUserAreaPage: async (req, res) =>{
    const {id} = req.params;

    const user = await User.findByPk(id, {
      include:{
        model: Address,
        as: "address",
        require: false
      },
      raw:false
    })

    return res.render("user-panel-personal-data.ejs", {user});
  },

  showEditUserPersonalDataPage: async (req, res) =>{
    const {id} = req.params;

    const user = await User.findByPk(id, {
      include:{
        model:Address,
        as: "address",
        require: false
      },
      raw: false
    })

    return res.render("edit-user-panel-personal-data.ejs", {user});
  },

  updateUserInfos: async (req, res)=>{
    const {id} = req.params;
    const {
           email, 
           name, 
           cpf, 
           tel, 
           password
          } = req.body;

    const user = await User.findByPk(id, {
      include:{
        model: Address,
        as: "address",
        require: false
      },
      raw:false
    })      

    const updateUser = {
      id,
      email: email == undefined ? user.email : email, 
      password: password == undefined ? user.password : password,
       name: name == undefined ? user.name : name,
       cpf: cpf == undefined ? user.cpf : cpf,
       tel: tel == undefined ? user.tel : tel,
       is_admin: false
    }

    await User.update(updateUser, {
      where:{id}
    })

    return res.redirect(`/usuario/area-cliente/${updateUser.id}/dados-pessoais`);
  },
  
  showUserAddressPage: async (req, res)=>{
    const {id} = req.params;
   
    const userFound = await User.findByPk(id, {
      include:{
        model: Address,
        as: "address",
        require: false
      },
      raw: false
    });

    return res.render("address-page.ejs", {user:userFound});
  },

  showEditUserAddress: async (req, res)=>{
    const {id} = req.params;
    
    const userFound = await User.findByPk(id, {
      include:{
        model: Address,
        as: "address",
        require: false
      },
      raw: false
    });
  
    return res.render("address-page-edit.ejs", {user:userFound});
  },
  
  updateUserAddressInfos: async (req, res)=>{
    const {id} = req.params;

    const {
      zipCode,
      publicPlace,
      number,
      complement,
      district,
      reference,
      city,
      state
    } = req.body;

    const user = await User.findByPk(id, {
      include:{
        model: Address,
        as: "address",
        require: false
      },
      raw:false
    })  
   
    const userAddressUpdate = {
      id: user.address.id,
      zip_code: zipCode == undefined ? user.address.zip_code : zipCode,
      public_place: publicPlace == undefined ? user.public_place : publicPlace,
      number: number == undefined ? user.number : number,
      complement: complement == undefined ? user.complement : complement,
      district: district == undefined ? user.district : district,
      reference: reference == undefined ? user.reference : reference, 
      city: city == undefined ? user.city : city,
      state: state == undefined ? user.state : state    
    }

    await Address.update(userAddressUpdate, {
      where:{id:user.address.id}
    })

    res.redirect(`/usuario/area-cliente/${user.id}/dados-pessoais`);  
  },

  showUserRequestesPage: async (req, res)=>{
    const {id} = req.params;

    const order = await Order.findOne({
      where:{user_id: id}  
    });

    const orderDetail = await OrderDetail.findOne({
      where:{order_id: order.id},
      include:[
        {
        model: Order,
        as: "order",
        require: false
        },
        {
          model: ProductVariant,
          as: "productVariant",
          require: false
        }
      ],
      raw: false
    })

    const product = await Product.findOne({
      where:{id:orderDetail.productVariant.product_id},
      include:{
        model: Category,
        as: "category",
        require: false
      },
      raw: false
    })

    const createdAt = orderDetail.order.createdAt;
    const dateOnly = createdAt.toISOString().split("T")[0];
    const [year, month, day] = dateOnly.split("-");
    const formattedDate = `${day}/${month}/${year}`

    // console.log(orderDetail.productVariant.product_id);
    // console.log(orderDetail.order_id)
    // console.log(formattedDate)
    // console.log(product.name)

    const orderInfos = {
      orderCode: orderDetail.order_id,
      orderDate: formattedDate,
      productName: product.name,
      productModel: orderDetail.productVariant.model,
      productSize: orderDetail.productVariant.size,
      productColor: orderDetail.productVariant.color,
      quantity: orderDetail.quantity

    }

    console.log(orderInfos)

    res.render("requests.ejs", {order:orderInfos})
  },

  showEditUserRequestes: (req, res)=>{
    
  },

  updateUserRequestsInfos: (req, res)=>{

  }

}


module.exports = UserController;