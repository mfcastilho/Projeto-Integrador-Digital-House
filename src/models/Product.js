const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) =>{
        const Product = sequelize.define("Product", {
            id:{
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false
            },
            tshirt_print:{
                type: DataTypes.STRING,
                allowNull: false
            },
            price:{
                type: DataTypes.DOUBLE,
                allowNull: false
            },
            active:{
                type: DataTypes.BOOLEAN
            }
        },
        {
            tableName: "products",
            timestamps: true
        });

        return Product;
    }