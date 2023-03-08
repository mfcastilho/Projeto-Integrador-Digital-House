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
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        category_id:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        tableName: "products",
        timestamps: true
    });

    Product.associate = (models)=>{
        Product.belongsTo(models.Category, {
            foreignKey: "category_id",
            as: "category"
        });
    }

    return Product;
}