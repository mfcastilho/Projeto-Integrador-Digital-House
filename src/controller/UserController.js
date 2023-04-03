// const dataBase = require("../data-base/dataBase.json");
// const fs = require("fs");
// const path = require("path");

const bcrypt = require("bcrypt");
const { User, Address, Order, OrderDetail, ProductVariant, Product, Category } = require("../models");

// const UserModel = require("../data-base/UserModel");


const UserController = {

   showUserAreaPage: async (req, res) => {
      const { id } = req.params;

      const user = await User.findByPk(id, {
         include: {
            model: Address,
            as: "address",
            require: false
         },
         raw: false
      })


      return res.render("personal-data-page.ejs", { user });
   },

   showEditUserPersonalDataPage: async (req, res) => {
      const { id } = req.params;

      const user = await User.findByPk(id, {
         include: {
            model: Address,
            as: "address",
            require: false
         },
         raw: false
      })

      return res.render("personal-data-page-edit.ejs", { user });
   },

   updateUserInfos: async (req, res) => {
      const { id } = req.params;
      const {
         email,
         name,
         cpf,
         tel,
         password
      } = req.body;

      const hashPassword = bcrypt.hashSync(password, 10);

      const user = await User.findByPk(id, {
         include: {
            model: Address,
            as: "address",
            require: false
         },
         raw: false
      })


      const updateUser = {
         id,
         email: email ?? user.email,
         name: name ?? user.name,
         cpf: cpf ?? user.cpf,
         tel: tel ?? user.tel,
         is_admin: false
      }

     
      if (password) {
         const hashPassword = bcrypt.hashSync(password, 10);
         updateUser.password = hashPassword;
      }

      await User.update(updateUser, {
         where: { id }
      });

      const userUpdated = await User.findByPk(id);

      req.session.userLogged = userUpdated;


      return res.redirect(`/usuario/area-cliente/${updateUser.id}/dados-pessoais`);
   },

   showUserAddressPage: async (req, res) => {
      const { id } = req.params;

      const userFound = await User.findByPk(id, {
         include: {
            model: Address,
            as: "address",
            require: false
         },
         raw: false
      });

      return res.render("address-page.ejs", { user: userFound });
   },

   showEditUserAddress: async (req, res) => {
      const { id } = req.params;

      const userFound = await User.findByPk(id, {
         include: {
            model: Address,
            as: "address",
            require: false
         },
         raw: false
      });

      return res.render("address-page-edit.ejs", { user: userFound });
   },

   updateUserAddressInfos: async (req, res) => {
      const { id } = req.params;

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
         include: {
            model: Address,
            as: "address",
            require: false
         },
         raw: false
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
         where: { id: user.address.id }
      })

      res.redirect(`/usuario/area-cliente/${user.id}/dados-pessoais`);
   },

   showUserRequestesPage: async (req, res) => {
      const { id } = req.params;

      let ordersInfosArray = [];
   
      const userOrders = await Order.findAll({
         where: { user_id: id }
      });
   
      for (const order of userOrders) {
         const userOrdersDetails = await OrderDetail.findAll({
            where: { order_id: order.id },
            include: [
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
         });
   
         if (userOrdersDetails.length > 0) {
            const orderDetailsPromises = userOrdersDetails.map(async orderDetail => {
               const product = await Product.findOne({
                  where: { id: orderDetail.productVariant.product_id },
                  include: {
                     model: Category,
                     as: "category",
                     require: false
                  },
                  raw: false
               });
   
               const createdAt = orderDetail.order.createdAt;
               const dateOnly = createdAt.toISOString().split("T")[0];
               const [year, month, day] = dateOnly.split("-");
               const formattedDate = `${day}/${month}/${year}`
   
               const orderInfos = {
                  userId: order.user_id,
                  orderCode: orderDetail.order_id,
                  orderDate: formattedDate,
                  productName: product.name,
                  productModel: orderDetail.productVariant.model,
                  productSize: orderDetail.productVariant.size,
                  productColor: orderDetail.productVariant.color,
                  quantity: orderDetail.quantity            
               }
   
               console.log(orderInfos)
   
               return orderInfos;
            });
   
            const ordersDetails = await Promise.all(orderDetailsPromises);
            ordersInfosArray.push(...ordersDetails);
         }
      }
   

      res.render("requests-page.ejs", {orders:ordersInfosArray});

   },

   showEditUserRequests: async (req, res) => {
      const { id } = req.params;

      const order = await Order.findOne({
         where: { user_id: id }
      });

      const orderDetail = await OrderDetail.findOne({
         where: { order_id: order.id },
         include: [
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
         where: { id: orderDetail.productVariant.product_id },
         include: {
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


      const orderInfos = {
         userId: order.user_id,
         orderCode: orderDetail.order_id,
         orderDate: formattedDate,
         productName: product.name,
         productModel: orderDetail.productVariant.model,
         productSize: orderDetail.productVariant.size,
         productColor: orderDetail.productVariant.color,
         quantity: orderDetail.quantity

      }

      res.render("requests-page-edit.ejs", { order: orderInfos });
   },

   updateUserRequestsInfos: (req, res) => {

   }

}


module.exports = UserController;